export interface AuthType {
  displayName: string;
  email: string;
  avatar: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  isLoaded: boolean;
}

export interface StateType {
  auth: AuthType;
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
