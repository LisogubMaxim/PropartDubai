import Accordion from "../../../Accordion/Accordion"

import { title, subtitle, mainlandAccordionData } from "../../../../data/accordionData/mainland/mainlandData"
import MotionLeaveWrapper from "../../../ui/MotionLeaveWrapper/MotionLeaveWrapper"

const Mainland = ({ closeSlideMenu }) => {
  return (
    <MotionLeaveWrapper
      closeSlideMenu={closeSlideMenu}
      title={title}
      hidden={{ y: "90%", duration: 0.3 }}
      visible={{ y: 0 }}
    >
      <Accordion subtitle={subtitle} data={mainlandAccordionData} />
    </MotionLeaveWrapper>
  )
}

export default Mainland