import { Button, Form, Input, Label, Spinner, Surface, Tabs } from '@heroui/react';
import { getTranslations } from 'next-intl/server';
import { LogoutButtonWidget } from '@/widgets';

export default async function Profile() {
  const t = await getTranslations();

  return (
    <Surface className="flex min-w-[320px] flex-col gap-3 rounded-3xl mt-4 p-6" variant="default">
      <Tabs className="w-full" orientation="horizontal">
        <div className="flex justify-between items-center">
          <Tabs.ListContainer className="w-full max-w-lg">
            <Tabs.List aria-label="Vertical tabs">
              <Tabs.Tab id="account">
                {t('tabs.account')}
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="security">
                {t('tabs.security')}
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
          <LogoutButtonWidget />
        </div>
        <Tabs.Panel className="px-4" id="account">
          <Form className="h-full flex flex-col justify-between">
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
