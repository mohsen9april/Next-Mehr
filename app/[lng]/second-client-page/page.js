"use client";

import Link from "next/link";
import { useTranslation } from "../../i18n/client";
import { Header } from "../components/Header";
import { Navigationbar } from "../components/Navigationbar/client";

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, "second-client-page");
  return (
    <>
      <Navigationbar lng={lng} path="/second-client-page" />
      <main>
        <Header heading={t("h1")} />
        <Link href={`/${lng}`}>
          <button type="button">{t("back-to-home")}</button>
        </Link>
      </main>
    </>
  );
}
