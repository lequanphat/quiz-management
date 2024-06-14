import { DEFAULT_AVATAR_URL } from 'src/config';
import { Role } from 'src/types';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  displayName: string;

  @Column({ default: DEFAULT_AVATAR_URL })
  avatar: string;

  @Column()
  email: string;

  @Column({ default: 'nopass' })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ default: Role.USER })
  role: Role;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
