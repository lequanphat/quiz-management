import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { UpdateProfileDTO } from '../types';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async getUserById(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
      select: ['id', 'displayName', 'avatar', 'email', 'role'],
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  async updateProfile(data: UpdateProfileDTO, user_id: number) {
    const user = await this.userRepository.findOne({ where: { id: user_id } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    await this.userRepository.update(user.id, {
      avatar: data.avatar,
    });
    return user;
  }
}
