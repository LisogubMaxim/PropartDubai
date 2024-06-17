import "./important__PoweOfAttorneyPage.scss";
import BlockContainer from "../../../../components/UI/BlockContainer";
import { useTranslation } from "react-i18next";
export default function Important__PoweOfAttorneyPage() {
  const { t } = useTranslation();

  return (
    <section className="importantPoweOfAttorneyPage">
      <h2>{t("PoweOfAttorneyPage__Important__Title1")}</h2>
      <div className="importantPoweOfAttorneyPage__content">
        <ImportantPoweOfAttorneyPageItem
          img="/assets/PoweOfAttorneyPage/photoIcon.svg"
          title={t("PoweOfAttorneyPage__Important__Title2")}
          text={t("PoweOfAttorneyPage__Important__Descr1")}
        />
        <ImportantPoweOfAttorneyPageItem
          img="/assets/Global/phoneOrange.svg"
          title={t("PoweOfAttorneyPage__Important__Title3")}
          text={t("PoweOfAttorneyPage__Important__Descr2")}
        />
      </div>
    </section>
  );
}

function ImportantPoweOfAttorneyPageItem({ img, title, text }) {
  return (
    <BlockContainer>
      <h3>{title}</h3>
      <p>{text}</p>
      <img src={img} alt={img} width={68} height={68} />
    </BlockContainer>
  );
}
