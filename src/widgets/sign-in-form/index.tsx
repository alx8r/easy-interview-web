'use client';

import { SignInForm } from '@/ui/modules';
import { useAppDispatch, useAppSelector } from '@/redux';
import { authService, globalSlice } from '@/redux/stores';
import { SignInFormType } from '@/common/form-types';
import { SignInRequestDto } from '@/redux/stores/auth/dtos';
import { SetupAlertGlobalStateDto, UpdateUserGlobalStateDto } from '@/redux/stores/global/dtos';
import { errorHandler } from '@/redux/common/error';

export default function SignInFormWidget() {
  const dispatch = useAppDispatch();

  const { updateUserGlobalState, setupAlertGlobalState } = globalSlice.actions;

  const { isLoading } = useAppSelector((state) => state.authReducer);

  const [signIn] = authService.useSignInMutation();

  const initValues: SignInFormType = {
    email: '',
    password: '',
  };

  const onSubmit = async (values: SignInFormType): Promise<void> => {
    const body = new SignInRequestDto(values.email, values.password);

    const { data, error } = await signIn(body);

    if (data) {
      const userGlobalStateData = new UpdateUserGlobalStateDto(
        data.id,
        data.email,
        data.accessToken,
        data.refreshToken
      );

      dispatch(updateUserGlobalState(userGlobalStateData.toSerializable()));
    }

    if (error) {
      const validError = errorHandler(error);

      const globalAlertStateData = new SetupAlertGlobalStateDto(true, validError.message.message);

      dispatch(setupAlertGlobalState(globalAlertStateData.toSerializable()));
    }
  };

  return <SignInForm isLoading={isLoading} initValues={initValues} onSubmit={onSubmit} />;
}
