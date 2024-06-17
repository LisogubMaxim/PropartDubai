import OtherServices from "./ClickableMenu/OtherServices";
import ListItem from "./DroppableMenu/ListItem";
import cross from "../../assets/images/cross.svg";

import styles from "./ourservices.module.scss";

const list = ["Company registration", "Visa processing"];

const OurServices = ({ selectedService = null, handleClose }) => {
  return (
    <div className="main-container modal-window" style={{ zIndex: 10000 }}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>Our services</h1>
        <button className={styles.closeIcon}>
          <img src={cross} onClick={handleClose} alt="close btn" />
        </button>
      </div>
      <div>
        <ul className={styles.service_list}>
          {list.map((item, i) => (
            <ListItem
              item={item}
              key={i}
              i={i}
              initialMenuOpened={
                selectedService && list.includes(selectedService)
                  ? [list.indexOf(selectedService)]
                  : []
              }
            />
          ))}
        </ul>
        <OtherServices initialItem={selectedService} />
      </div>
    </div>
  );
};

export default OurServices;
