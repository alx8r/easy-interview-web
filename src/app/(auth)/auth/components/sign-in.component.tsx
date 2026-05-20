'use client';

import { SignInForm } from '@/ui/modules';
import { useAppDispatch, useAppSelector } from '@/redux';
import { authService, globalSlice } from '@/redux/stores';
import { SignInFormType } from '@/common/form-types';
import { SignInRequestDto } from '@/redux/stores/auth/dtos';
import { UpdateUserGlobalStateDto } from '@/redux/stores/global/dtos';

export default function SignInComponent() {
  const dispatch = useAppDispatch();

  const { updateUserGlobalState } = globalSlice.actions;

  const { isLoading } = useAppSelector((state) => state.authReducer);

  const [signIn] = authService.useSignInMutation();

  const signInFormInitValues: SignInFormType = {
    email: '',
    password: '',
  };

  const signInFormOnSubmit = async (values: SignInFormType): Promise<void> => {
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
      console.log(error);
      // const validError = errorHandler(error);

      // const globalAlertStateData = new SetupAlertGlobalStateDto(true, validError.message.message);

      // dispatch(setupAlertGlobalState(globalAlertStateData.toSerializable()));
    }
  };

  return <SignInForm initValues={signInFormInitValues} onSubmit={signInFormOnSubmit} />;
}
