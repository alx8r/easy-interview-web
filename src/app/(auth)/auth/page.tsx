import SignInForm from 'modules/sign-in-form';
import { Surface, Tabs } from '@heroui/react';
import { getTranslations } from 'next-intl/server';

export default async function AuthPage() {
  const t = await getTranslations('tabs');

  return (
    <div className="min-h-screen flex justify-center items-center bg-background">
      <Surface
        className="flex min-w-[320px] w-xl flex-col gap-3 rounded-3xl p-6"
        variant="secondary"
      >
        <Tabs className="w-full">
          <Tabs.ListContainer>
            <Tabs.List aria-label="Options">
              <Tabs.Tab id="sign-in">
                {t('singIn')}
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="sign-up">
                {t('singUp')}
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
          <Tabs.Panel className="pt-4" id="sign-in">
            <SignInForm />
          </Tabs.Panel>
          <Tabs.Panel className="pt-4" id="sign-up">
            <p>Track your metrics and analyze performance data.</p>
          </Tabs.Panel>
        </Tabs>
      </Surface>
    </div>
  );
}
