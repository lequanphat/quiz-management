import { Expose } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export interface UserGoogleLoginDTO {
  credential: string;
}

export class UserRegisterDTO {
  @IsString({ message: 'The name should be a string' })
  @Matches(/^[^!@#$%^&*()=0-9/\\}{_+;:"'><.,\][]+$/, {
    message: 'The name contains only letters and spaces',
  })
  @MinLength(8, { message: 'The name must have at least 8 characters' })
  @MaxLength(20, {
    message: 'The name can only contain a maximum of 20 characters',
  })
  @Expose()
  displayName: string;

  @IsNotEmpty()
  @IsEmail()
  @Expose()
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must have at least 6 characters' })
  @MaxLength(20, { message: 'Password must not exceed 20 characters' })
  @Matches(/^[a-zA-Z0-9]{6,20}$/, {
    message: 'Password only contains numbers and characters',
  })
  @IsNotEmpty({ message: 'Please provide your password' })
  @Expose()
  password: string;
}
export class UserLoginDTO {
  @IsNotEmpty()
  @IsEmail()
  @Expose()
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must have at least 6 characters' })
  @MaxLength(20, { message: 'Password must not exceed 20 characters' })
  @Matches(/^[a-zA-Z0-9]{6,20}$/, {
    message: 'Password only contains numbers and characters',
  })
  @IsNotEmpty({ message: 'Please provide your password' })
  @Expose()
  password: string;
}
export class VerifyAccountDTO {
  @IsString()
  @IsNotEmpty()
  otp: string;
  @IsString()
  @IsNotEmpty()
  user_id: number;
}
