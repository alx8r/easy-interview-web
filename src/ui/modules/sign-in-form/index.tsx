'use client';

import { SignInFormType } from '@/common/form-types';
import { signInFormSchema } from '@/common/schemas';
import { Button, Form, Input, Label } from '@heroui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

interface IProps {
  initValues: SignInFormType;
  onSubmit: (values: SignInFormType) => Promise<void>;
}

export default function SignInForm({ initValues, onSubmit }: IProps) {
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initValues,
    resolver: yupResolver(signInFormSchema(t)),
  });

  return (
    <Form className="h-full flex flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <Label htmlFor="sign-in-email">{t('inputLabels.email')}</Label>
          <Input
            id="sign-in-email"
            {...register('email')}
            type="email"
            placeholder={t('inputPlaceholders.email')}
          />
          <p className="text-danger text-[11px]">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="sign-in-password">{t('inputLabels.password')}</Label>
          <Input
            id="sign-in-password"
            {...register('password')}
            type="password"
            placeholder={t('inputPlaceholders.password')}
          />
          <p className="text-danger text-[11px]">{errors.password?.message}</p>
        </div>
      </div>
      <Button className="font-bold" fullWidth type="submit">
        {t('buttons.signIn')}
      </Button>
    </Form>
  );
}
