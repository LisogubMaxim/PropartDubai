import { useEffect } from "react";
import WidthContainer from "../../components/UI/WidthContainer";
import WhyUs__ConsultingAccountingPage from "./Sections/WhyUs__ConsultingAccountingPage";
import AddItionalServ__ConsultingAccountingPage from "./Sections/AddItionalServ__ConsultingAccountingPage";
import HelpForm from "../../components/HelpForm";
import OtherServices__ConsultingAccountingPage from "./Sections/OtherServices__ConsultingAccountingPage";
import { MainServices, MainServicesItem } from "../../components/MainServices";
import {
  ConsultingTop,
  ConsultingTopItem,
} from "../../components/ConsultingTop";
import { useTranslation } from "react-i18next";
export default function ConsultingAccountingPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Accounting";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main-bg">
      <ConsultingTop
        bg="/assets/ConsultingAccountingPage/bg.webp"
        btnText={t("accountingPage__Header__Btn")}
        title={t("accountingPage__Header__Title1")}
        text={t("accountingPage__Header__Descr1")}
      >
        <ConsultingTopItem
          count="01"
          text={t("accountingPage__Header__Descr2")}
          img="/assets/Global/medicalCard.svg"
        />
        <ConsultingTopItem
          count="02"
          text={t("accountingPage__Header__Descr3")}
          img="/assets/Global/toDoList.svg"
        />
        <ConsultingTopItem
          count="03"
          text={t("accountingPage__Header__Descr4")}
          img="/assets/Global/stats.svg"
        />
        <ConsultingTopItem
          count="04"
          text={t("accountingPage__Header__Descr5")}
          img="/assets/Global/list.svg"
        />
      </ConsultingTop>
      <WidthContainer>
        <WhyUs__ConsultingAccountingPage />
        <AddItionalServ__ConsultingAccountingPage />
        <div id="consultationHelpForm">
          <HelpForm />
        </div>
        <OtherServices__ConsultingAccountingPage />
        <MainServices>
          <MainServicesItem
            count="01"
            img="/assets/ConsultingAccountingPage/diagramIcon.svg"
            text={t("accountingPage__MainServices__Title1")}
          />
          <MainServicesItem
            count="02"
            img="/assets/ConsultingAccountingPage/statisticIcon.svg"
            text={t("accountingPage__MainServices__Title2")}
          />
          <MainServicesItem
            count="03"
            img="/assets/components/MainServices/helpIcon.svg"
            text={t("accountingPage__MainServices__Title3")}
          />
          <MainServicesItem
            count="04"
            img="/assets/components/MainServices/graphIcon.svg"
            text={t("accountingPage__MainServices__Title4")}
          />
        </MainServices>
      </WidthContainer>
    </main>
  );
}
