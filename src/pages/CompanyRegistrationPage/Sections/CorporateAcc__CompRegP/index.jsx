import React from "react";
import CorporateAccountHeader from "../../../../components/CorporateAccount/corporateAccountHeader";
import CorporateAccountSlide from "../../../../components/CorporateAccount/corporateAccountSlide";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  return (
    <section>
      <CorporateAccountHeader
        title={t("CompanyRegistrationPage__CorporateAcc__CompRegP__TextTitle1")}
      />
      <div className="corporateAccount--list">
        <CorporateAccountSlide
          title={t(
            "CompanyRegistrationPage__CorporateAcc__CompRegP__TextTitle1.1"
          )}
        >
          {t("CompanyRegistrationPage__CorporateAcc__CompRegP__Text1.1")}
          <br />
          {t("CompanyRegistrationPage__CorporateAcc__CompRegP__Text1.2")}
        </CorporateAccountSlide>
        <CorporateAccountSlide
          title={t(
            "CompanyRegistrationPage__CorporateAcc__CompRegP__TextTitle1.2"
          )}
        >
          {t("CompanyRegistrationPage__CorporateAcc__CompRegP__Text1.1")}
          <br />
          {t("CompanyRegistrationPage__CorporateAcc__CompRegP__Text1.2")}
        </CorporateAccountSlide>
      </div>
    </section>
  );
};

export default index;
