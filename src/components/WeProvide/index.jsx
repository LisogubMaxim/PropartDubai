import React from "react";
import "./weProvide.scss";
import BlockContainer from "../UI/BlockContainer";
import { useTranslation } from "react-i18next";

const index = ({ img1, img2, img3, img4 }) => {
  const { t } = useTranslation();

  return (
    <section className="weProvide">
      <h3 className="weProvide__title">
        {t("CompanyRegistrationPage__WeProvide__Title")}
      </h3>
      <p className="weProvide__descr">
        {t("CompanyRegistrationPage__WeProvide__Descr")}
      </p>
      <div className="weProvide__blocks">
        <BlockContainer className="weProvide__blocks-block">
          <img src={img1} alt="Image box" width={24} height={24} />
          <div className="weProvide__blocks-texts">
            <h4 className="weProvide__blocks-title">
              {t("CompanyRegistrationPage__WeProvide__Title1")}
            </h4>
            <p className="weProvide__blocks-descr">
              {t("CompanyRegistrationPage__WeProvide__Descr1")}
            </p>
          </div>
          <div className="weProvide__blocks-bg">
            <img src={img1} alt="Image background" width={158} height={158} />
          </div>
        </BlockContainer>
        <BlockContainer className="weProvide__blocks-block">
          <img src={img2} alt="Image planet" width={24} height={24} />
          <div className="weProvide__blocks-texts">
            <h4 className="weProvide__blocks-title">
              {t("CompanyRegistrationPage__WeProvide__Title2")}
            </h4>
            <p className="weProvide__blocks-descr">
              {t("CompanyRegistrationPage__WeProvide__Descr2")}
            </p>
          </div>
          <div className="weProvide__blocks-bg">
            <img src={img2} alt="Image background" width={158} height={158} />
          </div>
        </BlockContainer>
        <BlockContainer className="weProvide__blocks-block">
          <img src={img3} alt="Image list" width={24} height={24} />
          <div className="weProvide__blocks-texts">
            <h4 className="weProvide__blocks-title">
              {t("CompanyRegistrationPage__WeProvide__Title3")}
            </h4>
            <p className="weProvide__blocks-descr">
              {t("CompanyRegistrationPage__WeProvide__Descr3")}
            </p>
          </div>
          <div className="weProvide__blocks-bg">
            <img src={img3} alt="Image background" width={158} height={158} />
          </div>
        </BlockContainer>
        <BlockContainer className="weProvide__blocks-block">
          <img src={img4} alt="Image success" width={24} height={24} />
          <div className="weProvide__blocks-texts">
            <h4 className="weProvide__blocks-title">
              {t("CompanyRegistrationPage__WeProvide__Title4")}
            </h4>
            <p className="weProvide__blocks-descr">
              {t("CompanyRegistrationPage__WeProvide__Descr4")}
            </p>
          </div>
          <div className="weProvide__blocks-bg">
            <img src={img4} alt="Image background" width={158} height={158} />
          </div>
        </BlockContainer>
      </div>
    </section>
  );
};

export default index;
