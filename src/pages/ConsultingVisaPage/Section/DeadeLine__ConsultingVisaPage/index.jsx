import "./deadeLine__ConsultingVisaPage.scss";
import BlockContainer from "../../../../components/UI/BlockContainer";
import { useTranslation } from "react-i18next";
export default function DeadeLine__ConsultingVisaPage() {
  const { t } = useTranslation();

  return (
    <section className="deadeLineConsultingVisaPage importantPoweOfAttorneyPage">
      <div className="importantPoweOfAttorneyPage__content">
        <DeadeLineConsultingVisaPageItem
          img="/assets/ConsultingVisaPage/planetIcon.svg"
          imgLarge="/assets/PoweOfAttorneyPage/planetIcon.svg"
          title={t("visaPage__DeadeLine__Title1")}
          text={t("visaPage__DeadeLine__Descr1")}
        />
        <DeadeLineConsultingVisaPageItem
          img="/assets/ConsultingVisaPage/homeIcon.svg"
          imgLarge="/assets/ConsultingVisaPage/homeOrangeIcon.svg"
          title={t("visaPage__DeadeLine__Title2")}
          text={t("visaPage__DeadeLine__Descr2")}
        />
      </div>
    </section>
  );
}

function DeadeLineConsultingVisaPageItem({ img, imgLarge, title, text }) {
  return (
    <BlockContainer>
      <span>
        <img src={img} alt={img} width={24} height={24} />
        <h3>{title}</h3>
      </span>
      <p>{text}</p>
      <img src={imgLarge} alt={imgLarge} width={150} height={150} />
    </BlockContainer>
  );
}
