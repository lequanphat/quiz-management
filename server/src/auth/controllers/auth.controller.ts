import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserLoginDTO } from '../types';
import { AuthService } from '../services/auth.service';
import { JwtService } from 'src/common/services/jwt.service';
import { CookieService } from 'src/common/services/cookies.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly jwtService: JwtService,
    private readonly cookieService: CookieService,
  ) {}
  @Post('login')
  async login(@Body() data: UserLoginDTO, @Res() res: Response) {
    const credential = data.credential;
    try {
      const data = await this.authService.login(credential);
      const accessToken = this.jwtService.signAccessToken({
        id: data.id,
      });
      const refreshToken = this.jwtService.signRefreshToken({
        id: data.id,
      });
      this.cookieService.saveCookie(res, 'refreshToken', refreshToken);
      return res.status(HttpStatus.OK).json({ data, token: accessToken });
    } catch (error) {
      throw error;
    }
  }
}
