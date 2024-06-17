import React from "react";
import DescriptiveBtn from "../../../ui/DescriptiveBtn/DescriptiveBtn";
import VisaHeader from "../../../ui/VisaHeader/VisaHeader"
import Slider from "../../../ui/Slider/Slider";
import { InformationPoints } from "../../../ui/InformationPoints/InformationPoints";
import { investorVisaData, investorVisaPros, investorVisaRequirements } from "../../../../data/data";

import s from "./investor-visa.module.scss";

export const InvestorVisa = ({ handleClose }) => {
  return (
    <div className="modal-window">
      <VisaHeader title="Investor visa" handleClose={handleClose} />
      <div className={`main-container ${s.investorVisa}`}>
        <p className={s.mainText}>The sponsor of the visa is the fact of owning shares of a company registered in the UAE.</p>
        <div className={s.descriptiveButtons}>
          {investorVisaData.map((item, idx) => (
            <React.Fragment key={idx}>
              {item.isHighlighted ? (
                <DescriptiveBtn
                  spanText={item.name}
                  term={item.term}
                  timeFrame={item.termFrame}
                  bgColor="#333863"
                  fSize="14px"
                  bottomFSize="24px"
                />
              ) : (
                <DescriptiveBtn
                  spanText={item.name}
                  term={item.term}
                  timeFrame={item.termFrame}
                  spanColor="#6f707a"
                  termCol="#333863"
                  textColor="#000"
                />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className={s.requirements}>
          <InformationPoints title="Requirements" points={investorVisaRequirements} />
        </div>
        <h4 className={s.secondTitle}>Pros</h4>
        <Slider data={investorVisaPros} height="86px" />
      </div>
    </div>
  )
}
