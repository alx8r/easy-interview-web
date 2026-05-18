import { createTranslator, Messages } from "next-intl";

export type TFunction = ReturnType<typeof createTranslator<Messages>>;