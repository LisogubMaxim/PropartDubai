import Accordion from "../../../Accordion/Accordion"
import MotionLeaveWrapper from "../../../ui/MotionLeaveWrapper/MotionLeaveWrapper"

import { title, subtitle, freezoneAccordionData } from "../../../../data/accordionData/freezone/freezoneData"

const Freezone = ({ closeSlideMenu }) => {
  return (
    <MotionLeaveWrapper
      closeSlideMenu={closeSlideMenu}
      title={title}
      hidden={{ y: "90%", duration: 0.3 }}
      visible={{ y: 0 }}
    >
      <Accordion subtitle={subtitle} data={freezoneAccordionData} />
    </MotionLeaveWrapper>
  )
}

export default Freezone;