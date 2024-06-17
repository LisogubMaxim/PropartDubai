import "./emiratesId__ConsultingVisaPage.scss";
import BlockContainer from "../../../../components/UI/BlockContainer";
import { useTranslation } from "react-i18next";

export default function EmiratesId__ConsultingVisaPage() {
  const { t } = useTranslation();

  return (
    <section className="emiratesId__ConsultingVisaPage registBusinessPoweOfAttorneyPage">
      <div className="registBusinessPoweOfAttorneyPage__top">
        <h2>{t("visaPage__EmiratesId__Title")}</h2>
        <p>{t("visaPage__EmiratesId__Descr1")}</p>
        <div className="registBusinessPoweOfAttorneyPage__content">
          <BlockContainer>
            <img
              src="/assets/ConsultingVisaPage/arab.webp"
              alt="visa"
              width={614}
              height={352}
            />
          </BlockContainer>
          <BlockContainer>
            93,1%
            <span>{t("visaPage__EmiratesId__Descr2")}</span>
          </BlockContainer>
          <BlockContainer>
            6,9%
            <span>{t("visaPage__EmiratesId__Descr3")}</span>
          </BlockContainer>
        </div>
        <p>{t("visaPage__EmiratesId__Descr4")}</p>
      </div>
    </section>
  );
}
