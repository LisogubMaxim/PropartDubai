import React from 'react';

import AccordionMenu from './AccordionMenu';
import GetConsultation from '../ui/GetConsultationForm/GetConsultation';

import styles from './accordion.module.scss';

const Accordion = ({ title, subtitle, data }) => {
  return (
    <div>
      <p className={styles.subtitle}>{subtitle}</p>
      <AccordionMenu data={data} />
      <p className={styles.text}>
        Choosing between a Freezone and Mainland depends on various factors. We
        can advice you the best variant.
      </p>
      <GetConsultation />
    </div>
  );
};

export default Accordion;
