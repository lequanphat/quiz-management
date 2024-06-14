import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';
import { GOOGLE_CLIENT_ID } from 'src/config';
import { OAuth2Client } from 'google-auth-library';
import { UserLoginDTO, UserRegisterDTO, VerifyAccountDTO } from '../types';
import * as bcrypt from 'bcrypt';
import { UserVerification } from 'src/entities/UserVerification';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(UserVerification)
    private userVerificationRepository: Repository<UserVerification>,
  ) {}
  async findUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  async register(registerData: UserRegisterDTO) {
    const user = await this.findUserByEmail(registerData.email);
    if (user && user.isVerified) {
      throw new HttpException(
        'Email đã được sử dụng với một tài khoản khác.',
        403,
      );
    } else {
      let newUser = null;
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(registerData.password, salt);
      if (user) {
        await this.userRepository.update(user.id, {
          ...registerData,
          password: hashedPassword,
        });
        newUser = user;
      } else {
        newUser = await this.userRepository.save({
          ...registerData,
          password: hashedPassword,
        });
      }
      let userVerification = await this.userVerificationRepository.findOne({
        where: { user_id: newUser.id },
      });
      console.log(userVerification);
      if (userVerification) {
        await this.userVerificationRepository.update(userVerification.id, {
          otp: Math.floor(100000 + Math.random() * 900000).toString(),
          expiredTime: new Date(Date.now() + 5 * 60 * 1000),
        });
      } else {
        userVerification = await this.userVerificationRepository.save({
          user_id: newUser.id,
          otp: Math.floor(100000 + Math.random() * 900000).toString(),
          expiredTime: new Date(Date.now() + 5 * 60 * 1000),
        });
      }
      return newUser;
    }
  }

  async verifyAccount(verifyAccountData: VerifyAccountDTO) {
    const user = await this.userRepository.findOne({
      where: { id: verifyAccountData.user_id },
    });
    if (user) {
      const userVerification = await this.userVerificationRepository.findOne({
        where: { user_id: user.id },
      });
      if (userVerification) {
        if (userVerification.otp === verifyAccountData.otp) {
          if (userVerification.expiredTime < new Date()) {
            throw new HttpException('Mã OTP đã hết hạn.', 403);
          }
          await this.userRepository.update(user.id, { isVerified: true });
          await this.userVerificationRepository.delete(userVerification.id);
          return user;
        } else {
          throw new HttpException('Mã OTP không chính xác.', 403);
        }
      } else {
        throw new HttpException('Mã OTP không tồn tại.', 403);
      }
    } else {
      throw new HttpException('Tài khoản không tồn tại.', 403);
    }
  }
  async login(loginData: UserLoginDTO) {
    const user = await this.findUserByEmail(loginData.email);
    if (user) {
      if (!user.isVerified) {
        throw new HttpException('Tài khoản chưa được kích hoạt.', 403);
      }
      if (!user.isActive) {
        throw new HttpException('Tài khoản hiện đang bị khóa.', 403);
      }
      const isMatch = await bcrypt.compare(loginData.password, user.password);
      if (!isMatch) {
        throw new HttpException('Mật khẩu sai.', 403);
      }
      return user;
    } else {
      throw new HttpException('Tài khoản không tồn tại.', 403);
    }
  }
  async googleLogin(credential: string) {
    const client = new OAuth2Client(GOOGLE_CLIENT_ID);
    const verify = async () => {
      const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      const email = payload['email'];
      const displayName = payload['given_name'];
      const avatar = payload['picture'];
      const user = await this.findUserByEmail(email);
      if (user) {
        return user;
      } else {
        const newUser = await this.userRepository.save({
          email,
          displayName,
          avatar,
          isVerified: true,
        });
        return newUser;
      }
    };
    return verify().catch((error) => {
      throw new HttpException(error, 403);
    });
  }
}
