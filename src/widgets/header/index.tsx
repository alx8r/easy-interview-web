'use client';

import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux';
import { Header } from '@/ui/modules';
import { AuthTabsEnum } from '@/common/enums';
import { Paths } from '@/common/data/paths';

export default function HeaderWidget() {
  const router = useRouter();

  const { user } = useAppSelector((state) => state.globalReducer);

  const onSignInClick = (): void => {
    const params = new URLSearchParams();
    params.set('action', AuthTabsEnum.SignIn);

    router.push(`/${Paths.Auth}?${params.toString()}`);
  };

  const onSignUpClick = (): void => {
    const params = new URLSearchParams();
    params.set('action', AuthTabsEnum.SingUp);

    router.push(`/${Paths.Auth}?${params.toString()}`);
  };

  const onAvatarClick = (): void => {
    if (user) {
      router.push( `/${Paths.Profile}/${user.id}`);
    }
  };

  return (
    <Header
      isAuthorized={!!user}
      avatartAlt={''}
      avatarSrc={''}
      avatarFallback={''}
      onSignInClick={onSignInClick}
      onSignUpClick={onSignUpClick}
      onAvatarClick={onAvatarClick}
    />
  );
}
