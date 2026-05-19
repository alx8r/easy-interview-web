import { TFunction } from '@//i18n/types';
import * as yup from 'yup';

export const signUpFormSchema = (t: TFunction) =>
  yup
    .object({
      email: yup
        .string()
        .required(t('inputErrors.emailIsRequired'))
        .email(t('inputErrors.emailInvalidFormat')),
      password: yup
        .string()
        .min(6, t('inputErrors.passwordMin', { min: 6 }))
        .required(t('inputErrors.passwordIsRequired')),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], t('inputErrors.passwordsMustMatch'))
        .required(t('inputErrors.confirmPasswordIsRequired')),
    })
    .required();
