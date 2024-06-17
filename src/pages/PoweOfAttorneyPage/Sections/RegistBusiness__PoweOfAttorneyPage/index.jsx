import "./registBusiness__PoweOfAttorneyPage.scss";
import BlockContainer from "../../../../components/UI/BlockContainer";
import { useTranslation } from "react-i18next";

export default function RegistBusiness__PoweOfAttorneyPage() {
  const { t } = useTranslation();

  return (
    <section className="registBusinessPoweOfAttorneyPage">
      <div className="registBusinessPoweOfAttorneyPage__top">
        <h2>{t("PoweOfAttorneyPage__RegistBusiness__Title1")}</h2>
        <p>{t("PoweOfAttorneyPage__RegistBusiness__Descr1")}</p>
      </div>
      <div className="registBusinessPoweOfAttorneyPage__content">
        <div className="registBusinessPoweOfAttorneyPage__item registBusinessPoweOfAttorneyPage__item--img">
          <img
            src="/assets/PoweOfAttorneyPage/dubai.svg"
            alt="dubai"
            width={616}
            height={240}
          />
        </div>
        <BlockContainer>
          <div>
            <img
              src="/assets/PoweOfAttorneyPage/judgeIcon.svg"
              alt="judgeIcon"
              width={64}
              height={64}
            />
          </div>
          <div className="registBusinessPoweOfAttorneyPage__itemBottom">
            <h3>{t("PoweOfAttorneyPage__RegistBusiness__Title2")}</h3>
            <p>{t("PoweOfAttorneyPage__RegistBusiness__Descr2")}</p>
          </div>
          <img
            src="/assets/PoweOfAttorneyPage/judgeIcon.svg"
            alt="judgeIcon"
            width={158}
            height={158}
          />
        </BlockContainer>
      </div>
    </section>
  );
}
