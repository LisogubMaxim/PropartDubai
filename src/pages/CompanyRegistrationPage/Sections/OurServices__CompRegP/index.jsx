import React from "react";
import CorporateAccountHeader from "../../../../components/CorporateAccount/corporateAccountHeader";
import CorporateAccountSlide from "../../../../components/CorporateAccount/corporateAccountSlide";
import { useTranslation } from "react-i18next";
import "./ourServices__CompRegP.scss";

const index = () => {
  const { t } = useTranslation();

  return (
    <section className="ourServices__CompPage">
      <CorporateAccountHeader
        title={t(
          "CompanyRegistrationPage__CorporateAcc__CompRegP__TextTitle2.1"
        )}
      />
      <div className="corporateAccount--list">
        <CorporateAccountSlide
          title={t(
            "CompanyRegistrationPage__CorporateAcc__CompRegP__TextTitle2.2"
          )}
        >
          {t("CompanyRegistrationPage__CorporateAcc__CompRegP__TextDescr2.1")}
        </CorporateAccountSlide>
        <CorporateAccountSlide
          title={t(
            "CompanyRegistrationPage__CorporateAcc__CompRegP__TextTitle2.3"
          )}
        >
          {t("CompanyRegistrationPage__CorporateAcc__CompRegP__TextDescr2.2")}
        </CorporateAccountSlide>
      </div>
    </section>
  );
};

export default index;
