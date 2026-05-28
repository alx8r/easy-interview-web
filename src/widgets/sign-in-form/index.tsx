'use client';

import { SignInForm } from '@/ui/modules';
import { useAppDispatch } from '@/redux';
import { authService, globalSlice } from '@/redux/stores';
import { SignInFormType } from '@/common/form-types';
import { SignInRequestDto } from '@/redux/stores/auth/dtos';
import { UpdateUserGlobalStateDto } from '@/redux/stores/global/dtos';
import { errorHandler } from '@/redux/common/error';
import { useRouter } from 'next/navigation';
import { toast } from '@heroui/react';

export default function SignInFormWidget() {
  const DASHBOARD_PATHNAME = 'dashboard';

  const router = useRouter();

  const dispatch = useAppDispatch();

  const { updateUserGlobalState } = globalSlice.actions;

  const [signIn, { isLoading }] = authService.useSignInMutation();

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

      router.push(`/${DASHBOARD_PATHNAME}`);
    }

    if (error) {
      const validError = errorHandler(error);

      toast.danger(validError.message.error.toString(), {
        description: validError.message.message,
      });
    }
  };

  return <SignInForm isLoading={isLoading} initValues={initValues} onSubmit={onSubmit} />;
}
