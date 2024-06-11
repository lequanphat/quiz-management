import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';
import { CreateUserDTO } from '../types';
import { GOOGLE_CLIENT_ID } from 'src/config';
import { OAuth2Client } from 'google-auth-library';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async findUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  async createUser(user: CreateUserDTO) {
    const newUser = await this.userRepository.save(user);
    return newUser;
  }

  async login(credential: string) {
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
        });
        return newUser;
      }
    };
    return verify().catch((error) => {
      throw new HttpException(error, 403);
    });
  }
}
