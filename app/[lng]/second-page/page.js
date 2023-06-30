import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Header } from "../components/Header";
import { ServerLanguages } from "../components/Languages/server";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "translation");
  return { title: t("h1") };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "translation");
  return (
    <>
      <ServerLanguages lng={lng} path="/second-page" />
      <main>
        <Header heading={t("h1-2")} />
        <Link href={`/${lng}`}>
          <button type="button">{t("back-to-home")}</button>
        </Link>
      </main>
    </>
  );
}
