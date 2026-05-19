export interface IUpdateUserGlobalStateDto {
  id: number;
  email: string;
  accessToken: string;
  refreshToken: string;
}

export class UpdateUserGlobalStateDto implements IUpdateUserGlobalStateDto {
  id: number;
  email: string;
  accessToken: string;
  refreshToken: string;

  constructor(id: number, email: string, accessToken: string, refreshToken: string) {
    this.id = id;
    this.email = email;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  public static fromSerializable(data: IUpdateUserGlobalStateDto): UpdateUserGlobalStateDto {
    return new UpdateUserGlobalStateDto(data.id, data.email, data.accessToken, data.refreshToken);
  }

  public toSerializable(): IUpdateUserGlobalStateDto {
    return {
      id: this.id,
      email: this.email,
      accessToken: this.accessToken,
      refreshToken: this.refreshToken,
    };
  }
}