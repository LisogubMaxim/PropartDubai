import React from "react";

import GetConsultation from "../../ui/GetConsultationForm/GetConsultation";
import { InformationPoints } from "../../ui/InformationPoints/InformationPoints";
import MotionLeaveWrapper from "../../ui/MotionLeaveWrapper/MotionLeaveWrapper";
import DescriptiveBtn from "../../ui/DescriptiveBtn/DescriptiveBtn";

import { requiredDocuments } from "../../../data/data";
import { TMRegistrationData } from "../../../data/data";

import styles from "./tm.module.scss";

const TMRegistration = ({ closeSlideMenu }) => {
  return (
    <MotionLeaveWrapper
      closeSlideMenu={closeSlideMenu}
      title="Registration Trademark (TM)"
      hidden={{ y: "90%" }}
      visible={{ y: 0 }}
    >
      <p className={styles.subtitle}>
        A UAE trademark is valid for 10 years within the UAE only; separate
        registration is required elsewhere.
      </p>
      {TMRegistrationData.map((item, idx) => (
        <DescriptiveBtn
          key={idx}
          btnWidth={"100%"}
          spanText={item.stage}
          spanColor={"#000"}
          text={item.text}
          term={item.term}
          timeFrame="Working days"
          termCol={"#333863"}
          textColor={"#000"}
          fSize={"32px"}
          bottomFSize={"14px"}
          mBottom={"8px"}
        />
      ))}
      <DescriptiveBtn
        btnWidth={"100%"}
        bgColor={"#333863"}
        spanText={"Price"}
        spanColor={"#fff"}
        term="AED"
        timeFrame="13,000"
        fSize={"14px"}
        bottomFSize={"32px"}
        mBottom={"40px"}
      />
      <InformationPoints
        title={"Which documents you are required"}
        points={requiredDocuments}
      />
      <p className={styles.contactUs}>
        Contact us to arrange meeting with expert. We can help you to register a
        trademark in a few days.
      </p>
      <GetConsultation className={styles.margin} />
    </MotionLeaveWrapper>
  );
};

export default TMRegistration;
