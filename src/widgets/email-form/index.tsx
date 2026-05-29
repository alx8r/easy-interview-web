'use client';

import { EmailForm } from '@/ui/modules';

export default function EmailFormWidget() {
  return (
    <EmailForm
      isLoading={false}
      initValues={{
        email: '',
      }}
    />
  );
}
