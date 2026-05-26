'use client';

import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux';
import { Header } from '@/ui/modules';
import { AuthTabsEnum } from '@/common/enums';

export default function HeaderWidget() {
  const router = useRouter();

  const AUTH_PATHNAME = 'auth';

  const { user } = useAppSelector((state) => state.globalReducer);

  const onSignInClick = (): void => {
    const params = new URLSearchParams();
    params.set('action', AuthTabsEnum.SignIn);

    router.push(`${AUTH_PATHNAME}?${params.toString()}`);
  };

  const onSignUpClick = (): void => {
    const params = new URLSearchParams();
    params.set('action', AuthTabsEnum.SingUp);

    router.push(`${AUTH_PATHNAME}?${params.toString()}`);
  };

  return (
    <Header
      isAuthorized={!!user}
      avatartAlt={''}
      avatarSrc={''}
      avatarFallback={''}
      onSignInClick={onSignInClick}
      onSignUpClick={onSignUpClick}
    />
  );
}
