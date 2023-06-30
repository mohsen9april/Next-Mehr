import { useTranslation } from "../../../i18n";
import { NavigationbarBase } from "./NavigationbarBase";

export const ServerNavigationbar = async ({ lng, path }) => {
  const { t } = await useTranslation(lng, "footer");
  return <NavigationbarBase t={t} lng={lng} path={path} />;
};
