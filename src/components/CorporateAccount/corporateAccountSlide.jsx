import React from "react";
import Button from "../UI/Button";
import BlockContainer from "../UI/BlockContainer";
import "./corporateAccount.scss";
import { useTranslation } from "react-i18next";

const index = ({ title, children }) => {
  const { t } = useTranslation();

  return (
    <BlockContainer>
      <div className="corporateAccount__slide">
        <h4 className="corporateAccount__slide-title">{title}</h4>
        <p className="corporateAccount__slide-descr">{children}</p>
        {/* <Button className="button--darkBlue">
          {t("CompanyRegistrationPage__CorporateAccountSlide__Btn")}
          <img
            src="/assets/components/CorporateAccount/arrowLineRight.svg"
            alt="Arrow line"
            width={24}
            height={24}
          />
        </Button> */}
      </div>
    </BlockContainer>
  );
};

export default index;
