import { useEffect } from "react";
import { ConsultingTop } from "../../components/ConsultingTop";
import RegistBusiness__PoweOfAttorneyPage from "./Sections/RegistBusiness__PoweOfAttorneyPage";
import WidthContainer from "../../components/UI/WidthContainer";
import TheProcess__PoweOfAttorneyPage from "./Sections/TheProcess__PoweOfAttorneyPage";
import Important__PoweOfAttorneyPage from "./Sections/Important__PoweOfAttorneyPage";
import HelpForm from "../../components/HelpForm";
import { useTranslation } from "react-i18next";
export default function PoweOfAttorneyPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Powe of Attorner";
    window.scrollTo(0, 0);
  }, []);

  const texts = () => {
    return (
      <div className="tmPage__texts-wrapper">
        <p>
          {t("PoweOfAttorneyPage__Header__Descr1")} <br />
          <br />
          {t("PoweOfAttorneyPage__Header__Descr2")}
        </p>
      </div>
    );
  };
  return (
    <main className="poweOfAttorneyPage main-bg">
      <ConsultingTop
        bg="/assets/PoweOfAttorneyPage/bg.webp"
        title={t("PoweOfAttorneyPage__Header__Title")}
        btnText={t("PoweOfAttorneyPage__Header__LearnMoreBtn")}
        text={texts()}
      ></ConsultingTop>
      <WidthContainer>
        <RegistBusiness__PoweOfAttorneyPage />
        <TheProcess__PoweOfAttorneyPage />
        <Important__PoweOfAttorneyPage />
        <div id="consultationHelpForm">
          <HelpForm />
        </div>
      </WidthContainer>
    </main>
  );
}
