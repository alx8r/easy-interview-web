export interface IState {
  user?: {
    id: number;
    email: string;
    accessToken: string;
    refreshToken: string;
  };
}
