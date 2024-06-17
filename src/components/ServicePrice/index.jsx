import "./servicePrice.scss";
import BlockContainer from "../UI/BlockContainer";
import { useTranslation } from "react-i18next";
export default function ServicePrice__ConsultingServicesPage() {
  const { t } = useTranslation();

  return (
    <section className="servicePrice">
      <ServicePriceItem__ConsultingServicesPage
        title={t("ConsultingServicesPage__ServicePrice__Title1")}
        priceUSD="6,000"
        priceAED="20,500"
      >
        <Advantage text={t("ConsultingServicesPage__ServicePrice__Item1")} />
        <Advantage text={t("ConsultingServicesPage__ServicePrice__Item2")} />
        <Advantage text={t("ConsultingServicesPage__ServicePrice__Item3")} />
      </ServicePriceItem__ConsultingServicesPage>
      <ServicePriceItem__ConsultingServicesPage
        title={t("ConsultingServicesPage__ServicePrice__Title2")}
        priceUSD="8,800"
        priceAED="32,000"
      >
        <Advantage text={t("ConsultingServicesPage__ServicePrice__Item4")} />
        <Advantage text={t("ConsultingServicesPage__ServicePrice__Item5")} />
        <Advantage text={t("ConsultingServicesPage__ServicePrice__Item6")} />
        <Advantage text={t("ConsultingServicesPage__ServicePrice__Item7")} />
        <Advantage text={t("ConsultingServicesPage__ServicePrice__Item8")} />
        <Advantage text={t("ConsultingServicesPage__ServicePrice__Item9")} />
      </ServicePriceItem__ConsultingServicesPage>
      <ServicePriceItem__ConsultingServicesPage
        title={t("ConsultingServicesPage__ServicePrice__Title3")}
        priceUSD="12,500"
        priceAED="46,000"
      >
        <Advantage text={t("ConsultingServicesPage__ServicePrice__Item10")} />
        <Advantage text={t("ConsultingServicesPage__ServicePrice__Item11")} />
        <Advantage text={t("ConsultingServicesPage__ServicePrice__Item12")} />
        <Advantage text={t("ConsultingServicesPage__ServicePrice__Item13")} />
        <Advantage text={t("ConsultingServicesPage__ServicePrice__Item14")} />
        <Advantage text={t("ConsultingServicesPage__ServicePrice__Item15")} />
        <Advantage text={t("ConsultingServicesPage__ServicePrice__Item16")} />
        <Advantage text={t("ConsultingServicesPage__ServicePrice__Item17")} />
      </ServicePriceItem__ConsultingServicesPage>
    </section>
  );
}
function ServicePriceItem__ConsultingServicesPage({
  title,
  priceUSD,
  priceAED,
  children,
}) {
  const { t } = useTranslation();

  return (
    <BlockContainer>
      <div className="servicePrice__itemTitle">{title}</div>
      <div className="servicePrice__itemAdvantages">{children}</div>
      <div className="servicePrice__itemPrice">
        <span>
          {t("ConsultingServicesPage__ServicePrice__From")} ${priceUSD}
        </span>
        <span>
          ({t("ConsultingServicesPage__ServicePrice__Aed")} {priceAED})
        </span>
      </div>
    </BlockContainer>
  );
}
function Advantage({ text }) {
  return (
    <div className="advantage">
      <img
        src="/assets/ConsultingServicePage/checked.svg"
        alt="checked"
        width={24}
        height={24}
      />
      {text}
    </div>
  );
}
