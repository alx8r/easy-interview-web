import { TFunction } from '@//i18n/types';
import * as yup from 'yup';

export const emailFormSchema = (t: TFunction) =>
  yup
    .object({
      email: yup
        .string()
        .required(t('inputErrors.emailIsRequired'))
        .email(t('inputErrors.emailInvalidFormat')),
    })
    .required();
