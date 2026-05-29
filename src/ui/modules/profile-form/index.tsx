'use client';

import { ProfileFormType } from '@/common/form-types';
import { profileFormSchema } from '@/common/schemas';
import { Button, Form, Input, Label, Spinner } from '@heroui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

interface IProps {
  isLoading: boolean;
  initValues: ProfileFormType;
  onSubmit: (values: ProfileFormType) => Promise<void>;
}

export default function ProfileForm({ isLoading, initValues, onSubmit }: IProps) {
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initValues,
    resolver: yupResolver(profileFormSchema(t)),
  });

  return (
    <Form className="h-full flex flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <Label htmlFor="profile-first-name">{t('inputLabels.firstName')}</Label>
          <Input
            id="profile-first-name"
            {...register('firstName')}
            type="text"
            placeholder={t('inputPlaceholders.firstName')}
          />
          <p className="text-danger text-xs">{errors.firstName?.message}</p>
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="profile-last-name">{t('inputLabels.lastName')}</Label>
          <Input
            id="profile-last-name"
            {...register('lastName')}
            type="text"
            placeholder={t('inputPlaceholders.lastName')}
          />
          <p className="text-danger text-xs">{errors.lastName?.message}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Button className="font-bold" type="submit">
          {isLoading ? <Spinner color="current" size="sm" /> : null}
          {t('buttons.update')}
        </Button>
      </div>
    </Form>
  );
}
