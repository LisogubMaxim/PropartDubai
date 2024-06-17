import { useTranslation } from "react-i18next";
import "./consultingTable.scss";

export default function ConsultingTable() {
  const { t } = useTranslation();
  return (
    <div className="consultingTable">
      <div className="consultingTable__item">
        {t("ConsultingServicesPage__ConsultingTable__Table1")}
      </div>
      <div className="consultingTable__item consultingTable__item--orange">
        {t("ConsultingServicesPage__ConsultingTable__Table2")}
      </div>
      <div className="consultingTable__item">
        {t("ConsultingServicesPage__ConsultingTable__Table3")}
      </div>
      <div className="consultingTable__item">
        {t("ConsultingServicesPage__ConsultingTable__Table4")}
      </div>
      <div className="consultingTable__item consultingTable__item--orangeBorder">
        <p> {t("ConsultingServicesPage__ConsultingTable__Table5")} </p>
        <p>{t("ConsultingServicesPage__ConsultingTable__Table6")}</p>
        <p>{t("ConsultingServicesPage__ConsultingTable__Table7")}</p>
      </div>
      <div className="consultingTable__item">
        <p>{t("ConsultingServicesPage__ConsultingTable__Table8")}</p>
        <p>{t("ConsultingServicesPage__ConsultingTable__Table9")}</p>
        <p>{t("ConsultingServicesPage__ConsultingTable__Table10")}</p>
        <p>{t("ConsultingServicesPage__ConsultingTable__Table11")}</p>
      </div>
      <div className="consultingTable__item">
        <p>{t("ConsultingServicesPage__ConsultingTable__Table12")}</p>{" "}
        <p>{t("ConsultingServicesPage__ConsultingTable__Table13")}</p>
      </div>
      <div className="consultingTable__item consultingTable__item--orangeBorder">
        <p>{t("ConsultingServicesPage__ConsultingTable__Table14")}</p>
        <p>{t("ConsultingServicesPage__ConsultingTable__Table15")}</p>
        <p>{t("ConsultingServicesPage__ConsultingTable__Table16")}</p>
      </div>
      <div className="consultingTable__item">
        <p>{t("ConsultingServicesPage__ConsultingTable__Table17")}</p>
        <p>{t("ConsultingServicesPage__ConsultingTable__Table18")}</p>
      </div>
      <div className="consultingTable__item">
        <p>{t("ConsultingServicesPage__ConsultingTable__Table19")}</p>
        <p>{t("ConsultingServicesPage__ConsultingTable__Table20")}</p>
      </div>
      <div className="consultingTable__item consultingTable__item--orangeBorder">
        <p>{t("ConsultingServicesPage__ConsultingTable__Table21")}</p>
        <p>2023r.</p>
        <p>{t("ConsultingServicesPage__ConsultingTable__Table22")}</p>
      </div>
      <div className="consultingTable__item">
        <p>{t("ConsultingServicesPage__ConsultingTable__Table23")}</p>
        <p>{t("ConsultingServicesPage__ConsultingTable__Table24")}</p>
      </div>
      <div className="consultingTable__item">
        <p> {t("ConsultingServicesPage__ConsultingTable__Table25")}</p>
        <p> {t("ConsultingServicesPage__ConsultingTable__Table26")}</p>
      </div>
      <div className="consultingTable__item consultingTable__item--orangeBorder">
        <p>{t("ConsultingServicesPage__ConsultingTable__Table27")}</p>
      </div>
      <div className="consultingTable__item">
        <p>{t("ConsultingServicesPage__ConsultingTable__Table28")}</p>
      </div>
      <div className="consultingTable__item">
        {t("ConsultingServicesPage__ConsultingTable__Table29")}
      </div>
      <div className="consultingTable__item consultingTable__item--orangeBorder">
        <p>{t("ConsultingServicesPage__ConsultingTable__Table30")}</p>
      </div>
      <div className="consultingTable__item">
        <p>T{t("ConsultingServicesPage__ConsultingTable__Table31")}</p>
        <p> {t("ConsultingServicesPage__ConsultingTable__Table32")}</p>
      </div>
      <div className="consultingTable__item">
        <p> {t("ConsultingServicesPage__ConsultingTable__Table33")}</p>
        <p>{t("ConsultingServicesPage__ConsultingTable__Table34")}</p>
      </div>
      <div className="consultingTable__item consultingTable__item--orangeBorder">
        <p> {t("ConsultingServicesPage__ConsultingTable__Table35")}</p>
      </div>
      <div className="consultingTable__item">
        <p>{t("ConsultingServicesPage__ConsultingTable__Table35")}</p>
      </div>
    </div>
  );
}
