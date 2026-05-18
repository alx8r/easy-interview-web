import { SignInForm, SignUpForm } from '@/src/ui/modules';
import { Surface, Tabs } from '@heroui/react';
import { getTranslations } from 'next-intl/server';

export default async function AuthPage() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen flex justify-center items-center bg-background-tertiary">
      <Surface className="w-xl min-w-80 rounded-3xl p-6" variant="default">
        <Tabs>
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
          <Tabs.Panel className="min-h-75 h-75 pt-4" id="sign-in">
            <SignInForm />
          </Tabs.Panel>
          <Tabs.Panel className="min-h-75 h-75 pt-4" id="sign-up">
            <SignUpForm />
          </Tabs.Panel>
        </Tabs>
      </Surface>
    </div>
  );
}
