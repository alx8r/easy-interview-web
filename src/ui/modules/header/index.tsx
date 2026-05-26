import { Avatar } from '@/ui/components';
import { Button, Surface } from '@heroui/react';
import { useTranslations } from 'next-intl';

interface IProps {
  isAuthorized: boolean;
  avatartAlt: string;
  avatarSrc: string;
  avatarFallback: string;
  onSignInClick: () => void;
  onSignUpClick: () => void;
}

export default function Header({
  isAuthorized,
  avatartAlt,
  avatarSrc,
  avatarFallback,
  onSignInClick,
  onSignUpClick,
}: IProps) {
  const t = useTranslations();

  return (
    <Surface
      className="min-w-[320px] flex justify-between items-center rounded-2xl p-4 mt-3"
      variant="default"
    >
      <h1 className="text-base font-semibold text-foreground">EasyQuestions</h1>

      {isAuthorized ? (
        <Avatar alt={avatartAlt} src={avatarSrc} fallback={avatarFallback} />
      ) : (
        <div className="flex gap-2">
          <Button variant="outline" onClick={onSignInClick}>
            {t('buttons.signIn')}
          </Button>
          <Button onClick={onSignUpClick}>{t('buttons.signUp')}</Button>
        </div>
      )}
    </Surface>
  );
}
