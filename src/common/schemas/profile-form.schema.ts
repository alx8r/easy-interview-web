import { TFunction } from '@//i18n/types';
import * as yup from 'yup';

export const signInFormSchema = (t: TFunction) =>
  yup
    .object({
      firstName: yup
        .string()
        .required(t('inputErrors.firstNameIsRequired')),
      lastName: yup
        .string()
        .required(t('inputErrors.lastNameIsRequired')),
    })
    .required();
