import {
  ConsultingTop,
  ConsultingTopItem,
} from "../../components/ConsultingTop";
import { useEffect } from "react";
import WidthContainer from "../../components/UI/WidthContainer";
import Option__ConsultingVisaPage from "./Section/Option__ConsultingVisaPage";
import HelpForm from "../../components/HelpForm";
import ResidencePermTable__ConsultingVisaPage from "./Section/ResidencePermTable__ConsultingVisaPage";
import EmiratesId__ConsultingVisaPage from "./Section/EmiratesId__ConsultingVisaPage";
import ResedencePerm__ConsultingVisaPage from "./Section/ResedencePerm__ConsultingVisaPage";
import VisasIssued__ConsultingVisaPage from "./Section/VisasIssued__ConsultingVisaPage";
import DeadeLine__ConsultingVisaPage from "./Section/DeadeLine__ConsultingVisaPage";
import TypesOfVisas__ConsultingVisaPage from "./Section/TypesOfVisas__ConsultingVisaPage";
import { useTranslation } from "react-i18next";
export default function ConsultingVisaPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Visa";
    window.scrollTo(0, 0);
  });
  return (
    <main className="consultingVisaPage main-bg">
      <ConsultingTop
        bg="/assets/ConsultingVisaPage/bg.webp"
        title={t("visaPage__Header__Title")}
        text={t("visaPage__Header__Descr")}
        btnText={t("visaPage__Header__Btn")}
      >
        <ConsultingTopItem
          count="01"
          text={t("visaPage__Header__Item1")}
          img="/assets/Global/medicalCard.svg"
        />
        <ConsultingTopItem
          count="02"
          text={t("visaPage__Header__Item2")}
          img="/assets/Global/toDoList.svg"
        />
        <ConsultingTopItem
          count="03"
          text={t("visaPage__Header__Item3")}
          img="/assets/Global/stats.svg"
        />
        <ConsultingTopItem
          count="04"
          text={t("visaPage__Header__Item4")}
          img="/assets/Global/list.svg"
        />
        <ConsultingTopItem
          count="05"
          text={t("visaPage__Header__Item5")}
          img="/assets/Global/list.svg"
        />
      </ConsultingTop>
      <WidthContainer>
        <Option__ConsultingVisaPage />
        <div id="consultationHelpForm">
          <HelpForm />
        </div>
        <ResidencePermTable__ConsultingVisaPage />
        <EmiratesId__ConsultingVisaPage />
        <ResedencePerm__ConsultingVisaPage />
        <VisasIssued__ConsultingVisaPage />
        <DeadeLine__ConsultingVisaPage />
        <TypesOfVisas__ConsultingVisaPage />
        <HelpForm />
      </WidthContainer>
    </main>
  );
}
