export enum Role {
  ADMIN = 'admin',
  USER = 'user',
  TEACHER = 'teacher',
}
export interface JWTPayload {
  id: number;
  role: Role;
}
