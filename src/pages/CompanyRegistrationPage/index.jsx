import React from "react";
import WidthContainer from "../../components/UI/WidthContainer";
import CorporateAcc__CompRegP from "./Sections/CorporateAcc__CompRegP";
import InfoBlocks__CompRegP from "./Sections/InfoBlocks__CompRegP";
import HelpForm from "../../components/HelpForm";
import BlocksInfo from "../../components/BlocksInfo";
import WeProvide from "../../components/WeProvide";
import OurServices__CompRegP from "./Sections/OurServices__CompRegP";
import InfoListPercent from "../../components/InfoListPercent";
import Facts__CompRegP from "./Sections/Facts__CompRegP";
import Digrams__CompRegP from "./Sections/Digrams__CompRegP";
import { useEffect } from "react";
import {
  ConsultingTop,
  ConsultingTopItem,
} from "../../components/ConsultingTop";
import "./companyRegistrationPage.scss";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Company Registration";
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="main-bg companyRegistrationPage">
      <ConsultingTop
        title={t("CompanyRegistrationPage__Header__Title")}
        text={t("CompanyRegistrationPage__Header__Descr")}
        bg="/assets/CompanyRegistrationPage/bg.webp"
        btnText={t("CompanyRegistrationPage__Header__BtnText")}
      >
        <ConsultingTopItem
          count="01"
          text={t("CompanyRegistrationPage__Header__Btn1")}
          img="/assets/ConsultingServicePage/arrows.svg"
        />
        <ConsultingTopItem
          count="02"
          text={t("CompanyRegistrationPage__Header__Btn2")}
          img="/assets/ConsultingServicePage/human.svg"
        />
        <ConsultingTopItem
          count="03"
          text={t("CompanyRegistrationPage__Header__Btn3")}
          img="/assets/ConsultingServicePage/chat.svg"
        />
        <ConsultingTopItem
          count="04"
          text={t("CompanyRegistrationPage__Header__Btn4")}
          img="/assets/ConsultingServicePage/note.svg"
        />
      </ConsultingTop>
      <WidthContainer>
        <CorporateAcc__CompRegP />
        <InfoBlocks__CompRegP />
        <div id="consultationHelpForm">
          <HelpForm />
        </div>
        <BlocksInfo />
        {/* <WeProvide
          img1="/assets/components/WeProvide/box.svg"
          img2="/assets/components/WeProvide/planet.svg"
          img3="/assets/components/WeProvide/list.svg"
          img4="/assets/components/WeProvide/success.svg"
        /> */}
        <HelpForm />
        <OurServices__CompRegP />
        <InfoListPercent />
        <Facts__CompRegP />
        <Digrams__CompRegP />
        <section className="companyRegistrationPage__helpForm">
          <HelpForm />
        </section>
      </WidthContainer>
    </main>
  );
};

export default index;
