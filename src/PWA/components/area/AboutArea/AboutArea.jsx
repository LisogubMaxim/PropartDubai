import React, { useEffect, useState } from "react";
import { useGetProjectsQuery } from "../../../../store/query/projectsAPI/projectsAPI";

import GetConsultation from "../../ui/GetConsultationForm/GetConsultation";
import CategorySwitcher from "../../ui/CategorySwitcher/CategorySwitcher";
import RecommendationsSlider from "../../ui/Slider/RecommendationsSlider";
import CircleButton from "../../ui/CircleButton/CircleButton";
import { Link, useNavigate } from "react-router-dom";
import MenuBar from "../../ui/MenuBar/MenuBar";
import { useTranslation } from "react-i18next";
import CurrencyLogo from "../../../../components/UI/CurrencyLogo";
import { useCurrency } from "../../../../components/CurrencyProvider";
import { areasData } from "../../../data/areasData";
import ReadMore from "../../ui/ReadMore/ReadMore";

import style from "./aboutArea.module.scss";

const AboutArea = ({ areaTitle }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { selectedCurrency, convertPrice } = useCurrency();

  const { data: projectsData } = useGetProjectsQuery("");

  const [area, setArea] = useState(null);
  const [projectsInCurrentArea, setProjectsInCurrentArea] = useState(null);

  useEffect(() => {
    if (projectsData && area) {
      const projects = projectsData.filter((item) =>
        item.generalInfo.location?.includes(area.titleSlider)
      );

      setProjectsInCurrentArea(projects);
    }
  }, [projectsData, area]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setArea(areasData.find((area) => area.titleSlider === areaTitle));
  }, [areaTitle]);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/phone');
    }
  }

  return (
    <div className={style.aboutArea}>
      {area ? (
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
                src={area.bgHeader}
                className={style.img}
                alt={area.title}
              />
            </div>
            <div className={style.title}>
              <div className={style.name}>{area.title}</div>
              <div className={style.price}>
                {t("r_pay5")} <CurrencyLogo currency={selectedCurrency} />{" "}
                {convertPrice(area.priceFrom)}
              </div>
            </div>
          </div>
          <div className="main-container">
            <div className={style.descripton}>
              <div className={style.title}>{t("name193")}</div>
              <div className={style.text}>
                <ReadMore text={area.paragraphsTitle[0]} maxLength={200} />
              </div>
            </div>
            <div className={style.about}>
              <CategorySwitcher
                data={[
                  {
                    category: t("areasPages__Header__Title1"),
                    text: area.paragraphsInfrastructure[0],
                  },
                  {
                    category: t("areasPages__Header__Title2"),
                    text: area.paragraphsEntertainment[0],
                  },
                  {
                    category: t("areasPages__Header__Title3"),
                    text: area.paragraphsEconomic[0],
                  },
                ]}
              />
            </div>
            <div className={style.property}>
              <div className={style.title}>
                <div className={style.name}>
                  Property in {area.titleSlider}
                </div>
                <Link
                  to={`/phone/area-properties/${areaTitle}`}
                  className={style.more}
                >
                  More
                </Link>
              </div>
              <RecommendationsSlider
                data={projectsInCurrentArea?.slice(0, 5)}
              />
            </div>
            <div className={style.help}>
              <GetConsultation />
            </div>
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

export default AboutArea;
