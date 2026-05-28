import { Avatar as HeroUIAvatar } from '@heroui/react';

interface IProps {
  alt: string;
  src: string;
  fallback: string;
  onClick: () => void;
}

export default function Avatar({ alt, src, fallback, onClick }: IProps) {
  return (
    <HeroUIAvatar onClick={onClick}>
      <HeroUIAvatar.Image alt={alt} src={src} />
      <HeroUIAvatar.Fallback>{fallback}</HeroUIAvatar.Fallback>
    </HeroUIAvatar>
  );
}
