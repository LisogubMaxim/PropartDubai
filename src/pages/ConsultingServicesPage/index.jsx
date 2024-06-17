import {
  ConsultingTop,
  ConsultingTopItem,
} from "../../components/ConsultingTop";
import WidthContainer from "../../components/UI/WidthContainer";
import EasyRegist__ConsultingServicesPage from "./Sections/EasyRegist__ConsultingServicesPage";
import ConsultingTable from "../../components/ConsultingTable";
import HelpForm from "../../components/HelpForm";
import Discount__ConsultingServicesPage from "./Sections/Discount__ConsultingServicesPage";
import { useEffect } from "react";
import AdditionalPrice__ConsultingServicesPage from "./Sections/AdditionalPrice__ConsultingServicesPage";
import Telegram__ConsultingServicesPage from "./Sections/Telegram__ConsultingServicesPage";
import CorporateAccountHeader from "../../components/CorporateAccount/corporateAccountHeader";
import CorporateAccountSlide from "../../components/CorporateAccount/corporateAccountSlide";
import InfoListPercent from "../../components/InfoListPercent";
import BlocksInfo from "../../components/BlocksInfo";
import WeProvide from "../../components/WeProvide";
import ServicePrice from "../../components/ServicePrice";
import { useTranslation } from "react-i18next";

export default function ConsultingServicesPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Services";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="consultingServicesPage main-bg">
      <ConsultingTop
        title={t("ConsultingServicesPage__ConsultingTop__Title")}
        text={t("ConsultingServicesPage__ConsultingTop__Text")}
        bg="/assets/ConsultingServicePage/bg.webp"
        btnText={t("consultation_button")}
      >
        <ConsultingTopItem
          count="01"
          text={t("ConsultingServicesPage__ConsultingTop__Item1Text")}
          img="/assets/ConsultingServicePage/arrows.svg"
        />
        <ConsultingTopItem
          count="02"
          text={t("ConsultingServicesPage__ConsultingTop__Item2Text")}
          img="/assets/ConsultingServicePage/human.svg"
        />
        <ConsultingTopItem
          count="03"
          text={t("ConsultingServicesPage__ConsultingTop__Item3Text")}
          img="/assets/ConsultingServicePage/chat.svg"
        />
        <ConsultingTopItem
          count="04"
          text={t("ConsultingServicesPage__ConsultingTop__Item4Text")}
          img="/assets/ConsultingServicePage/note.svg"
        />
      </ConsultingTop>
      <WidthContainer>
        <EasyRegist__ConsultingServicesPage />
        <section>
          <ConsultingTable />
        </section>
        <HelpForm />
        <ServicePrice />
        <Discount__ConsultingServicesPage />
        <AdditionalPrice__ConsultingServicesPage />
        <div id="consultationHelpForm">
          <HelpForm />
        </div>
        <Telegram__ConsultingServicesPage />
        <section className="consultingServicesPage__ourServices">
          <CorporateAccountHeader
            title={t(
              "CompanyRegistrationPage__CorporateAcc__CompRegP__TextTitle2.1"
            )}
          />
          <div className="corporateAccount--list">
            <CorporateAccountSlide
              title={t("ConsultingServicesPage__Corporate__Title1")}
            >
              {t(
                "CompanyRegistrationPage__CorporateAcc__CompRegP__TextDescr2.1"
              )}
            </CorporateAccountSlide>
            <CorporateAccountSlide
              title={t("ConsultingServicesPage__Corporate__Title2")}
            >
              {t(
                "CompanyRegistrationPage__CorporateAcc__CompRegP__TextDescr2.2"
              )}
            </CorporateAccountSlide>
          </div>
        </section>
        <BlocksInfo />
        {/* <WeProvide
          img1="/assets/ConsultingServicePage/box.svg"
          img2="/assets/ConsultingServicePage/planet.svg"
          img3="/assets/ConsultingServicePage/list.svg"
          img4="/assets/ConsultingServicePage/success.svg"
        /> */}
        <HelpForm />
        <InfoListPercent />
      </WidthContainer>
    </main>
  );
}
