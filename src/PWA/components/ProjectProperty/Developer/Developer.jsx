import QRCode from "react-qr-code";
import { LiaDownloadSolid } from "react-icons/lia";
import phoneIcon from "../../../assets/images/project-property/phone-icon.svg";
import { useTranslation } from "react-i18next";

import s from "./developer.module.scss";

export const Developer = ({ qrCode, name, handover, brochure, getInfo }) => {
  const { t } = useTranslation();

  return (
    <section className="project-property__section main-container">
      <h2 className="project-property__second-title">
        {t("developerMainPage__AboutDevTitle")}
      </h2>
      <div className={s.developer}>
        <div className={s.qrCode}>
          {qrCode ? (
            <QRCode value={qrCode} size={143} />
          ) : (
            "No QR Code"
          )}
        </div>
        <ul className={s.infoItems}>
          <li className={s.item}>
            <span className={s.text}>{name || "Developer"}</span>
          </li>
          <li className={s.item}>
            <span className={s.text}>
              {new Date(handover).toLocaleDateString()}
            </span>
          </li>
          <li className={s.item}>
            <a href={brochure} className={s.itemLink} download target="_blank">
              <span className={s.text}>Download PDF</span>
              <LiaDownloadSolid size="1.5em" />
            </a>
          </li>
          <li className={s.item}>
            <a href={`tel:${getInfo}`} className={s.itemLink}>
              <span className={s.text}>Get info</span>
              <img src={phoneIcon} alt="Phone" />
            </a>
          </li>
        </ul>
        <p className={s.about}>{t("projectPage__staticInfo")}</p>
      </div>
    </section>
  );
};
