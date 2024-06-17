import React from "react";
import BlockContainer from "../../../../components/UI/BlockContainer";
import "./infoBlocks__AccountAuditingP.scss";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  return (
    <section className="infoBlocksAccAudP">
      <div className="infoBlocksAccAudP__blocks">
        <div className="infoBlocksAccAudP__blocks-wrapper">
          <BlockContainer className="infoBlocksAccAudP__blocks-block">
            <div className="infoBlocksAccAudP__blocks-info">
              <h3 className="infoBlocksAccAudP__blocks-number">1</h3>
              <div className="infoBlocksAccAudP__blocks-infoTexts">
                <h4 className="infoBlocksAccAudP__blocks-infoTitle">
                  {t("AccountAuditingP__infoBlocks__Title1.1")}
                </h4>
                <p className="infoBlocksAccAudP__blocks-infoDescr">
                  {t("AccountAuditingP__infoBlocks__Descr1.1")}
                </p>
              </div>
            </div>
            <div className="infoBlocksAccAudP__blocks-bg">
              <img
                src="/assets/AccountAuditingPage/wallet.svg"
                alt="Image wallet"
                width={150}
                height={150}
              />
            </div>
          </BlockContainer>
          <BlockContainer className="infoBlocksAccAudP__blocks-block">
            <div className="infoBlocksAccAudP__blocks-content">
              <div className="infoBlocksAccAudP__blocks-time">
                <img
                  src="/assets/Global/clock.svg"
                  alt="Image clock"
                  width={24}
                  height={24}
                />
                <span>1 day</span>
              </div>
              <div className="infoBlocksAccAudP__blocks-texts">
                <h5 className="infoBlocksAccAudP__blocks-title">
                  {t("AccountAuditingP__infoBlocks__Title1.2")}
                </h5>
                <p className="infoBlocksAccAudP__blocks-descr">
                  {t("AccountAuditingP__infoBlocks__Descr1.2")}
                </p>
              </div>
              <div className="infoBlocksAccAudP__blocks-texts">
                <h5 className="infoBlocksAccAudP__blocks-title">
                  {t("AccountAuditingP__infoBlocks__Title1.3")}
                </h5>
                <p className="infoBlocksAccAudP__blocks-descr">
                  {t("AccountAuditingP__infoBlocks__Descr1.3")}
                </p>
              </div>
            </div>
          </BlockContainer>
        </div>
        <div className="infoBlocksAccAudP__blocks-wrapper">
          <BlockContainer className="infoBlocksAccAudP__blocks-block">
            <div className="infoBlocksAccAudP__blocks-info">
              <h3 className="infoBlocksAccAudP__blocks-number">2</h3>
              <div className="infoBlocksAccAudP__blocks-infoTexts">
                <h4 className="infoBlocksAccAudP__blocks-infoTitle">
                  {t("AccountAuditingP__infoBlocks__Title2.1")}
                </h4>
                <p className="infoBlocksAccAudP__blocks-infoDescr">
                  {t("AccountAuditingP__infoBlocks__Descr2.1")}
                </p>
              </div>
            </div>
            <div className="infoBlocksAccAudP__blocks-bg">
              <img
                src="/assets/AccountAuditingPage/user.svg"
                alt="Image user"
                width={150}
                height={150}
              />
            </div>
          </BlockContainer>
          <BlockContainer className="infoBlocksAccAudP__blocks-block">
            <div className="infoBlocksAccAudP__blocks-content">
              <div className="infoBlocksAccAudP__blocks-time">
                <img
                  src="/assets/Global/clock.svg"
                  alt="Image clock"
                  width={24}
                  height={24}
                />
                <span>1 day</span>
              </div>
              <div className="infoBlocksAccAudP__blocks-texts">
                <h5 className="infoBlocksAccAudP__blocks-title">
                  {t("AccountAuditingP__infoBlocks__Title2.2")}
                </h5>
                <p className="infoBlocksAccAudP__blocks-descr">
                  {t("AccountAuditingP__infoBlocks__Descr2.2")}
                </p>
              </div>
              <div className="infoBlocksAccAudP__blocks-texts">
                <h5 className="infoBlocksAccAudP__blocks-title">
                  {t("AccountAuditingP__infoBlocks__Title2.3")}
                </h5>
                <p className="infoBlocksAccAudP__blocks-descr">
                  {t("AccountAuditingP__infoBlocks__Descr2.3")}
                </p>
              </div>
            </div>
          </BlockContainer>
        </div>
        <div className="infoBlocksAccAudP__blocks-wrapper">
          <BlockContainer className="infoBlocksAccAudP__blocks-block">
            <div className="infoBlocksAccAudP__blocks-info">
              <h3 className="infoBlocksAccAudP__blocks-number">3</h3>
              <div className="infoBlocksAccAudP__blocks-infoTexts">
                <h4 className="infoBlocksAccAudP__blocks-infoTitle">
                  {t("AccountAuditingP__infoBlocks__Title3.1")}
                </h4>
                <p className="infoBlocksAccAudP__blocks-infoDescr">
                  {t("AccountAuditingP__infoBlocks__Descr3.1")}
                </p>
              </div>
            </div>
            <div className="infoBlocksAccAudP__blocks-bg">
              <img
                src="/assets/AccountAuditingPage/hourglass.svg"
                alt="Image hourglass"
                width={150}
                height={150}
              />
            </div>
          </BlockContainer>
          <BlockContainer className="infoBlocksAccAudP__blocks-block">
            <div className="infoBlocksAccAudP__blocks-content">
              <div className="infoBlocksAccAudP__blocks-time">
                <img
                  src="/assets/Global/clock.svg"
                  alt="Image clock"
                  width={24}
                  height={24}
                />
                <span>1 day</span>
              </div>
              <div className="infoBlocksAccAudP__blocks-texts">
                <h5 className="infoBlocksAccAudP__blocks-title">
                  {t("AccountAuditingP__infoBlocks__Title3.2")}
                </h5>
                <p className="infoBlocksAccAudP__blocks-descr">
                  {t("AccountAuditingP__infoBlocks__Descr3.2")}
                </p>
              </div>
              <div className="infoBlocksAccAudP__blocks-texts">
                <h5 className="infoBlocksAccAudP__blocks-title">
                  {t("AccountAuditingP__infoBlocks__Title3.3")}
                </h5>
                <p className="infoBlocksAccAudP__blocks-descr">
                  {t("AccountAuditingP__infoBlocks__Descr3.3")}
                </p>
              </div>
            </div>
          </BlockContainer>
        </div>
        <div className="infoBlocksAccAudP__blocks-wrapper">
          <BlockContainer className="infoBlocksAccAudP__blocks-block">
            <div className="infoBlocksAccAudP__blocks-info">
              <h3 className="infoBlocksAccAudP__blocks-number">4</h3>
              <div className="infoBlocksAccAudP__blocks-infoTexts">
                <h4 className="infoBlocksAccAudP__blocks-infoTitle">
                  {t("AccountAuditingP__infoBlocks__Title4.1")}
                </h4>
                <p className="infoBlocksAccAudP__blocks-infoDescr">
                  {t("AccountAuditingP__infoBlocks__Descr4.1")}
                </p>
              </div>
            </div>
            <div className="infoBlocksAccAudP__blocks-bg">
              <img
                src="/assets/AccountAuditingPage/listSuccess.svg"
                alt="Image list success"
                width={150}
                height={150}
              />
            </div>
          </BlockContainer>
          <BlockContainer className="infoBlocksAccAudP__blocks-block">
            <div className="infoBlocksAccAudP__blocks-content">
              <div className="infoBlocksAccAudP__blocks-time">
                <img
                  src="/assets/Global/clock.svg"
                  alt="Image clock"
                  width={24}
                  height={24}
                />
                <span>1 day</span>
              </div>
              <div className="infoBlocksAccAudP__blocks-texts">
                <h5 className="infoBlocksAccAudP__blocks-title">
                  {t("AccountAuditingP__infoBlocks__Title4.2")}
                </h5>
                <p className="infoBlocksAccAudP__blocks-descr">
                  {t("AccountAuditingP__infoBlocks__Descr4.2")}
                </p>
              </div>
              <div className="infoBlocksAccAudP__blocks-texts">
                <h5 className="infoBlocksAccAudP__blocks-title">
                  {t("AccountAuditingP__infoBlocks__Title4.3")}
                </h5>
                <p className="infoBlocksAccAudP__blocks-descr">
                  {t("AccountAuditingP__infoBlocks__Descr4.3")}
                </p>
              </div>
            </div>
          </BlockContainer>
        </div>
      </div>
    </section>
  );
};

export default index;
