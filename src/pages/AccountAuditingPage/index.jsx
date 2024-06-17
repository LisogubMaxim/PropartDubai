import React, { useEffect } from "react";
import {
  ConsultingTop,
  ConsultingTopItem,
} from "../../components/ConsultingTop";
import WidthContainer from "../../components/UI/WidthContainer";
import Document__AccountAuditingP from "./Sections/Document__AccountAuditingP";
import HelpForm from "../../components/HelpForm";
import InfoBlocks__AccountAuditingP from "./Sections/InfoBlocks__AccountAuditingP";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Account auditing";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main-bg">
      <ConsultingTop
        title={t("AccountAuditingP__Header__Title1")}
        text={t("AccountAuditingP__Header__Descr1")}
        bg="/assets/components/Header/backgroudTwo.png"
        btnText={t("AccountAuditingP__Header__Btn")}
      >
        <ConsultingTopItem
          count="01"
          text={t("AccountAuditingP__Header__Title2")}
          img="/assets/Global/medicalCard.svg"
        />
        <ConsultingTopItem
          count="02"
          text={t("AccountAuditingP__Header__Title3")}
          img="/assets/Global/toDoList.svg"
        />
        <ConsultingTopItem
          count="03"
          text={t("AccountAuditingP__Header__Title4")}
          img="/assets/Global/stats.svg"
        />
        <ConsultingTopItem
          count="04"
          text={t("AccountAuditingP__Header__Title5")}
          img="/assets/Global/list.svg"
        />
      </ConsultingTop>
      <WidthContainer>
        <Document__AccountAuditingP />
        <div id="consultationHelpForm">
          <HelpForm />
        </div>
        <InfoBlocks__AccountAuditingP />
      </WidthContainer>
    </main>
  );
};

export default index;
