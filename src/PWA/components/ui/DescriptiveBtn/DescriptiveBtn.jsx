import React from 'react';
import PropTypes from 'prop-types';
import styles from './descriptivebtn.module.scss';

const DescriptiveBtn = ({
  spanText,
  spanColor,
  text,
  term,
  timeFrame,
  onClick,
  bgColor,
  textColor,
  btnWidth,
  bottomFSize,
  fSize,
  mBottom,
  termCol,
}) => {
  const wdth = btnWidth ? btnWidth : '171px';
  const mrgnBottom = mBottom ? mBottom : '0px';
  const fontSz = fSize ? fSize : '24px';
  const btmFontSz = bottomFSize ? bottomFSize : '14px';

  const bg = bgColor ? bgColor : 'white';
  const spnCol = spanColor ? spanColor : 'white';
  const txtCol = textColor ? textColor : ' white';
  const termSpnCol = termCol ? termCol : 'white';

  return (
    <div
      onClick={onClick}
      className={styles.buttonContainer}
      style={{
        backgroundColor: bg,
        width: wdth,
        marginBottom: mrgnBottom,
      }}>
      <div className={styles.upperContent}>
        <div className={`${styles.spanText} ${styles.borderSt}`}>
          <span style={{ color: spnCol }}>{spanText}</span>
        </div>
        {text && <p style={{ color: txtCol }}>{text}</p>}
      </div>
      <div className={styles.bottomContent}>
        <span
          style={{
            color: termSpnCol,
            fontSize: fontSz,
          }}>
          {term}
        </span>
        <span
          style={{
            color: termSpnCol,
            fontSize: btmFontSz,
          }}>
          {timeFrame}
        </span>
      </div>
    </div>
  );
};

DescriptiveBtn.propTypes = {
  spanText: PropTypes.string,
  spanColor: PropTypes.string,
  text: PropTypes.string,
  term: PropTypes.string.isRequired,
  timeFrame: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  btnWidth: PropTypes.string,
  fSize: PropTypes.string,
  bottomFSize: PropTypes.string,
  mBottom: PropTypes.string,
  termCol: PropTypes.string,
  propStyles: PropTypes.object,
};

export default DescriptiveBtn;

/*
6F707A -- grey - span
333863 -- system blue  - term // timeFrame//background

 */
