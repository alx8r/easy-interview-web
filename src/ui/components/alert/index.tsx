'use client';

import { AlertVariants, Alert as HeroUIAlert } from '@heroui/react';

interface IProps {
  status: AlertVariants["status"],
  title: string;
  message: string | undefined;
}

export default function Alert({ status, title, message }: IProps) {
  return (
    <HeroUIAlert status={status}>
      <HeroUIAlert.Indicator />
      <HeroUIAlert.Content>
        <HeroUIAlert.Title>{title}</HeroUIAlert.Title>
        <HeroUIAlert.Description>
          <p>{message}</p>
        </HeroUIAlert.Description>
      </HeroUIAlert.Content>
    </HeroUIAlert>
  );
}
