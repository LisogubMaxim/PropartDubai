import React from "react";

import VisaHeader from "../../../ui/VisaHeader/VisaHeader";
import { InformationPoints } from "../../../ui/InformationPoints/InformationPoints";
import DescriptiveBtn from "../../../ui/DescriptiveBtn/DescriptiveBtn";

import style from "./retirementVisa.module.scss";

const points = [
  "55+ years",
  "15+  years of work experience",
  "1M+ AED of property",
  "Earnings of $ 5,000"
];

const RetirementVisa = ({ handleClose }) => {
  return (
    <div className="modal-window">
      <VisaHeader title="Retirement visa" handleClose={handleClose} />
      <div className={`main-container ${style.retirementVisa}`}>
        <div className={style.text}>Retired foreigners can apply for a long-term visa.</div>
        <div className={style.informationBlocks}>
          <DescriptiveBtn
            spanText="Validity"
            spanColor="#6F707A"
            term="5"
            timeFrame="years"
            bgColor="#FFFFFF"
            textColor="#333863"
            btnWidth="171px"
            bottomFSize="14px"
            fSize="24px"
            termCol="#333863"
          />
          <DescriptiveBtn
            spanText="Terms"
            spanColor="#6F707A"
            term="15"
            timeFrame="working days"
            bgColor="#FFFFFF"
            textColor="#333863"
            btnWidth="171px"
            bottomFSize="14px"
            fSize="24px"
            termCol="#333863"
          />
          <DescriptiveBtn
            spanText="Price"
            spanColor="#FFFFFF"
            term="AED"
            timeFrame="15,000"
            bgColor="#333863"
            textColor="#333863"
            btnWidth="171px"
            bottomFSize="24px"
            fSize="14px"
            termCol="#FFFFFF"
          />
        </div>
        <InformationPoints title={"Requirements:"} points={points} />
      </div>
    </div>
  );
};

export default RetirementVisa;
