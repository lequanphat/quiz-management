import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import {
  UserGoogleLoginDTO,
  UserLoginDTO,
  UserRegisterDTO,
  VerifyAccountDTO,
} from '../types';
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

  @Post('register')
  async register(@Body() data: UserRegisterDTO, @Res() res: Response) {
    try {
      const registerData = await this.authService.register(data);
      return res.json({ user_id: registerData.id });
    } catch (error) {
      throw error;
    }
  }
  @Post('verify-account')
  async verifyAccount(@Body() data: VerifyAccountDTO, @Res() res: Response) {
    try {
      console.log(data);
      const userData = await this.authService.verifyAccount(data);
      return res.json({ data: userData });
    } catch (error) {
      throw error;
    }
  }
  @Post('login')
  async login(@Body() data: UserLoginDTO, @Res() res: Response) {
    try {
      const loginData = await this.authService.login(data);

      const accessToken = this.jwtService.signAccessToken({
        id: loginData.id,
        role: loginData.role,
      });
      const refreshToken = this.jwtService.signRefreshToken({
        id: loginData.id,
        role: loginData.role,
      });
      this.cookieService.saveCookie(res, 'refreshToken', refreshToken);
      return res
        .status(HttpStatus.OK)
        .json({ data: loginData, token: accessToken });
    } catch (error) {
      throw error;
    }
  }

  @Post('google-login')
  async googleLogin(@Body() data: UserGoogleLoginDTO, @Res() res: Response) {
    const credential = data.credential;
    try {
      const data = await this.authService.googleLogin(credential);
      const accessToken = this.jwtService.signAccessToken({
        id: data.id,
        role: data.role,
      });
      const refreshToken = this.jwtService.signRefreshToken({
        id: data.id,
        role: data.role,
      });
      this.cookieService.saveCookie(res, 'refreshToken', refreshToken);
      return res.status(HttpStatus.OK).json({ data, token: accessToken });
    } catch (error) {
      throw error;
    }
  }
}
