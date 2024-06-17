import React, { useEffect, useState } from "react";
import { t } from "i18next";
import { Link, useNavigate } from "react-router-dom";

import CurrencyLogo from "../../../../components/UI/CurrencyLogo";
import { useCurrency } from "../../../../components/CurrencyProvider";
import GetConsultation from "../../ui/GetConsultationForm/GetConsultation";
import CategorySwitcher from "../../ui/CategorySwitcher/CategorySwitcher";
import RecommendationsSlider from "../../ui/Slider/RecommendationsSlider";
import MenuBar from "../../ui/MenuBar/MenuBar";
import { developersData } from "../../../data/developersData";
import CircleButton from "../../ui/CircleButton/CircleButton";
import ReadMore from "../../ui/ReadMore/ReadMore";

import style from "./aboutDeveloper.module.scss";

const AboutDeveloper = ({ developerName }) => {
  const navigate = useNavigate();
  const { selectedCurrency, convertPrice } = useCurrency();
  const [developer, setDeveloper] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setDeveloper(developersData.find((dev) => dev.value === developerName));
  }, [developerName]);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/phone');
    }
  }

  return (
    <div className={style.aboutArea}>
      {developer ? (
        <>
          <div className={style.header}>
            <CircleButton
              type="goBack"
              styles={{ top: "20px", left: "20px" }}
              onClick={handleGoBack}
            />
            <div className={style.imgContainer}>
              <div className="darker-img"></div>
              <img
                className={style.img}
                src={developer.header_photo_src}
                alt={developer.title}
              />
            </div>
            <div className={style.title}>
              <p className={style.name}>{developer.title}</p>
              <p className={style.text}>
                Developments: {developer.projects_amount}
              </p>
              <p className={style.text}>
                {t("r_pay5")} <CurrencyLogo currency={selectedCurrency} />{" "}
                {convertPrice(
                  parseInt(developer.projects_price_from.split(",").join(""))
                )}
              </p>
            </div>
          </div>

          <div className="main-container">
            <div className={style.descripton}>
              <div className={style.title}>{t("name193")}</div>
              <div className={style.text}>
                <ReadMore
                  text={developer.about_the_company ? developer.about_the_company[0] : "No description"}
                  maxLength={200}
                />
              </div>
            </div>

            <div className={style.about}>
              {developer.about_the_company?.length > 2 && (
                <CategorySwitcher
                  data={[
                    {
                      category: "Market experience",
                      text: developer.about_the_company[1],
                    },
                    {
                      category: "Company`s goal",
                      text: developer.about_the_company[2],
                    },
                  ]}
                />
              )}
            </div>

            <div className={style.property}>
              <div className={style.title}>
                <div className={style.name}>Property by {developer.title}</div>
                <Link
                  to={`/phone/developer-properties/${developer.value}`}
                  className={style.more}
                >
                  More
                </Link>
              </div>

              <RecommendationsSlider
                data={developer?.areas_info?.slice(0, 5)}
                dataType="areas"
              />
            </div>

            <GetConsultation />
            <MenuBar />
          </div>
        </>
      ) : (
        <div className="loaderProjects__wrapper mapProject">
          <span className="loaderProjects"></span>
        </div>
      )}
    </div>
  );
};

export default AboutDeveloper;
