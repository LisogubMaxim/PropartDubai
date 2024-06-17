import React from "react";
import "./processSetup__LocalCompP.scss";
import ConsultingTable from "../../../../components/ConsultingTable";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  return (
    <section className="processSetupLCP">
      <div className="processSetupLCP__texts">
        <h3 className="processSetupLCP__texts-title">
          {t("localCompanyPage__Process__Title")}
        </h3>
        <p className="processSetupLCP__texts-descr">
          {t("localCompanyPage__Process__Descr")}
        </p>
      </div>
      <ConsultingTable />
    </section>
  );
};

export default index;
