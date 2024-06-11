import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { UsersService } from '../services/user.service';
import { Response } from 'express';
import { JwtService } from 'src/common/services/jwt.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  @Get('user')
  async getUser(@Req() req: any, @Res() res: Response) {
    const id: number = req.user.id;
    try {
      const user = await this.userService.getUserById(id);
      const accessToken = this.jwtService.signAccessToken({
        id,
      });
      return res.status(HttpStatus.OK).json({ data: user, token: accessToken });
    } catch (error) {
      throw error;
    }
  }
}
