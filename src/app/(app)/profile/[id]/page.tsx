import { Chip, Surface, Tabs } from '@heroui/react';
import { getTranslations } from 'next-intl/server';
import { EmailFormWidget, LogoutButtonWidget, ProfileFormWidget } from '@/widgets';

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
        <Tabs.Panel className="p-0" id="account">
          <div className="flex gap-5 mt-4">
            <div className="w-[calc(50%-20px)]">
              <Chip size={'lg'} variant={'soft'} color={'accent'}>
                <Chip.Label className="font-bold">{t('chips.account')}</Chip.Label>
              </Chip>
              <div className="mt-4 mx-2">
                <ProfileFormWidget />
              </div>
            </div>
            <div className="w-[calc(50%-20px)]">
              <Chip size={'lg'} variant={'soft'} color={'accent'}>
                <Chip.Label className="font-bold">{t('chips.email')}</Chip.Label>
              </Chip>
              <div className="mt-4 mx-2">
                <EmailFormWidget />
              </div>
            </div>
          </div>
        </Tabs.Panel>
        <Tabs.Panel className="p-0" id="security">
          <div className="flex gap-5 mt-4">
            <div className="w-[calc(50%-20px)]">
              <Chip size={'lg'} variant={'soft'} color={'accent'}>
                <Chip.Label className="font-bold">{t('chips.changePassword')}</Chip.Label>
              </Chip>
              <div className="mt-4 mx-2">
                <p>Change password!!</p>
              </div>
            </div>
          </div>
        </Tabs.Panel>
      </Tabs>
    </Surface>
  );
}
