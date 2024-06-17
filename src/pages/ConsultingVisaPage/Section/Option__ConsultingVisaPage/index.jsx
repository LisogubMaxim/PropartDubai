import { useTranslation } from "react-i18next";
import BlockContainer from "../../../../components/UI/BlockContainer";
import "./option__ConsultingVisaPage.scss";

export default function Option__ConsultingVisaPage() {
  const { t } = useTranslation();

  return (
    <section className="registBusinessPoweOfAttorneyPage">
      <div className="registBusinessPoweOfAttorneyPage__top">
        <h2>{t("visaPage__Option__Title")}</h2>
        <p>{t("visaPage__Option__Descr")}</p>
      </div>
      <div className="registBusinessPoweOfAttorneyPage__content">
        <BlockContainer>
          <h3>{t("visaPage__Option__SubTitle1")}</h3>
          <div className="">
            <OptionConsultingVisaPageItem
              img="/assets/ConsultingVisaPage/calendarIcon.svg"
              title={t("visaPage__Option__SubTitle3")}
              text={t("visaPage__Option__SubDescr1")}
            />
            <OptionConsultingVisaPageItem
              img="/assets/ConsultingVisaPage/hourglassIcon.svg"
              title={t("visaPage__Option__SubTitle4")}
              text={t("visaPage__Option__SubDescr2")}
            />
            <OptionConsultingVisaPageItem
              img="/assets/ConsultingVisaPage/sadSmileIcon.svg"
              title="100%"
              text={t("visaPage__Option__SubDescr3")}
            />
          </div>
        </BlockContainer>
        <BlockContainer className="blockContainer--orange">
          <h3>{t("visaPage__Option__SubTitle2")}</h3>
          <div className="">
            <OptionConsultingVisaPageItem
              img="/assets/ConsultingVisaPage/boltIcon.svg"
              title={t("visaPage__Option__SubTitle5")}
              text={t("visaPage__Option__SubDescr1")}
            />
            <OptionConsultingVisaPageItem
              img="/assets/ConsultingVisaPage/watchIcon.svg"
              title={t("visaPage__Option__SubTitle6")}
              text={t("visaPage__Option__SubDescr4")}
            />
            <OptionConsultingVisaPageItem
              img="/assets/ConsultingVisaPage/smile.svg"
              title="95%"
              text={t("visaPage__Option__SubDescr5")}
            />
            <OptionConsultingVisaPageItem
              img="/assets/ConsultingVisaPage/walletIcon.svg"
              title="5%"
              text={t("visaPage__Option__SubDescr6")}
            />
          </div>
        </BlockContainer>
      </div>
    </section>
  );
}

function OptionConsultingVisaPageItem({ img, title, text }) {
  return (
    <div className="optionConsultingVisaPage__item">
      <img src={img} alt={img} width={24} height={24} />
      <span>
        {title} <span>{text}</span>
      </span>
    </div>
  );
}
