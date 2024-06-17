import React, { useState } from "react";
import { t } from "i18next";
import CurrencyLogo from "../../../../../components/UI/CurrencyLogo";
import { useCurrency } from "../../../../../components/CurrencyProvider";
import CircleButton from "../../CircleButton/CircleButton";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSavedProjects } from "../../../../hooks/useSavedProjects";
import { getPresentationalImgs } from "../../../../utils/getProjectImgs";

import styles from "./imageCard.module.scss";

const ImageCard = ({
  data,
  height = "284px",
  likeBtn = false,
  closeBtn = false,
  likeBtnStyle,
  onClose = () => {},
}) => {
  const [savedProjects, setSavedProjects] = useSavedProjects();
  const { selectedCurrency, convertPrice } = useCurrency();
  const [isImgLoading, setIsImgLoading] = useState(true);

  const url = "/phone/project/" + data._id;

  const presentationalImgs = getPresentationalImgs(data?.generalInfo?.images);

  return (
    <div className={styles.image_content} style={{ height }}>
      {likeBtn && (
        <CircleButton
          isLiked={savedProjects.includes(data._id)}
          onClick={() => setSavedProjects(data._id)}
          styles={likeBtnStyle}
        />
      )}
      {closeBtn && <CircleButton type="close" onClick={onClose} />}
      <Link to={url}>
        <div className="darker-img"></div>
        {isImgLoading && <div className="skeleton-loader"></div>}
        {presentationalImgs?.length ? (
          <img
            src={getPresentationalImgs(data.generalInfo.images)[0]}
            className={styles.img}
            onLoad={() => setIsImgLoading(false)}
            alt={data.generalInfo.name}
          />
        ) : (
          <div className="loaderProjects__wrapper mapProject">
            <span className="loaderProjects"></span>
          </div>
        )}
        <div className={styles.image_info}>
          <h3>{data.generalInfo.name}</h3>
          <span>
            {t("r_pay5")} <CurrencyLogo currency={selectedCurrency} />{" "}
            {convertPrice(data.generalInfo.priceFrom)}
          </span>
        </div>
      </Link>
    </div>
  );
};

ImageCard.propTypes = {
  data: PropTypes.object.isRequired,
  likeBtn: PropTypes.bool,
  closeBtn: PropTypes.bool,
  likeBtnStyle: PropTypes.object,
  onClose: PropTypes.func,
};

export default ImageCard;
