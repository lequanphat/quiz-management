import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { User } from 'src/entities/User';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from 'src/common/services/jwt.service';
import { CookieService } from 'src/common/services/cookies.service';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, JwtService, CookieService],
})
export class AuthModule {}
