export interface AuthType {
  displayName: string;
  avatar: string;
  isAuthenticated: boolean;
  isLoading: boolean;
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
