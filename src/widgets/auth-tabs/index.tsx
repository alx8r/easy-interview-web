'use client';

import { Key, Tabs } from '@heroui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import SignInFormWidget from '../sign-in-form';
import SignUpFormWidget from '../sign-up-form';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { AuthTabsEnum } from '@/common/enums';
import { useAppSelector } from '@/redux';

export default function AuthTabsWidget() {
  const t = useTranslations();

  const router = useRouter();

  const CURRENT_PATHNAME = 'auth';
  const DASHBOARD_PATHNAME = 'dashboard';

  const searchParams = useSearchParams();
  const actionParam = searchParams.get('action');

  const { user } = useAppSelector((state) => state.globalReducer);

  const [activeTab, setActiveTab] = useState<AuthTabsEnum>(
    (actionParam as AuthTabsEnum) || AuthTabsEnum.SignIn
  );

  useEffect(() => {
    if (user) {
      router.push(`${DASHBOARD_PATHNAME}`);
    }

    if (!actionParam || !Object.values(AuthTabsEnum).includes(actionParam as AuthTabsEnum)) {
      const params = new URLSearchParams();
      params.set('action', AuthTabsEnum.SignIn);

      router.push(`${CURRENT_PATHNAME}?${params.toString()}`);
    }
  }, [user, actionParam, router]);

  const onSelectionChange = (value: Key) => {
    const params = new URLSearchParams();
    params.set('action', value as AuthTabsEnum);

    router.replace(`${CURRENT_PATHNAME}?${params.toString()}`);

    setActiveTab(value as AuthTabsEnum);
  };

  return (
    <Tabs
      defaultSelectedKey={AuthTabsEnum.SignIn}
      selectedKey={activeTab}
      onSelectionChange={onSelectionChange}
    >
      <Tabs.ListContainer>
        <Tabs.List aria-label="auth">
          <Tabs.Tab id="sign-in" className="font-bold">
            {t('tabs.signIn')}
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id="sign-up" className="font-bold">
            {t('tabs.signUp')}
            <Tabs.Indicator />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>
      <Tabs.Panel id="sign-in" className="min-h-75 h-85 pt-4">
        <SignInFormWidget />
      </Tabs.Panel>
      <Tabs.Panel id="sign-up" className="min-h-75 h-85 pt-4">
        <SignUpFormWidget />
      </Tabs.Panel>
    </Tabs>
  );
}
