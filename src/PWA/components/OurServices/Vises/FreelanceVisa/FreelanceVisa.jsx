import React from "react";
import { InformationPoints } from "../../../ui/InformationPoints/InformationPoints";
import VisaHeader from "../../../ui/VisaHeader/VisaHeader";
import DescriptiveBtn from "../../../ui/DescriptiveBtn/DescriptiveBtn";
import Slider from "../../../ui/Slider/Slider";
import { BtnData, SliderData, points } from "./btnData";

import styles from "./freelancevisa.module.scss";

const FreelanceVisa = ({ handleClose }) => {
  return (
    <div className="modal-window">
      <VisaHeader title="Freelance visa" handleClose={handleClose} />
      <div className={`main-container ${styles.freelanceVisa}`}>
        <p className={styles.mainText}>
          This visa is for specialized self-employed professionals serving legal entities
        </p>
        <div className={styles.descriptiveButtons}>
          {BtnData.map((btn, i) => (
            <React.Fragment key={i}>
              <DescriptiveBtn
                spanText={btn.spanText}
                spanColor={btn.spanColor}
                term={btn.term}
                timeFrame={btn.timeFrame}
                bottomFSize={btn.bottomFSize}
                fSize={btn.fSize}
                termCol={btn.termCol}
                bgColor={btn.bgColor}
                mBottom={btn.mBottom}
              />
            </React.Fragment>
          ))}
        </div>
        <div className={styles.requirements}>
          <InformationPoints title="Requirements" points={points} />
        </div>
        <h4 className={styles.secondTitle}>Pros</h4>
        <Slider data={SliderData} width="196px" height="80px" />
      </div>
    </div>
  );
};

export default FreelanceVisa;
