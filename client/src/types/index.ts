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
