export interface ISetupAlertGlobalStateDto {
  visible: boolean;
  message: string;
}

export class SetupAlertGlobalStateDto implements ISetupAlertGlobalStateDto {
  visible: boolean;
  message: string;

  constructor(visible: boolean, message: string) {
    this.visible = visible;
    this.message = message;
  }

  public static fromSerializable(data: ISetupAlertGlobalStateDto): SetupAlertGlobalStateDto {
    return new SetupAlertGlobalStateDto(data.visible, data.message);
  }

  public toSerializable(): ISetupAlertGlobalStateDto {
    return {
      visible: this.visible,
      message: this.message,
    };
  }
}