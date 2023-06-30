"use client";

import Link from "next/link";
import { useTranslation } from "../../i18n/client";
import { ClientLanguages } from "../components/Languages/client";

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, "client-page");
  return (
    <>
      <ClientLanguages lng={lng} path="/second-client-page" />
      <main>
        <Link href={`/${lng}`}>
          <button type="button">{t("back-to-home2")}</button>
        </Link>
      </main>
    </>
  );
}
