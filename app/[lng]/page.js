import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages, fallbackLng } from "../i18n/settings";
import { useTranslation } from "../i18n";
import { Header } from "./components/Header";
import { Navigationbar } from "./components/Navigationbar";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return { title: t("h1") };
}

export default async function Page({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);

  return (
    <>
      <Navigationbar lng={lng} />
      <main>
        <Header heading={t("h1")} />
        <h2>
          <Trans t={t} i18nKey="welcome">
            Welcome to Next.js v13 <small>appDir</small> and i18next
          </Trans>
        </h2>

        <hr style={{ marginTop: 20, width: "90%" }} />
        <div>
          <Link href={`/${lng}/second-page`}>
            <button type="button">{t("to-second-page")}</button>
          </Link>
          <Link href={`/${lng}/client-page`}>
            <button type="button">{t("to-client-page")}</button>
          </Link>
        </div>
      </main>
    </>
  );
}
