export enum Role {
  ADMIN = 'admin',
  USER = 'user',
  TEACHER = 'teacher',
}
export interface AuthType {
  displayName: string;
  email: string;
  avatar: string;
  role: Role;
  isAuthenticated: boolean;
  isLoading: boolean;
  isLoaded: boolean;
}
export interface UserType {
  isLoading: boolean;
}

export interface StateType {
  auth: AuthType;
  user: UserType;
}

export interface AnswerType {
  id: string;
  content: string;
}
export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
  TEXT = 'text',
}
