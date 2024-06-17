import "./otherServices__ConsultingAccountingPage.scss";
import BlockContainer from "../../../../components/UI/BlockContainer";
import { useTranslation } from "react-i18next";

export default function OtherServices__ConsultingAccountingPage() {
  const { t } = useTranslation();

  return (
    <section className="otherServicesConsultingAccountingPage">
      <h2>{t("accountingPage__OtherServices__Title7")}</h2>
      <div className="otherServicesConsultingAccountingPage__content">
        <OtherServicesConsultingAccountingPageItem
          title={t("accountingPage__OtherServices__Title1")}
          text={t("accountingPage__OtherServices__Descr1")}
          img="/assets/ConsultingAccountingPage/boxIcon.svg"
        />
        <OtherServicesConsultingAccountingPageItem
          title={t("accountingPage__OtherServices__Title2")}
          text={t("accountingPage__OtherServices__Descr2")}
          img="/assets/ConsultingAccountingPage/diagramIcon.svg"
        />
        <OtherServicesConsultingAccountingPageItem
          title={t("accountingPage__OtherServices__Title3")}
          text={t("accountingPage__OtherServices__Descr3")}
          img="/assets/ConsultingAccountingPage/passprt2Icon.svg"
        />
        <OtherServicesConsultingAccountingPageItem
          title={t("accountingPage__OtherServices__Title4")}
          text={t("accountingPage__OtherServices__Descr4")}
          img="/assets/ConsultingAccountingPage/buildingIcon.svg"
        />
        <OtherServicesConsultingAccountingPageItem
          title={t("accountingPage__OtherServices__Title5")}
          text={t("accountingPage__OtherServices__Descr5")}
          img="/assets/ConsultingAccountingPage/letterIcon.svg"
        />
        <OtherServicesConsultingAccountingPageItem
          title={t("accountingPage__OtherServices__Title6")}
          text={t("accountingPage__OtherServices__Descr6")}
          img="/assets/ConsultingAccountingPage/dialogIcon.svg"
        />
      </div>
    </section>
  );
}
function OtherServicesConsultingAccountingPageItem({ img, title, text }) {
  return (
    <BlockContainer>
      <span className="otherServicesConsultingAccountingPage__itemTop">
        <img src={img} alt={img} height={24} width={24} />
        {title}
      </span>
      {text}
      <img src={img} alt={img} height={150} width={150} />
    </BlockContainer>
  );
}
