'use client';

import { SignUpFormType } from '@/common/form-types';
import { signUpFormSchema } from '@/common/schemas';
import { Button, Form, Input, Label, Spinner } from '@heroui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

interface IProps {
  isLoading: boolean;
  initValues: SignUpFormType;
  onSubmit: (values: SignUpFormType) => Promise<void>;
}

export default function SignUpForm({ isLoading, initValues, onSubmit }: IProps) {
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initValues,
    resolver: yupResolver(signUpFormSchema(t)),
  });

  return (
    <Form className="h-full flex flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <Label htmlFor="sign-up-email">{t('inputLabels.email')}</Label>
          <Input
            id="sign-up-email"
            {...register('email')}
            type="email"
            placeholder={t('inputPlaceholders.email')}
          />
          <p className="text-danger text-[11px]">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="sign-up-password">{t('inputLabels.password')}</Label>
          <Input
            id="sign-up-password"
            {...register('password')}
            type="password"
            placeholder={t('inputPlaceholders.password')}
          />
          <p className="text-danger text-[11px]">{errors.password?.message}</p>
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="sign-up-confirm-password">{t('inputLabels.confirmPassword')}</Label>
          <Input
            id="sign-up-confirm-password"
            {...register('confirmPassword')}
            type="password"
            placeholder={t('inputPlaceholders.confirmPassword')}
          />
          <p className="text-danger text-[11px]">{errors.confirmPassword?.message}</p>
        </div>
      </div>
      <Button className="font-bold" fullWidth type="submit">
        {isLoading ? <Spinner color="current" size="sm" /> : null}
        {t('buttons.signUp')}
      </Button>
    </Form>
  );
}
