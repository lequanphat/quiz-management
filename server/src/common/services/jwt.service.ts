import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { ACCESS_SECRET, REFRESH_SECRET } from 'src/config';
import { JWTPayload } from 'src/types';

@Injectable()
export class JwtService {
  // access token
  signAccessToken(
    payload: JWTPayload,
    expiryTime = '30m',
    secret?: string,
  ): string {
    const accessTokenSecret = secret || ACCESS_SECRET;
    return jwt.sign(payload, accessTokenSecret, { expiresIn: expiryTime });
  }
  verifyAccessToken(token: string, secret?: string): any {
    const accessTokenSecret = secret || ACCESS_SECRET;
    return jwt.verify(token, accessTokenSecret);
  }

  // refresh token
  verifyRefreshToken(token: string, secret?: string): any {
    const refreshTokenSecret = secret || REFRESH_SECRET;
    return jwt.verify(token, refreshTokenSecret);
  }
  signRefreshToken(
    payload: JWTPayload,
    expiryTime = '2d',
    secret?: string,
  ): string {
    const refreshTokenSecret = secret || REFRESH_SECRET;
    return jwt.sign(payload, refreshTokenSecret, { expiresIn: expiryTime });
  }
}
