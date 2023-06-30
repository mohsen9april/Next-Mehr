import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import Style from "./LanguagesBase.module.css";

export const NavigationbarBase = ({ t, lng, path = "" }) => {
  return (
    <header>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{ lng }}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <button className={Style.button}>
              <span key={l}>
                {index > 0 && " or "}
                <Link href={`/${l}${path}`} style={{ color: "white" }}>
                  {l}
                </Link>
              </span>
            </button>
          );
        })}
    </header>
  );
};
