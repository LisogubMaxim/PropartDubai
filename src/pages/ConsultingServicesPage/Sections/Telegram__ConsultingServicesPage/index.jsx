import "./telegram__ConsultingServicesPage.scss";
import BlockContainer from "../../../../components/UI/BlockContainer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Telegram__ConsultingServicesPage() {
  const { t } = useTranslation();

  return (
    <section className="telegramConsultingServicesPage">
      <BlockContainer>
        <span className="telegramConsultingServicesPage__itemTop">
          {t("ConsultingServicesPage__Telegram__Title1")}
          <span>25%</span>
        </span>
        <span className="telegramConsultingServicesPage__itemText">
          {t("ConsultingServicesPage__Telegram__Descr1")}
        </span>
      </BlockContainer>
      <div className="telegramConsultingServicesPage__item telegramConsultingServicesPage__item--clock"></div>
      <div className="telegramConsultingServicesPage__item telegramConsultingServicesPage__item--telegram"></div>
      <BlockContainer>
        <span className="telegramConsultingServicesPage__itemTop">
          {t("ConsultingServicesPage__Telegram__Title2")}
          <Link to="https://t.me/pro_partUAE" target="_blank">
            <img
              src="/assets/ConsultingServicePage/telegramIcon.svg"
              width={68}
              height={68}
              alt="telegramIcon"
            />
          </Link>
        </span>
        <span className="telegramConsultingServicesPage__itemText">
          {t("ConsultingServicesPage__Telegram__Descr2")}
        </span>
      </BlockContainer>
    </section>
  );
}
