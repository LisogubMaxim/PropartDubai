import { employmentData } from "../../../data/data";
import GetConsultation from "../../ui/GetConsultationForm/GetConsultation";
import MotionLeaveWrapper from "../../ui/MotionLeaveWrapper/MotionLeaveWrapper";
import Slider from "../../ui/Slider/Slider";
import { IoIosInformationCircleOutline } from "react-icons/io";

import s from "./employment.module.scss";

export const Employment = ({ closeSlideMenu }) => {
  return (
    <MotionLeaveWrapper
      closeSlideMenu={closeSlideMenu}
      title="Employment"
      hidden={{ y: "90%" }}
      visible={{ y: 0 }}
    >
      <p className={s.mainText}>
        We specializes in providing employment services and obtaining work visas
        in the UAE
      </p>
      <h3 className={s.secondTitle}>What we can</h3>
      <Slider data={employmentData} />
      <h3 className={s.secondTitle}>Employment options</h3>
      <div className={s.options}>
        <div className={`shadow ${s.option}`}>
          <span className={s.optionIcon}>
            <IoIosInformationCircleOutline size="1.5em" />
          </span>
          <p className={s.optionText}>Freelance visa</p>
        </div>
        <div className={`shadow ${s.option}`}>
          <span className={s.optionIcon}>
            <IoIosInformationCircleOutline size="1.5em" />
          </span>
          <p className={s.optionText}>Employee visa</p>
        </div>
      </div>
      <p className={s.contactUsText}>
        Contact us to arrange meeting with expert. We can detail employee
        recruitment for you.
      </p>
      <GetConsultation />
    </MotionLeaveWrapper>
  );
};
