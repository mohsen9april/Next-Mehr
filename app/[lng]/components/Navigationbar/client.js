"use client";

import { NavigationbarBase } from "./NavigationbarBase";
import { useTranslation } from "../../../i18n/client";

export const ClientNavigationbar = ({ lng, path }) => {
  const { t } = useTranslation(lng, "footer");
  return <NavigationbarBase t={t} lng={lng} path={path} />;
};
