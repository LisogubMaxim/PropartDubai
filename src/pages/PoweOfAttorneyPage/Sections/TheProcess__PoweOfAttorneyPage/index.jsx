import "./theProcess__PoweOfAttorneyPage.scss";
import BlockContainer from "../../../../components/UI/BlockContainer";
import { useTranslation } from "react-i18next";

export default function TheProcess__PoweOfAttorneyPage() {
  const { t } = useTranslation();

  return (
    <section className="theProcessPoweOfAttorneyPage">
      <div className="theProcessPoweOfAttorneyPage__top">
        <div className="theProcessPoweOfAttorneyPage__topText">
          <h2>{t("PoweOfAttorneyPage__TheProcess__Title1")}</h2>
          <p>{t("PoweOfAttorneyPage__TheProcess__Descr1")}</p>
        </div>
        <div className="theProcessPoweOfAttorneyPage__content">
          <BlockContainer>
            <span>
              <img
                src="/assets/PoweOfAttorneyPage/infoIcon.svg"
                alt="infoIcon"
                width={24}
                height={24}
              />
            </span>
            <span className="theProcessPoweOfAttorneyPageItem__whyUs">
              {t("PoweOfAttorneyPage__TheProcess__ItemTitle1")}
            </span>
            <img
              src="/assets/PoweOfAttorneyPage/infoIcon.svg"
              alt="infoIcon"
              width={150}
              height={150}
            />
          </BlockContainer>
          <TheProcessPoweOfAttorneyPageItem
            text={t("PoweOfAttorneyPage__TheProcess__ItemDescr1")}
            title={t("PoweOfAttorneyPage__TheProcess__ItemTitle2")}
            img="/assets/PoweOfAttorneyPage/planetIcon.svg"
          />
          <TheProcessPoweOfAttorneyPageItem
            text={t("PoweOfAttorneyPage__TheProcess__ItemDescr1")}
            title={t("PoweOfAttorneyPage__TheProcess__ItemTitle2")}
            img="/assets/PoweOfAttorneyPage/listIcon.svg"
          />
          <TheProcessPoweOfAttorneyPageItem
            text={t("PoweOfAttorneyPage__TheProcess__ItemDescr2")}
            title={t("PoweOfAttorneyPage__TheProcess__ItemTitle3")}
            img="/assets/PoweOfAttorneyPage/walletIcon.svg"
          />
          <TheProcessPoweOfAttorneyPageItem
            text={t("PoweOfAttorneyPage__TheProcess__ItemDescr3")}
            title={t("PoweOfAttorneyPage__TheProcess__ItemTitle4")}
            img="/assets/PoweOfAttorneyPage/cameraIcon.svg"
          />
          <TheProcessPoweOfAttorneyPageItem
            text={t("PoweOfAttorneyPage__TheProcess__ItemDescr4")}
            title={t("PoweOfAttorneyPage__TheProcess__ItemTitle5")}
            img="/assets/ConsultingServicePage/checked.svg"
          />
        </div>
      </div>
      <div className="theProcessPoweOfAttorneyPage__bottom">
        <TheProcessPoweOfAttorneyPageItem
          text={t("PoweOfAttorneyPage__TheProcess__Title2")}
          title={t("PoweOfAttorneyPage__TheProcess__Descr2")}
          img="/assets/Global/checkbox.svg"
        />
        <BlockContainer>
          <p>{t("PoweOfAttorneyPage__TheProcess__Item1")}</p>
          <p>{t("PoweOfAttorneyPage__TheProcess__Item2")}</p>
          <p>{t("PoweOfAttorneyPage__TheProcess__Item3")}</p>
          <p>{t("PoweOfAttorneyPage__TheProcess__Item4")}</p>
          <p>{t("PoweOfAttorneyPage__TheProcess__Item5")}</p>
        </BlockContainer>
      </div>
    </section>
  );
}
function TheProcessPoweOfAttorneyPageItem({ img, title, text }) {
  return (
    <BlockContainer>
      <span>
        <img src={img} alt={img} width={24} height={24} />
      </span>
      <span>
        <h3>{title}</h3>
        <p>{text}</p>
      </span>
      <img src={img} alt={img} width={150} height={150} />
    </BlockContainer>
  );
}
