"use client";

import React, { useState } from "react";
import { useTranslation } from "../../../i18n/client";
// import styles from "./Navbaraboutus.module.css";
import { ClientLanguages } from "../Languages/client";
import Link from "next/link";
import "./navbarcss.css";

function Navbaraboutus({ params: { lng } }) {
  const { t } = useTranslation(lng, "client-page");
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <ul className={"nav-menu"}>
            <li className="nav-item">
              <Link
                href={`/${lng}`}
                className="nav-links"
                onClick={handleClick}>
                <p>{t("home")}</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/${lng}`}
                className="nav-links"
                onClick={handleClick}>
                <p>{t("aboutus")}</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/${lng}`}
                className="nav-links"
                onClick={handleClick}>
                <p>{t("products")}</p>
              </Link>
            </li>
            <li>
              <ClientLanguages lng={lng} path="/aboutus" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbaraboutus;
