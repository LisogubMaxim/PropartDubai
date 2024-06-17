import React from "react";
import BlockContainer from "../../../../components/UI/BlockContainer";
import "./process__TMP.scss";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  return (
    <section className="processTMPage">
      <div className="processTMPage__texts">
        <h2 className="processTMPage__texts-title">
          {t("tmPage__Process__Title1")}
        </h2>
        <p className="processTMPage__texts-descr">
          {t("tmPage__Process__Descr1")}
        </p>
      </div>
      <h2 className="processTMPage__texts-title">
        {t("tmPage__Process__Title2")}
      </h2>
      <div className="processTMPage__blocks">
        <BlockContainer className="processTMPage__blocks-block">
          <div className="processTMPage__blocks-info">
            <span className="processTMPage__blocks-number">1</span>
            <div>
              <span className="processTMPage__blocks-date">
                {t("tmPage__Process__Weeks1")}
              </span>
              <img
                src="/assets/Global/clock.svg"
                alt="Image clock"
                width={24}
                height={24}
              />
            </div>
          </div>
          <p className="processTMPage__blocks-descr">
            {t("tmPage__Process__Descr2")}
          </p>
        </BlockContainer>
        <BlockContainer className="processTMPage__blocks-block">
          <div className="processTMPage__blocks-info">
            <span className="processTMPage__blocks-number">2</span>
            <div>
              <span className="processTMPage__blocks-date">
                {t("tmPage__Process__Weeks2")}
              </span>
              <img
                src="/assets/Global/clock.svg"
                alt="Image clock"
                width={24}
                height={24}
              />
            </div>
          </div>
          <p className="processTMPage__blocks-descr">
            {t("tmPage__Process__Descr3")}
          </p>
        </BlockContainer>
        <BlockContainer className="processTMPage__blocks-block">
          <div className="processTMPage__blocks-info">
            <span className="processTMPage__blocks-number">3</span>
            <div>
              <span className="processTMPage__blocks-date">
                {t("tmPage__Process__Weeks3")}
              </span>
              <img
                src="/assets/Global/clock.svg"
                alt="Image clock"
                width={24}
                height={24}
              />
            </div>
          </div>
          <p className="processTMPage__blocks-descr">
            {t("tmPage__Process__Descr4")}
          </p>
        </BlockContainer>
      </div>
      <h4 className="processTMPage__cost">
        {t("tmPage__Process__Cost")}: 25,000{" "}
        {t("ConsultingServicesPage__ServicePrice__Aed")}
      </h4>
    </section>
  );
};

export default index;
