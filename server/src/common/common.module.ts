import { Module } from '@nestjs/common';
import { CookieService } from './services/cookies.service';
import { JwtService } from './services/jwt.service';
import { CloudinaryService } from './services/cloudinary.service';

@Module({
  providers: [CookieService, JwtService, CloudinaryService],
  exports: [CookieService, JwtService, CloudinaryService],
})
export class CommonModule {}
