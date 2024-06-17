import style from './logo.module.scss';
import svgLogo from '../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <div className={style.logo}>
      <Link to="/phone">
        <img src={svgLogo} alt="svgLogo" />
      </Link>
    </div>
  );
};
