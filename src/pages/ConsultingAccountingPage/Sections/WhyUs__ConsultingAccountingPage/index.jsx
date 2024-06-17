import "./whyUs__ConsultingAccountingPage.scss";
import BlockContainer from "../../../../components/UI/BlockContainer";
import { useTranslation } from "react-i18next";

export default function WhyUs__ConsultingAccountingPage() {
  const { t } = useTranslation();

  return (
    <section className="whyUsConsultingAccountingPage">
      <WhyUsConsultingAccountingPageItem
        title={t("accountingPage__WhyUs__Title1")}
        img="/assets/ConsultingAccountingPage/questionIcon.svg"
        dark
      />
      <WhyUsConsultingAccountingPageItem
        title={t("accountingPage__WhyUs__Title2")}
        text={t("accountingPage__WhyUs__Descr1")}
        img="/assets/ConsultingAccountingPage/calculatorIcon.svg"
      />
      <WhyUsConsultingAccountingPageItem
        img="/assets/ConsultingAccountingPage/usersIcon.svg"
        title={t("accountingPage__WhyUs__Title3")}
        text={t("accountingPage__WhyUs__Descr2")}
      />
      <WhyUsConsultingAccountingPageItem
        img="/assets/ConsultingAccountingPage/statisticIcon.svg"
        title={t("accountingPage__WhyUs__Title4")}
        text={t("accountingPage__WhyUs__Descr3")}
      />
      <WhyUsConsultingAccountingPageItem
        img="/assets/ConsultingAccountingPage/buildingIcon.svg"
        title={t("accountingPage__WhyUs__Title5")}
        text={t("accountingPage__WhyUs__Descr4")}
      />
      <WhyUsConsultingAccountingPageItem
        img="/assets/ConsultingAccountingPage/shieldIcon.svg"
        title={t("accountingPage__WhyUs__Title6")}
        text={t("accountingPage__WhyUs__Descr5")}
      />
    </section>
  );
}
function WhyUsConsultingAccountingPageItem({ img, title, text, dark }) {
  return (
    <BlockContainer className={`blockContainer--${dark && "darkBlue"}`}>
      <img src={img} alt={img} width={24} height={24} />
      <span>
        {title}
        <span>{text}</span>
      </span>
      <img src={img} alt={img} width={150} height={150} />
    </BlockContainer>
  );
}
