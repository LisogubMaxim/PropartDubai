import React, { useRef } from 'react';

import plusSvg from '../../assets/images/circlePlus.svg';
import exitSvg from '../../assets/images/exit.svg';

import styles from './accordion.module.scss';

const AccordionItem = ({ title, subtitle, img, onClick, isOpen }) => {
  const itemRef = useRef(null);

  return (
    <div className={`${styles.accordion} ${isOpen && styles.active}`}>
      <div className={styles.accordionHeader}>
        <div className={styles.headerBlock}>
          <img src={img} alt="Service icon" />
          <h2 className={styles.headerTitle}>{title}</h2>
        </div>
        <img
          src={isOpen ? exitSvg : plusSvg}
          alt={isOpen ? 'exit icon' : 'plus icon'}
          onClick={() => onClick()}
        />
      </div>
      <div
        className={styles.accordionCollapse}
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: '0px' }
        }>
        <div ref={itemRef} className={styles.bodyTitle}>
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
