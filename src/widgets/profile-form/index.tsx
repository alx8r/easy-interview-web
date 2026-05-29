'use client'

import { ProfileFormType } from '@/common/form-types';
import { ProfileForm } from '@/ui/modules';

export default function ProfileFormWidget() {
  return (
    <ProfileForm
      isLoading={false}
      initValues={{
        firstName: '',
        lastName: '',
      }}
      onSubmit={function (values: ProfileFormType): Promise<void> {
        throw new Error('Function not implemented.');
      }}
    />
  );
}
