import Slider from "../../ui/Slider/Slider";
import { POAData } from "../../../data/data";
import GetConsultation from "../../ui/GetConsultationForm/GetConsultation";
import MotionLeaveWrapper from "../../ui/MotionLeaveWrapper/MotionLeaveWrapper";

import s from "./poa.module.scss";

export const PowersOfAttorney = ({ closeSlideMenu }) => {
  return (
    <MotionLeaveWrapper
      closeSlideMenu={closeSlideMenu}
      title="Powers of attorney (POA)"
      hidden={{ y: "90%", duration: 0.3 }}
      visible={{ y: 0 }}
    >
      <p className={s.mainText}>
        We work directly both with public and private notaries in the UAE.
      </p>
      <Slider data={POAData} />
      <p className={s.contactUsText}>
        Contact us to arrange meeting with expert. We can help you to register a
        power of attorney in a few days.
      </p>
      <GetConsultation />
    </MotionLeaveWrapper>
  );
};
