import { useTranslation } from "react-i18next";
import "./residencePermTable__ConsultingVisaPage.scss";

export default function ResidencePermTable__ConsultingVisaPage() {
  const { t } = useTranslation();

  return (
    <section className="residencePermConsultingVisaPage registBusinessPoweOfAttorneyPage">
      <div className="registBusinessPoweOfAttorneyPage__top">
        <h2>{t("visaPage__ResidencePermTable__Title")}</h2>
        <p>{t("visaPage__ResidencePermTable__Descr")}</p>
      </div>
      <div className="registBusinessPoweOfAttorneyPage__content">
        <div className="residencePermConsultingVisaPage__item residencePermConsultingVisaPage__item--darkBlue">
          {t("visaPage__ResidencePermTable__TitleTable1")}
        </div>
        <div className="residencePermConsultingVisaPage__item residencePermConsultingVisaPage__item--darkBlue">
          {t("visaPage__ResidencePermTable__TitleTable2")}
        </div>
        <div className="residencePermConsultingVisaPage__item residencePermConsultingVisaPage__item--darkBlue">
          {t("visaPage__ResidencePermTable__TitleTable3")}
        </div>
        <div className="residencePermConsultingVisaPage__item residencePermConsultingVisaPage__item--darkBlue">
          {t("visaPage__ResidencePermTable__TitleTable4")}
        </div>
        <div className="residencePermConsultingVisaPage__item residencePermConsultingVisaPage__item--borderGrey">
          {t("visaPage__ResidencePermTable__SubTitleTable1")}
        </div>
        <div className="residencePermConsultingVisaPage__item residencePermConsultingVisaPage__item--halfBorderGrey">
          <img
            src="/assets/Global/checkbox.svg"
            alt="checkbox"
            width={24}
            height={24}
          />
        </div>
        <div className="residencePermConsultingVisaPage__item  residencePermConsultingVisaPage__item--otherBorderGrey">
          <img
            src="/assets/Global/checkbox.svg"
            alt="checkbox"
            width={24}
            height={24}
          />
        </div>
        <div className="residencePermConsultingVisaPage__item  residencePermConsultingVisaPage__item--otherBorderGrey">
          <img
            src="/assets/Global/checkbox.svg"
            alt="checkbox"
            width={24}
            height={24}
          />
        </div>
        <div className="residencePermConsultingVisaPage__item residencePermConsultingVisaPage__item--borderGrey">
          {t("visaPage__ResidencePermTable__SubTitleTable2")}
        </div>
        <div className="residencePermConsultingVisaPage__item residencePermConsultingVisaPage__item--halfBorderGrey ">
          {t("visaPage__ResidencePermTable__ItemTable1")}
        </div>
        <div className="residencePermConsultingVisaPage__item  residencePermConsultingVisaPage__item--otherBorderGrey">
          <img
            src="/assets/Global/checkbox.svg"
            alt="checkbox"
            width={24}
            height={24}
          />
        </div>
        <div className="residencePermConsultingVisaPage__item  residencePermConsultingVisaPage__item--otherBorderGrey">
          <img
            src="/assets/Global/checkbox.svg"
            alt="checkbox"
            width={24}
            height={24}
          />
        </div>
        <div className="residencePermConsultingVisaPage__item residencePermConsultingVisaPage__item--borderGrey">
          {t("visaPage__ResidencePermTable__SubTitleTable3")}
        </div>
        <div className="residencePermConsultingVisaPage__item residencePermConsultingVisaPage__item--halfBorderGrey ">
          <img
            src="/assets/Global/checkbox.svg"
            alt="checkbox"
            width={24}
            height={24}
          />
        </div>
        <div className="residencePermConsultingVisaPage__item  residencePermConsultingVisaPage__item--otherBorderGrey">
          <img
            src="/assets/Global/checkbox.svg"
            alt="checkbox"
            width={24}
            height={24}
          />
        </div>
        <div className="residencePermConsultingVisaPage__item  residencePermConsultingVisaPage__item--otherBorderGrey">
          <img
            src="/assets/Global/checkbox.svg"
            alt="checkbox"
            width={24}
            height={24}
          />
        </div>
        <div className="residencePermConsultingVisaPage__item residencePermConsultingVisaPage__item--borderGrey">
          {t("visaPage__ResidencePermTable__SubTitleTable4")}
        </div>
        <div className="residencePermConsultingVisaPage__item residencePermConsultingVisaPage__item--halfBorderGrey ">
          <img
            src="/assets/ConsultingVisaPage/notAllowedIcon.svg"
            alt="checkbox"
            width={24}
            height={24}
          />
        </div>
        <div className="residencePermConsultingVisaPage__item  residencePermConsultingVisaPage__item--otherBorderGrey">
          {" "}
          <img
            src="/assets/Global/checkbox.svg"
            alt="checkbox"
            width={24}
            height={24}
          />
        </div>
        <div className="residencePermConsultingVisaPage__item  residencePermConsultingVisaPage__item--otherBorderGrey">
          <img
            src="/assets/Global/checkbox.svg"
            alt="checkbox"
            width={24}
            height={24}
          />
        </div>
        <div className="residencePermConsultingVisaPage__item residencePermConsultingVisaPage__item--borderGrey">
          {t("visaPage__ResidencePermTable__SubTitleTable5")}
        </div>
        <div className="residencePermConsultingVisaPage__item residencePermConsultingVisaPage__item--halfBorderGrey ">
          <img
            src="/assets/Global/checkbox.svg"
            alt="checkbox"
            width={24}
            height={24}
          />
        </div>
        <div className="residencePermConsultingVisaPage__item  residencePermConsultingVisaPage__item--otherBorderGrey">
          <img
            src="/assets/ConsultingVisaPage/notAllowedIcon.svg"
            alt="checkbox"
            width={24}
            height={24}
          />
        </div>
        <div className="residencePermConsultingVisaPage__item  residencePermConsultingVisaPage__item--otherBorderGrey">
          {t("visaPage__ResidencePermTable__ItemTable2")}
        </div>
      </div>
    </section>
  );
}
