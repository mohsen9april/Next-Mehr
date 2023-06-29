import { useTranslation } from "../../../i18n";
import { NavigationbarBase } from "./NavigationbarBase";

export const Navigationbar = async ({ lng, path }) => {
  const { t } = await useTranslation(lng, "footer");
  return <NavigationbarBase t={t} lng={lng} path={path} />;
};
