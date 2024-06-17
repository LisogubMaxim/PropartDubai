import React, { useEffect } from "react";
import { ConsultingTop } from "../../components/ConsultingTop";
import Process__TMP from "./Sections/Process__TMP";
import WidthContainer from "../../components/UI/WidthContainer";
import Facts__TMP from "./Sections/Facts__TMP";
import HelpForm from "../../components/HelpForm";
import "./tmPage.scss";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "TM";
    window.scrollTo(0, 0);
  }, []);

  const texts = () => {
    return (
      <div className="tmPage__texts-wrapper">
        <p>{t("tmPage__Header__Descr1")}</p>
        <p>{t("tmPage__Header__Descr2")}</p>
      </div>
    );
  };

  return (
    <main className="main-bg tmPage">
      <ConsultingTop
        title={t("tmPage__Header__Title")}
        text={texts()}
        bg="/assets/TMPage/bg.webp"
        btnText={t("tmPage__Header__Btn")}
      />
      <WidthContainer>
        <Process__TMP />
        <Facts__TMP />
        <div id="consultationHelpForm">
          <HelpForm />
        </div>
      </WidthContainer>
    </main>
  );
};

export default index;

// consultingTop > .container
