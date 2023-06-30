"use client";

import { NavigationbarBase } from "./LanguagesBase";
import { useTranslation } from "../../../i18n/client";

export const ClientLanguages = ({ lng, path }) => {
  const { t } = useTranslation(lng, "footer");
  return <NavigationbarBase t={t} lng={lng} path={path} />;
};
