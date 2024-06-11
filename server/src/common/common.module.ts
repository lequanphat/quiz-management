import { Module } from '@nestjs/common';
import { CookieService } from './services/cookies.service';
import { JwtService } from './services/jwt.service';

@Module({
  providers: [CookieService, JwtService],
  exports: [CookieService, JwtService],
})
export class CommonModule {}
