import React from "react";
import "./questions__MainP.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const index = () => {
  const { t } = useTranslation();

  return (
    <section className="questionsPage">
      <h3>{t("MainPage__Questions__MainP__Title")}</h3>
      <ul className="questionsPage-list">
        <li className="questionsPage-item">
          <span className="questionsPage-item-title">
            {t("MainPage__Questions__MainP__Stability__Title")}
          </span>
          <h5 className="questionsPage-item-descr">
            {t("MainPage__Questions__MainP__Stability__Text")}
          </h5>
        </li>
        <li className="questionsPage-item">
          <span className="questionsPage-item-title">
            {t("MainPage__Questions__MainP__Profitable__Title")}
          </span>
          <h5 className="questionsPage-item-descr">
            {t("MainPage__Questions__MainP__Profitable__Text")}
          </h5>
        </li>
        <li className="questionsPage-item">
          <span className="questionsPage-item-title">
            {t("MainPage__Questions__MainP__Population__Title")}
          </span>
          <h5 className="questionsPage-item-descr">
            {t("MainPage__Questions__MainP__Population__Text")}
          </h5>
        </li>
        <li className="questionsPage-item">
          <span className="questionsPage-item-title">
            {t("MainPage__Questions__MainP__Dynamic__Title")}
          </span>
          <h5 className="questionsPage-item-descr">
            {t("MainPage__Questions__MainP__Dynamic__Text")}
          </h5>
        </li>
        <li className="questionsPage-item">
          <span className="questionsPage-item-title">
            {t("MainPage__Questions__MainP__Property__Title")}
          </span>
          <h5 className="questionsPage-item-descr">
            {t("MainPage__Questions__MainP__Property__Text")}
          </h5>
        </li>
      </ul>
      <ul className="questionsPage-list last">
        <li className="questionsPage-item">
          <span className="questionsPage-item-title">
            {t("MainPage__Questions__MainP__LowAcquisition__Title")}
          </span>
          <h5 className="questionsPage-item-descr">
            {t("MainPage__Questions__MainP__LowAcquisition__Text")}
          </h5>
        </li>
        <li className="questionsPage-item">
          <span className="questionsPage-item-title">
            {t("MainPage__Questions__MainP__NoTaxes__Title")}
          </span>
          <h5 className="questionsPage-item-descr">
            {t("MainPage__Questions__MainP__NoTaxes__Text")}
          </h5>
        </li>
        <li className="questionsPage-item">
          <span className="questionsPage-item-title">
            {t("MainPage__Questions__MainP__TheWorld__Title")}
          </span>
          <h5 className="questionsPage-item-descr">
            {t("MainPage__Questions__MainP__TheWorld__Text")}
          </h5>
        </li>
        <li className="questionsPage-item">
          <span className="questionsPage-item-title">
            {t("MainPage__Questions__MainP__TheCentre__Title")}
          </span>
          <h5 className="questionsPage-item-descr">
            {t("MainPage__Questions__MainP__TheCentre__Text")}
          </h5>
        </li>
      </ul>
      <ul className="questionsPage-listCards">
        <li
          className="questionsPage-itemCards"
          style={{
            backgroundImage: `url("/assets/MainPage/bgAnswerOne.png")`,
          }}
        >
          <div className="questionsPage-itemCards-texts">
            <span className="questionsPage-itemCards-title">
              {t("MainPage__Questions__MainP__Blured__Title1")}
            </span>
            <p className="questionsPage-itemCards-descr">
              {t("MainPage__Questions__MainP__Blured__Text1")}
            </p>
          </div>
        </li>
        <li
          className="questionsPage-itemCards"
          style={{
            backgroundImage: `url("/assets/MainPage/bgAnswerTwo.png")`,
          }}
        >
          <div className="questionsPage-itemCards-texts">
            <span className="questionsPage-itemCards-title">
              {t("MainPage__Questions__MainP__Blured__Title2")}
            </span>
            <p className="questionsPage-itemCards-descr">
              {t("MainPage__Questions__MainP__Blured__Text2")}
            </p>
          </div>
        </li>
        <li
          className="questionsPage-itemCards"
          style={{
            backgroundImage: `url("/assets/MainPage/bgAnswerThree.png")`,
          }}
        >
          <div className="questionsPage-itemCards-texts">
            <span className="questionsPage-itemCards-title">
              {t("MainPage__Questions__MainP__Blured__Title3")}
            </span>
            <p className="questionsPage-itemCards-descr">
              {t("MainPage__Questions__MainP__Blured__Text3")}
            </p>
          </div>
        </li>
      </ul>
      <div className="questionsPage-descr">
        <h4>{t("MainPage__Questions__MainP__Reasons__Title")}</h4>
        <div className="questionsPage-descr-texts">
          <p>{t("MainPage__Questions__MainP__Reasons__Text1")}</p>
          <p>{t("MainPage__Questions__MainP__Reasons__Text2")}</p>
          <p> {t("MainPage__Questions__MainP__Reasons__Text3")}</p>
          <p>{t("MainPage__Questions__MainP__Reasons__Text4")}</p>
        </div>
      </div>
      <ul className="questionsPage__achievementList">
        <Link to="/consulting/localCompany">
          <li className="questionsPage__achievementItem">
            <img
              src="/assets/MainPage/court.svg"
              alt="Achievement image"
              width={48}
              height={48}
            />
            <p>{t("MainPage__Questions__MainP__achievementList1")}</p>
          </li>
        </Link>
        <Link to="/consulting/visa">
          <li className="questionsPage__achievementItem">
            <img
              src="/assets/MainPage/success.svg"
              alt="Achievement image"
              width={48}
              height={48}
            />
            <p>{t("MainPage__Questions__MainP__achievementList2")}</p>
          </li>
        </Link>
        <Link to="/consulting/services">
          <li className="questionsPage__achievementItem">
            <img
              src="/assets/MainPage/covid19.svg"
              alt="Achievement image"
              width={48}
              height={48}
            />
            <p>{t("MainPage__Questions__MainP__achievementList3")}</p>
          </li>
        </Link>
        <Link to="/consulting/localCompany">
          <li className="questionsPage__achievementItem">
            <img
              src="/assets/MainPage/close.svg"
              alt="Achievement image"
              width={48}
              height={48}
            />
            <p>{t("MainPage__Questions__MainP__achievementList5")}</p>
          </li>
        </Link>
        <Link to="/consulting/tm">
          <li className="questionsPage__achievementItem">
            <img
              src="/assets/MainPage/euro.svg"
              alt="Achievement image"
              width={48}
              height={48}
            />
            <p>{t("MainPage__Questions__MainP__achievementList4")}</p>
          </li>
        </Link>
      </ul>
    </section>
  );
};

export default index;
