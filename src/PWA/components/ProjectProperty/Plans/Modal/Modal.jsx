import { Plan } from "../Plan";
import DescriptiveBtn from "../../../ui/DescriptiveBtn/DescriptiveBtn";

import crossIcon from "../../../../assets/images/cross.svg";

import s from "./modal.module.scss";

export const Modal = ({ plan, closeModal }) => {
  return (
    <section className={`modal-window ${s.modal}`}>
      <div className="main-container">
        <div className={s.modalHeader}>
          <h3 className={s.modalTitle}>Floor&Payments plans</h3>
          <button className="circle-btn" onClick={closeModal}>
            <img src={crossIcon} alt="Close" />
          </button>
        </div>
        <div className={s.modalPlan}>
          <Plan plan={plan} height="360px" />
        </div>
        <div className={s.descriptiveBtns}>
          {plan?.descriptiveData.map((item, idx) => (
            <DescriptiveBtn
              key={idx}
              spanText={item.name}
              term={item.value}
              timeFrame={item.price}
              spanColor="#6f707a"
              termCol="#333863"
              bottomFSize="12px"
              textColor="#000"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
