import React, { useEffect } from "react";
import {
  ConsultingTop,
  ConsultingTopItem,
} from "../../components/ConsultingTop";
import ProcessSetup__LocalCompP from "./Sections/ProcessSetup__LocalCompP";
import WidthContainer from "../../components/UI/WidthContainer";
import Accompany__LocalCompP from "./Sections/Accompany__LocalCompP";
import HelpForm from "../../components/HelpForm";
import CostServices__LocalCompP from "./Sections/CostServices__LocalCompP";
import { MainServices, MainServicesItem } from "../../components/MainServices";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Local company";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main-bg">
      <ConsultingTop
        title={t("localCompanyPage__Header__Title")}
        text={t("localCompanyPage__Header__Descr")}
        bg="/assets/LocalCompanyPage/bg.webp"
        btnText={t("localCompanyPage__Header__Btn")}
      >
        <ConsultingTopItem
          count="01"
          text={t("localCompanyPage__Header__Item1")}
          img="/assets/Global/medicalCard.svg"
        />
        <ConsultingTopItem
          count="02"
          text={t("localCompanyPage__Header__Item2")}
          img="/assets/Global/toDoList.svg"
        />
        <ConsultingTopItem
          count="03"
          text={t("localCompanyPage__Header__Item3")}
          img="/assets/Global/stats.svg"
        />
        <ConsultingTopItem
          count="04"
          text={t("localCompanyPage__Header__Item4")}
          img="/assets/Global/list.svg"
        />
      </ConsultingTop>
      <WidthContainer>
        <ProcessSetup__LocalCompP />
        <Accompany__LocalCompP />
        <div id="consultationHelpForm">
          <HelpForm />
        </div>
        <CostServices__LocalCompP />
        <MainServices>
          <MainServicesItem
            img="/assets/LocalCompanyPage/settings.svg"
            text={t("localCompanyPage__MainServices__Descr1")}
            title={t("localCompanyPage__MainServices__Title1")}
          />
          <MainServicesItem
            img="/assets/LocalCompanyPage/chat.svg"
            text={t("localCompanyPage__MainServices__Descr2")}
            title={t("localCompanyPage__MainServices__Title2")}
          />
          <MainServicesItem
            img="/assets/LocalCompanyPage/wallet.svg"
            text={t("localCompanyPage__MainServices__Descr3")}
            title={t("localCompanyPage__MainServices__Title3")}
          />
          <MainServicesItem
            img="/assets/LocalCompanyPage/screw.svg"
            text={t("localCompanyPage__MainServices__Descr4")}
            title={t("localCompanyPage__MainServices__Title4")}
          />
        </MainServices>
      </WidthContainer>
    </main>
  );
};

export default index;
