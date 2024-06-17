import React from "react";

import Slider from "../../ui/Slider/Slider";
import GetConsultation from "../../ui/GetConsultationForm/GetConsultation";
import { InformationPoints } from "../../ui/InformationPoints/InformationPoints";
import MotionLeaveWrapper from "../../ui/MotionLeaveWrapper/MotionLeaveWrapper";

import style from "./accountingSupport.module.scss";

const points = [
  "Accounting",
  "Managment",
  "Registration and reporting",
  "Tax consultations",
  "Beneficiary reporting",
  "AML reporting",
  "Economic Substance reporting",
];

const accountingSupportData = [
  {
    title: "Customer billing and reminders",
    text: "Prompt invoices and payment reminders for our clients' buyers",
  },
  {
    title: "Tax compliance advisory",
    text: "Consultations on timely tax registration and reporting.",
  },
  {
    title: "Employee payroll services",
    text: "Timely distribution of wages, payslips, and accrual explanations",
  },
  {
    title: "Financial Reporting",
    text: "Financial statements per legal and client-agreed schedules.",
  },
];

export const AccountingSupport = ({ closeSlideMenu }) => {
  return (
    <MotionLeaveWrapper
      closeSlideMenu={closeSlideMenu}
      title="Accounting support"
      hidden={{ y: "90%" }}
      visible={{ y: 0 }}
    >
      <div className={style.text}>
        We provide comprehensive accounting, financial reporting, and tax
        compliance services to our clients
      </div>
      <div className={style.slider}>
        <Slider data={accountingSupportData} width="171px" height="152px" />
      </div>
      <div className={style.informationPoints}>
        <InformationPoints title={"Our accounting services"} points={points} />
      </div>
      <div className={style.informationGetSupport}>
        <div className={style.title}>How to get accounting support</div>
        <div className={style.steps}>
          <div className={style.step}>
            <div className={style.num}>1</div>
            <div className={style.textOfStep}>Request for services</div>
          </div>
          <div className={style.step}>
            <div className={style.num}>2</div>
            <div className={style.textOfStep}>Free consultation</div>
          </div>
          <div className={style.step}>
            <div className={style.num}>3</div>
            <div className={style.textOfStep}>Selecting a pricing plan</div>
          </div>
          <div className={style.step}>
            <div className={style.num}>4</div>
            <div className={style.textOfStep}>Selecting a pricing plan</div>
          </div>
          <div className={style.step}>
            <div className={style.num}>5</div>
            <div className={style.textOfStep}>
              Signing an agreement on confidential information and concluding an
              agreement
            </div>
          </div>
          <div className={style.step}>
            <div className={style.num}>6</div>
            <div className={style.textOfStep}>
              Launch of the service process and business support 24/7
            </div>
          </div>
        </div>
      </div>
      <div className={style.textToForm}>
        Contact us to arrange meeting with expert. We can help you with your
        accounting and reporting.
      </div>
      <GetConsultation />
    </MotionLeaveWrapper>
  );
};
