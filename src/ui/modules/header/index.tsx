import Image from 'next/image';
import Link from 'next/link';
import { Avatar } from '@/ui/components';
import { Button, Surface } from '@heroui/react';
import { useTranslations } from 'next-intl';
import { Paths } from '@/common/data/paths';

interface IProps {
  isAuthorized: boolean;
  avatartAlt: string;
  avatarSrc: string;
  avatarFallback: string;
  onSignInClick: () => void;
  onSignUpClick: () => void;
  onAvatarClick: () => void;
}

export default function Header({
  isAuthorized,
  avatartAlt,
  avatarSrc,
  avatarFallback,
  onSignInClick,
  onSignUpClick,
  onAvatarClick,
}: IProps) {
  const t = useTranslations();

  return (
    <Surface
      className="min-w-[320px] flex justify-between items-center rounded-2xl p-4 mt-3"
      variant="default"
    >
      <Link href={`/${Paths.Home}`}>
        <Image src="/logo.svg" alt="InInterview" width={168} height={50} loading="eager" />
      </Link>

      {isAuthorized ? (
        <div className="cursor-pointer">
          <Avatar
            alt={avatartAlt}
            src={avatarSrc}
            fallback={avatarFallback}
            onClick={onAvatarClick}
          />
        </div>
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
