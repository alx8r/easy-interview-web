import { TFunction } from '@//i18n/types';
import * as yup from 'yup';

export const signInFormSchema = (t: TFunction) =>
  yup
    .object({
      email: yup
        .string()
        .required(t('inputErrors.emailIsRequired'))
        .email(t('inputErrors.emailInvalidFormat')),
      password: yup
        .string()
        .required(t('inputErrors.passwordIsRequired')),
    })
    .required();
