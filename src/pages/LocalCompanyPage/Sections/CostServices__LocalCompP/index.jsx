import React from "react";
import "./costServices__LocalCompP.scss";
import ServicePrice from "../../../../components/ServicePrice";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  return (
    <section className="costServicesLCP">
      <div className="costServicesLCP__texts">
        <h3 className="costServicesLCP__texts-title">
          {t("localCompanyPage__CostServices__Title")}
        </h3>
        <p className="costServicesLCP__texts-descr">
          {t("localCompanyPage__CostServices__Descr")}
        </p>
      </div>
      <ServicePrice />
    </section>
  );
};

export default index;
