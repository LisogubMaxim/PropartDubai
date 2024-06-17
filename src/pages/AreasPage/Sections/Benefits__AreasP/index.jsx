import React from "react";
import { useTranslation } from "react-i18next";
import "./benefits__AreasP.scss";

const index = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      title: t("AreasPage__Benefits__AreasP__Title1"),
      text: t("AreasPage__Benefits__AreasP__Descr1"),
    },
    {
      title: t("AreasPage__Benefits__AreasP__Title2"),
      text: t("AreasPage__Benefits__AreasP__Descr2"),
    },
    {
      title: t("AreasPage__Benefits__AreasP__Title3"),
      text: t("AreasPage__Benefits__AreasP__Descr3"),
    },
    {
      title: t("AreasPage__Benefits__AreasP__Title4"),
      text: t("AreasPage__Benefits__AreasP__Descr4"),
    },
  ];

  const BenefitsGrid = ({ benefits }) => {
    return benefits.map((item, index) => (
      <div key={index} className="benefit-item">
        <h3 className="title">{item.title}</h3>
        <p className="text">{item.text}</p>
      </div>
    ));
  };

  return (
    <section className="benefits__AreasP">
      <BenefitsGrid benefits={benefits} />
    </section>
  );
};

export default index;
