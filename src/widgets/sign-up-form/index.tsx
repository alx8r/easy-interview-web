'use client';

import { SignUpFormType } from '@/common/form-types';
import { useAppDispatch, useAppSelector } from '@/redux';
import { errorHandler } from '@/redux/common/error';
import { authService, globalSlice } from '@/redux/stores';
import { SignUpRequestDto } from '@/redux/stores/auth/dtos';
import { UpdateUserGlobalStateDto } from '@/redux/stores/global/dtos';
import { SignUpForm } from '@/ui/modules';
import { toast } from '@heroui/react';

export default function SignUpFormWidget() {
  const dispatch = useAppDispatch();

  const { updateUserGlobalState } = globalSlice.actions;

  const { isLoading } = useAppSelector((state) => state.authReducer);

  const [signUp] = authService.useSignUpMutation();

  const initValues: SignUpFormType = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = async (values: SignUpFormType): Promise<void> => {
    const body = new SignUpRequestDto(values.email, values.password, values.confirmPassword);

    const { data, error } = await signUp(body);

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

      toast.danger(validError.message.error.toString(), {
        description: validError.message.message,
      });
    }
  };

  return <SignUpForm isLoading={isLoading} initValues={initValues} onSubmit={onSubmit} />;
}
