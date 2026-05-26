import { Avatar as HeroUIAvatar } from '@heroui/react';

interface IProps {
  alt: string;
  src: string;
  fallback: string;
}

export default function Avatar({ alt, src, fallback }: IProps) {
  return (
    <HeroUIAvatar>
      <HeroUIAvatar.Image alt={alt} src={src} />
      <HeroUIAvatar.Fallback>{fallback}</HeroUIAvatar.Fallback>
    </HeroUIAvatar>
  );
}
