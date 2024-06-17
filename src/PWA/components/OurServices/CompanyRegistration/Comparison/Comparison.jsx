import React from "react"
import GetConsultation from "../../../ui/GetConsultationForm/GetConsultation"
import MotionLeaveWrapper from "../../../ui/MotionLeaveWrapper/MotionLeaveWrapper"

import property from "../../../../assets/images/comparison/property.svg"
import globe from "../../../../assets/images/comparison/globe.svg"
import tax from "../../../../assets/images/comparison/tax.svg"
import gravel from "../../../../assets/images/comparison/gravel.svg"
import price from "../../../../assets/images/comparison/price.svg"
import license from "../../../../assets/images/comparison/license.svg"
import bankAccount from "../../../../assets/images/comparison/bank-account.svg"
import visa from "../../../../assets/images/comparison/visa.svg"
import office from "../../../../assets/images/comparison/office.svg"
import stamp from "../../../../assets/images/comparison/stamp.svg"

import s from "./comparison.module.scss"

const comparisonData = [
  { img: property, freezone: "100% ownership of foreign citizens or legal entities", mainland: "100% ownership of foreign citizens or legal entities" },
  { img: globe, freezone: "Inside the zone and outside the UAE", mainland: "Inside and outside the UAE" },
  { img: tax, freezone: "0% VAT 9% Tax on net profit from 100,000 USD", mainland: "5% VAT 9,9% Tax on net profit from 100,000 USD" },
  { img: gravel, freezone: "Freezone regulatory body", mainland: "Economic Department of the Emirate" },
  { img: price, freezone: "Registration price USD 10 000", mainland: "Registration price USD 12 800" },
  { img: license, freezone: "1 year license Annual renewal", mainland: "1 year license Annual renewal" },
  { img: bankAccount, freezone: "Account in the FAB WIO payment system", mainland: "Account in the FAB WIO payment system" },
  { img: visa, freezone: "Employee visa`s price USD 1 800", mainland: "Employee visa`s price USD 2 060" },
  { img: office, freezone: "Virtual office (10 hours per week)", mainland: "Office registration" },
  { img: stamp, freezone: "Company`s stamp", mainland: "-" }
]

const Comparison = ({ closeSlideMenu }) => {
  return (
      <MotionLeaveWrapper
        closeSlideMenu={closeSlideMenu}
        title="Comparison"
        hidden={{ y: "90%", duration: 0.3 }}
        visible={{ y: 0 }}
      >
      <ul className={s.items}>
        <li className={s.itemsTitle}>Freezone</li>
        <li className={s.itemsTitle}>Mainland</li>
        {comparisonData.map((item, idx) => (
          <React.Fragment key={idx}>
            <li className={s.item}>
              <img src={item.img} alt="Item 1" className={s.itemImg} />
              <span className={s.itemText}>{item.freezone}</span>
            </li>
            <li className={s.item}>
              <img src={item.img} alt="Item 2" className={s.itemImg} />
              <span className={s.itemText}>{item.mainland}</span>
            </li>
          </React.Fragment>
        ))}
      </ul>
      <p className={s.bottomText}>
        Choosing between a Freezone and Mainland depends on various factors. We can advice you the best variant.
      </p>
      <GetConsultation />
    </MotionLeaveWrapper>
  )
}

export default Comparison;