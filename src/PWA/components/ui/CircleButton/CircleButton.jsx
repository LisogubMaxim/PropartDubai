import PropTypes from 'prop-types';

import heartIcon from '../../../assets/images/heart-icon.svg';
import heartFill from '../../../assets/images/heart-fill.svg';
import closeIcon from '../../../assets/images/multiplyWhite.svg';
import trashIcon from '../../../assets/images/trash.svg';
import shareIcon from '../../../assets/images/share.svg';
import { HiOutlineArrowLeft } from 'react-icons/hi';

import s from './circle-button.module.scss';

const CircleButton = ({
  type = 'like',
  isLiked = false,
  styles = { top: '12px', right: '12px' },
  onClick = () => {},
}) => {
  return (
    <button className={s.btn} onClick={onClick} style={styles}>
      {type === 'like' ? (
        isLiked ? (
          <img src={heartFill} alt="Heart fill" />
        ) : (
          <img src={heartIcon} alt="Heart" />
        )
      ) : null}
      {type === 'goBack' && <HiOutlineArrowLeft size="24px" color="white" />}
      {type === 'close' && <img src={closeIcon} alt="Close" />}
      {type === 'remove' && <img src={trashIcon} alt="Remove" />}
      {type === 'share' && <img src={shareIcon} alt="Share" />}
    </button>
  );
};

CircleButton.propTypes = {
  type: PropTypes.oneOf(['like', 'goBack', 'close', 'remove', 'share']),
  isLiked: PropTypes.bool,
  styles: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  onClick: PropTypes.func,
};

export default CircleButton;
