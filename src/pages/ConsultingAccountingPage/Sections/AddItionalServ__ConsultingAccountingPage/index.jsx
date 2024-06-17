import "./addItionalServ__ConsultingAccountingPage.scss";
import BlockContainer from "../../../../components/UI/BlockContainer";
import { useTranslation } from "react-i18next";

export default function AddItionalServ__ConsultingAccountingPage() {
  const { t } = useTranslation();

  return (
    <section className="addItionalServConsultingAccountingPage">
      <h2>Additional services</h2>
      <div className="addItionalServConsultingAccountingPage__content">
        <AddItionalServConsultingAccountingPageItem
          title={t("accountingPage__AddItionalServ__Title1")}
          text={t("accountingPage__AddItionalServ__Descr1")}
          img="/assets/ConsultingAccountingPage/buildingIcon.svg"
          priceUSD="550"
          priceAED="2000"
        />
        <AddItionalServConsultingAccountingPageItem
          title={t("accountingPage__AddItionalServ__Title2")}
          text={t("accountingPage__AddItionalServ__Descr2")}
          img="/assets/ConsultingAccountingPage/passportIcon.svg"
          priceUSD="3000"
          priceAED="11000"
        />
        <AddItionalServConsultingAccountingPageItem
          title={t("accountingPage__AddItionalServ__Title3")}
          text={t("accountingPage__AddItionalServ__Descr3")}
          img="/assets/ConsultingAccountingPage/wheelIcon.svg"
          priceUSD="550"
          priceAED="2000"
        />
      </div>
    </section>
  );
}
function AddItionalServConsultingAccountingPageItem({
  img,
  title,
  text,
  priceUSD,
  priceAED,
}) {
  const { t } = useTranslation();

  return (
    <BlockContainer>
      <span className="addItionalServConsultingAccountingPage__itemTop">
        <span>
          <img src={img} alt={img} width={24} height={24} />
          {title}
        </span>
        <span>{text}</span>
      </span>
      <span className="addItionalServConsultingAccountingPage__itemBottom">
        {t("ConsultingServicesPage__AdditionalPrice__from")} ${priceUSD}
        <span>
          {t("ConsultingServicesPage__ServicePrice__Aed")} {priceAED}
        </span>
      </span>
    </BlockContainer>
  );
}
