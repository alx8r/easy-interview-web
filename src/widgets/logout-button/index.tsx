'use client';

import { Paths } from '@/common/data/paths';
import { useAppDispatch } from '@/redux';
import { globalSlice } from '@/redux/stores';
import { Button } from '@heroui/react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ArrowRightFromSquare } from '@gravity-ui/icons';

export default function LogoutButtonWidget() {
  const t = useTranslations();

  const router = useRouter();

  const dispatch = useAppDispatch();

  const { resetUserGlobalState } = globalSlice.actions;

  const onLogoutClick = () => {
    dispatch(resetUserGlobalState());

    router.push(`/${Paths.Auth}`);
  };

  return (
    <Button variant="danger" onClick={onLogoutClick}>
      <ArrowRightFromSquare />
      {t('buttons.logout')}
    </Button>
  );
}
