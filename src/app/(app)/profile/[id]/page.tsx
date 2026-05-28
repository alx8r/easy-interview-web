'use client';

import { Button, Form, Input, Label, Spinner, Surface, Tabs } from '@heroui/react';
import { ArrowRightFromSquare } from '@gravity-ui/icons';
import { register } from 'module';
import { useTranslations } from 'next-intl';
import { useAppDispatch } from '@/redux';
import { globalSlice } from '@/redux/stores';
import { Paths } from '@/common/data/paths';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const t = useTranslations();

  const router = useRouter();

  const dispatch = useAppDispatch();

  const { resetUserGlobalState } = globalSlice.actions;

  const onLogoutClick = () => {
    dispatch(resetUserGlobalState());

    router.push(`/${Paths.Auth}`);
  };

  return (
    <Surface className="flex min-w-[320px] flex-col gap-3 rounded-3xl mt-4 p-6" variant="default">
      <Tabs className="w-full" orientation="horizontal">
        <div className="flex justify-between items-center">
          <Tabs.ListContainer className="w-full max-w-lg">
            <Tabs.List aria-label="Vertical tabs">
              <Tabs.Tab id="account">
                Account
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="security">
                Security
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
          <Button variant="danger" onClick={onLogoutClick}>
            <ArrowRightFromSquare />
            Logout
          </Button>
        </div>
        <Tabs.Panel className="px-4" id="account">
          <Form className="h-full flex flex-col justify-between" onSubmit={() => {}}>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <Label htmlFor="sign-in-email">{t('inputLabels.email')}</Label>
                <Input
                  id="sign-in-email"
                  // {...register('email')}
                  type="email"
                  placeholder={t('inputPlaceholders.email')}
                />
                {/* <p className="text-danger text-xs">{errors.email?.message}</p> */}
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="sign-in-password">{t('inputLabels.password')}</Label>
                <Input
                  id="sign-in-password"
                  // {...register('password')}
                  type="password"
                  placeholder={t('inputPlaceholders.password')}
                />
                {/* <p className="text-danger text-xs">{errors.password?.message}</p> */}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button className="font-bold" fullWidth type="submit">
                <Spinner color="current" size="sm" />
                {t('buttons.signIn')}
              </Button>
            </div>
          </Form>
        </Tabs.Panel>
        <Tabs.Panel className="px-4" id="security">
          <h3 className="mb-2 font-semibold">Security Settings</h3>
          <p className="text-sm text-muted">
            Configure two-factor authentication and password settings.
          </p>
        </Tabs.Panel>
      </Tabs>
    </Surface>
  );
}
