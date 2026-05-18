'use client';

import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { useTranslations } from 'next-intl';

export default function SignUpForm() {
  const t = useTranslations();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e.currentTarget);
  };

  return (
    <Form className="h-full flex flex-col justify-between" onSubmit={onSubmit}>
      <div className="flex flex-col gap-5">
        <TextField name="email" type="email">
          <Label>{t('inputLabels.email')}</Label>
          <Input placeholder={t('inputPlaceholders.email')} />
          <FieldError />
        </TextField>
        <TextField name="password" type="password">
          <Label>{t('inputLabels.password')}</Label>
          <Input placeholder={t('inputPlaceholders.password')} />
          <FieldError />
        </TextField>
        <TextField name="confirm_password" type="password">
          <Label>{t('inputLabels.confirmPassword')}</Label>
          <Input placeholder={t('inputPlaceholders.confirmPassword')} />
          <FieldError />
        </TextField>
      </div>
      <Button className="font-bold" fullWidth type="submit">
        {t('buttons.signUp')}
      </Button>
    </Form>
  );
}
