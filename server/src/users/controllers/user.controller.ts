import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from '../services/user.service';
import { Response } from 'express';
import { JwtService } from 'src/common/services/jwt.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/common/services/cloudinary.service';
import { UpdateProfileDTO } from '../types';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}
  @Get('user')
  async getUser(@Req() req: any, @Res() res: Response) {
    const id: number = req.user.id;
    try {
      const user = await this.userService.getUserById(id);
      const accessToken = this.jwtService.signAccessToken({
        id,
        role: user.role,
      });
      return res.status(HttpStatus.OK).json({ data: user, token: accessToken });
    } catch (error) {
      throw error;
    }
  }

  @Post('update-profile')
  @UseInterceptors(FileInterceptor('avatar'))
  async updateProfile(
    @UploadedFile() avatar,
    @Body() data: UpdateProfileDTO,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const image = `data:${avatar.mimetype};base64,${avatar.buffer.toString('base64')}`;
      const result = await this.cloudinaryService.upload(image);
      data.avatar = result.url;
      const user_id: number = req.user.id;
      const user = await this.userService.updateProfile(data, user_id);
      return res.status(HttpStatus.OK).json({ data: user });
    } catch (error) {
      throw error;
    }
  }
}
