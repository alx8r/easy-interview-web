'use client';

import { EmailFormType } from '@/common/form-types';
import { emailFormSchema } from '@/common/schemas';
import { Form, Input, Label } from '@heroui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

interface IProps {
  isLoading: boolean;
  initValues: EmailFormType;
}

export default function EmailForm({ initValues }: IProps) {
  const t = useTranslations();

  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: initValues,
    resolver: yupResolver(emailFormSchema(t)),
  });

  return (
    <Form className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <Label htmlFor="profile-email">{t('inputLabels.email')}</Label>
          <Input
            id="profile-email"
            {...register('email')}
            type="email"
            placeholder={t('inputPlaceholders.email')}
          />
          <p className="text-danger text-xs">{errors.email?.message}</p>
        </div>
      </div>
    </Form>
  );
}
