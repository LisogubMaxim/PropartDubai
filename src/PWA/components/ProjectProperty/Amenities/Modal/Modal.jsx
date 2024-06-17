import crossIcon from "../../../../assets/images/cross.svg";

import s from "./modal.module.scss";

export const Modal = ({ amenitiesData, closeModal }) => {
  return (
    <section className={`modal-window ${s.modal}`}>
      <div className="main-container">
        <div className={s.modalHeader}>
          <h3 className={s.modalTitle}>Amenities</h3>
          <button className="circle-btn" onClick={closeModal}>
            <img src={crossIcon} alt="Close" />
          </button>
        </div>
        <div className={s.amenities}>
          {amenitiesData?.length
            ? amenitiesData.map((amenity, idx) => (
                <div className={s.amenity} key={idx}>
                  <span className={s.amenityText}>{amenity}</span>
                </div>
              ))
            : "No amenities"}
        </div>
      </div>
    </section>
  );
};
