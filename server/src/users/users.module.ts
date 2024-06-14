import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UsersService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { JwtService } from 'src/common/services/jwt.service';
import { CloudinaryService } from 'src/common/services/cloudinary.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UsersService, JwtService, CloudinaryService],
})
export class UsersModule {}
