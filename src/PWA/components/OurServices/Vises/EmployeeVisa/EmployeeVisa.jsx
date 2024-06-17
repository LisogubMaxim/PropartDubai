import React from "react";

import VisaHeader from "../../../ui/VisaHeader/VisaHeader";
import { InformationPoints } from "../../../ui/InformationPoints/InformationPoints";
import Slider from "../../../ui/Slider/Slider";
import DescriptiveBtn from "../../../ui/DescriptiveBtn/DescriptiveBtn";

import style from "./employeeVisa.module.scss";

const employeeData = [
  { title: "Family sponsorship" },
  { title: "Six-month UAE residency visit requirement" },
  { title: "Opening local bank account" },
  { title: "Opportunity to obtain a credit card" },
  { title: "Opportunity to sign a rental agreement" },
  { title: "Purchase long-term mobile number" },
  { title: "Obtaining a local driver's license" },
];

const EmployeeVisa = ({ handleClose }) => {
  const points = ["21+ years", "Photo", "Employment", "UAE Ministry-certified diploma"];

  return (
    <div className="modal-window">
      <VisaHeader title="Employee visa" handleClose={handleClose} />

      <div className={`main-container ${style.employeeVisa}`}>
        <div className={style.text}>Applying for an employee visa through hiring and drawing up an employment contract.</div>
        <div className={style.informationBlocks}>
          <DescriptiveBtn
            spanText="Validity"
            spanColor="#6F707A"
            term="2"
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
            term="10"
            timeFrame="working days"
            bgColor="#FFFFFF"
            textColor="#333863"
            btnWidth="171px"
            bottomFSize="14px"
            fSize="24px"
            termCol="#333863"
          />
          <DescriptiveBtn
            spanText="Price Freezone"
            spanColor="#FFFFFF"
            term="AED"
            timeFrame="7,000"
            bgColor="#333863"
            textColor="#333863"
            btnWidth="171px"
            bottomFSize="24px"
            fSize="14px"
            termCol="#FFFFFF"
          />
          <DescriptiveBtn
            spanText="Price Mainland"
            spanColor="#FFFFFF"
            term="AED"
            timeFrame="8,000"
            bgColor="#333863"
            textColor="#333863"
            btnWidth="171px"
            bottomFSize="24px"
            fSize="14px"
            termCol="#FFFFFF"
          />
        </div>
        <div className={style.informationPoints}>
          <InformationPoints title={"Requirements"} points={points} />
        </div>
        <div className={style.slider}>
          <div className={style.title}>Pros</div>
          <Slider data={employeeData} width="196px" height="86px" />
        </div>
      </div>
    </div>
  );
};

export default EmployeeVisa;
