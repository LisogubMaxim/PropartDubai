import React from "react";
import BlockContainer from "../../../../components/UI/BlockContainer";
import "./document__AccountAuditingP.scss";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  return (
    <section className="documentAccAudP">
      <div className="documentAccAudP__texts">
        <h2 className="documentAccAudP__texts-title">
          {t("AccountAuditingP__Cost__Title1")}
        </h2>
        <p className="documentAccAudP__texts-descr">
          {t("AccountAuditingP__Cost__Descr1")}
        </p>
      </div>
      <div className="documentAccAudP__blocks">
        <div className="documentAccAudP__blocks-wrapper">
          <BlockContainer className="documentAccAudP__blocks-block">
            <div className="documentAccAudP__blocks-textsWrapper">
              <h3 className="documentAccAudP__blocks-number">01</h3>
              <div className="documentAccAudP__blocks-texts">
                <h4 className="documentAccAudP__blocks-title">
                  {" "}
                  {t("AccountAuditingP__Cost__Title2")}
                </h4>
                <p className="documentAccAudP__blocks-descr">
                  {t("AccountAuditingP__Cost__Descr2")}
                </p>
              </div>
            </div>
            <div className="documentAccAudP__blocks-imgBg">
              <img
                src="/assets/AccountAuditingPage/cell.svg"
                alt="Image cell"
                width={266}
                height={217}
              />
            </div>
          </BlockContainer>
          <BlockContainer className="documentAccAudP__blocks-block">
            <img
              src="/assets/AccountAuditingPage/labourCard.png"
              alt="Image labour card"
              width={424}
              height={243}
            />
          </BlockContainer>
        </div>
        <div className="documentAccAudP__blocks-wrapper">
          <BlockContainer className="documentAccAudP__blocks-block">
            <div className="documentAccAudP__blocks-textsWrapper">
              <h3 className="documentAccAudP__blocks-number">02</h3>
              <div className="documentAccAudP__blocks-texts">
                <h4 className="documentAccAudP__blocks-title">
                  {" "}
                  {t("AccountAuditingP__Cost__Title3")}
                </h4>
                <p className="documentAccAudP__blocks-descr">
                  {t("AccountAuditingP__Cost__Descr3")}
                </p>
              </div>
            </div>
          </BlockContainer>
          <BlockContainer className="documentAccAudP__blocks-block">
            <img
              src="/assets/AccountAuditingPage/emiratesID.jpg"
              alt="Image labour card"
              width={424}
              height={243}
            />
          </BlockContainer>
        </div>
        <div className="documentAccAudP__blocks-wrapper">
          <BlockContainer className="documentAccAudP__blocks-block">
            <div className="documentAccAudP__blocks-textsWrapper">
              <h3 className="documentAccAudP__blocks-number">03</h3>
              <div className="documentAccAudP__blocks-texts">
                <h4 className="documentAccAudP__blocks-title">
                  {t("AccountAuditingP__Cost__Title4")}
                </h4>
                <p className="documentAccAudP__blocks-descr">
                  {t("AccountAuditingP__Cost__Descr4")}
                </p>
              </div>
            </div>
          </BlockContainer>
          <BlockContainer className="documentAccAudP__blocks-block">
            <img
              src="/assets/AccountAuditingPage/residenceVisa.jpg"
              alt="Image labour card"
              width={424}
              height={243}
            />
          </BlockContainer>
        </div>
      </div>
    </section>
  );
};

export default index;
