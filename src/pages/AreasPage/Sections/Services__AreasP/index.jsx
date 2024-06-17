import React from "react";
import { useTranslation } from "react-i18next";
import "./services__AreasP.scss";

const Index = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('AreasPage__Services__AreasP__Title1'),
      description: t('AreasPage__Services__AreasP__Descr1'),
      imageUrl: "/assets/AreasPage/image_1.jpg",
    },
    {
      title: t('AreasPage__Services__AreasP__Title2'),
      description: t('AreasPage__Services__AreasP__Descr2'),
      imageUrl: "/assets/AreasPage/image_2.jpg",
    },
    {
      title: t('AreasPage__Services__AreasP__Title3'),
      description: t('AreasPage__Services__AreasP__Descr3'),
      imageUrl: "/assets/AreasPage/image_3.jpg",
    },
  ];

  return (
    <section className="services__AreasP">
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="text-container">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <img src={service.imageUrl} alt={service.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Index;
