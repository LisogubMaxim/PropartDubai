import VisaHeader from '../../../ui/VisaHeader/VisaHeader';
import DescriptiveBtn from '../../../ui/DescriptiveBtn/DescriptiveBtn';
import { InformationPoints } from '../../../ui/InformationPoints/InformationPoints';
import Slider from '../../../ui/Slider/Slider';

import {
  GoldenVisaData,
  GoldenVisaRequirements,
  goldenVisaPros,
} from '../../../../data/data';

import styles from './goldenVisa.module.scss';

const GoldenVisa = ({ handleClose }) => {
  return (
    <div className="modal-window">
      <VisaHeader title="Golden visa" handleClose={handleClose} />
      <div className={`main-container ${styles.goldenVisa}`}>
        <p className={styles.subtitle}>
          Applying for an employee visa through hiring and drawing up an
          employment contract.
        </p>
        <div className={styles.descriptiveButtons}>
          {GoldenVisaData.map((btn, idx) =>
            btn.isChecked ? (
              <DescriptiveBtn
                key={idx}
                spanText={btn.name}
                term={btn.term}
                timeFrame={btn.termFrame}
                bgColor="#333863"
                fSize="14px"
                bottomFSize="24px"
              />
            ) : (
              <DescriptiveBtn
                key={idx}
                spanText={btn.name}
                term={btn.term}
                timeFrame={btn.termFrame}
                spanColor="#6f707a"
                termCol="#333863"
                textColor="#000"
              />
            )
          )}
        </div>
        <div className={styles.requirements}>
          <InformationPoints
            title="Requirements"
            points={GoldenVisaRequirements}
          />
        </div>
        <h4 className={styles.secondTitle}>Pros</h4>
        <Slider data={goldenVisaPros} height="68px" />
      </div>
    </div>
  );
};

export default GoldenVisa;
