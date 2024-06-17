import React from "react";
import "./features__AreasP.scss";
import { useTranslation } from "react-i18next";

const index = () => {
  const featuresA = [
    "UAE investment assistance",
    "Legal services",
    "Business concierge services",
    "Company registration in the UAE",
    "Real estate management",
    "Opening bank account in the UAE jurisdiction",
    "Organization of business events",
  ];

  const featuresB = [
    "Private jet rentals in the UAE",
    "Lifestyle manager",
    "Children’s concierge & care:",
    "Tourism & recreation",
    "Shopping assistance",
    "Rental accommodation:villas and apartments",
    "Holiday homes rental",
  ];

  const featuresC = [
    "Legal and lawyer assistance",
    "Personal driver",
    "Health and family services",
    "Real estate acquisition services",
    "Lifestyle manager 24/7",
    "Tours and entertainment around the world",
    "Holiday homes rental",
  ];

  const { t } = useTranslation();

  for (let i = 0; i < featuresA.length; i++) {
    featuresA[i] = t(`AreasPage__Features__AreasP__Title1.${i + 1}`);
    featuresB[i] = t(`AreasPage__Features__AreasP__Title2.${i + 1}`);
    featuresC[i] = t(`AreasPage__Features__AreasP__Title3.${i + 1}`);
  }

  const FeaturesBox = ({ features }) => {
    return (
      <>
        <div className="text-grid">
          {features.map((text, index) => (
            <div
              key={index}
              className={`text-item ${index === 3 ? "double-height" : ""} ${
                [1, 3, features.length - 1].includes(index)
                  ? "centered-text"
                  : ""
              }`}
            >
              <span> {text}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <section className="features__AreasP">
      <div className="featuresContainer">
        <FeaturesBox features={featuresA} />
        <FeaturesBox features={featuresB} />
        <FeaturesBox features={featuresC} />
      </div>
    </section>
  );
};

export default index;
