import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import "./header__AreaP.scss";

const Index = ({ data }) => {
  const [activeBtn, setActiveBtn] = useState("infrastructureSection");
  const { t } = useTranslation();

  const handleSetActiveBtn = (sectionId) => {
    setActiveBtn(sectionId);
  };

  return (
    <div
      className="areaHeader"
      style={{
        backgroundImage: `linear-gradient(66.77deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.453615) 30.99%, rgba(0, 0, 0, 0) 57.93%),
        linear-gradient(284.4deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.453615) 19.37%, rgba(0, 0, 0, 0) 36.21%),
        linear-gradient(168.3deg, rgba(0, 0, 0, 0.65) -3.63%, rgba(0, 0, 0, 0) 31.1%),
        linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        url(${data.bgHeader})`,
      }}
    >
      <div className="container">
        <h1>{data.title}</h1>
        <section className="areaHeader_header-info">
          {data.paragraphsTitle.map((e, index) => (
            <p key={index}>{e}</p>
          ))}
        </section>

        <div className="areaHeader_navigation">
          <Link
            className={`navigationButton ${
              activeBtn === "infrastructureSection" && "active"
            }`}
            to="infrastructureSection"
            smooth={true}
            duration={500}
            onClick={() => handleSetActiveBtn("infrastructureSection")}
          >
            {t("areasPages__Header__Title1")}
          </Link>
          <Link
            className={`navigationButton ${
              activeBtn === "entertainmentSection" && "active"
            }`}
            to="entertainmentSection"
            smooth={true}
            duration={500}
            onClick={() => handleSetActiveBtn("entertainmentSection")}
          >
            {t("areasPages__Header__Title2")}
          </Link>
          <Link
            className={`navigationButton ${
              activeBtn === "economicSection" && "active"
            }`}
            to="economicSection"
            smooth={true}
            duration={500}
            onClick={() => handleSetActiveBtn("economicSection")}
          >
            {t("areasPages__Header__Title3")}
          </Link>
          <Link
            className={`navigationButton ${
              activeBtn === "propertySection" && "active"
            }`}
            to="propertySection"
            smooth={true}
            duration={500}
            onClick={() => handleSetActiveBtn("propertySection")}
          >
            {t("areasPages__Header__Title4")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
