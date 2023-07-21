"use client";

import React from "react";
import Navbaraboutus from "../components/Navbaraboutus/Navbaraboutus";
import { useTranslation } from "../../i18n/client";
import { ClientLanguages } from "../components/Languages/client";
// import Navbaraboutus from "./navbarAboutus";

const Aboutus = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, "client-page");

  return (
    <div>
      <Navbaraboutus params={{ lng: lng }} />
      <p>{t("aboutustext")}</p>
    </div>
  );
};

export default Aboutus;
