import React from "react";
import { useTranslation } from "react-i18next";
import "./infrastructure__AreaP.scss";

const index = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section id="infrastructureSection" className="infrastructure__AreaP">
      <div className="infrastructure__AreaP__wrapper">
        <div className="infrastructure__AreaP__info">
          <div className="entertainment__AreaP__subsection">
            <h1>{t("areasPages__Header__Title1")}</h1>
            {data.paragraphsInfrastructure.map((e) => (
              <p>{e}</p>
            ))}
            {data.paragraphsInfrastructureList && (
              <ul>
                {data.paragraphsInfrastructureList.map((e) => (
                  <li>
                    <p>{e}</p>
                  </li>
                ))}
              </ul>
            )}
            {data.paragraphsInfrastructureNext &&
              data.paragraphsInfrastructureNext.map((e) => <p>{e}</p>)}
          </div>
          <div className="entertainment__AreaP__subsection">
            <h2>{t("areasPages__Header__Title5")}</h2>
            {data.paragraphsTransportation.map((e) => (
              <p>{e}</p>
            ))}
            {data.paragraphsTransportationList && (
              <ul>
                {data.paragraphsTransportationList.map((e) => (
                  <li>
                    <p>{e}</p>
                  </li>
                ))}
              </ul>
            )}
            {data.paragraphsTransportationNext &&
              data.paragraphsTransportationNext.map((e) => <p>{e}</p>)}
          </div>
          {/* <div>
            <h2>{t("areasPages__Header__Title6")}</h2>
            {data.paragraphsEducation.map((e) => (
              <p>{e}</p>
            ))}
          </div> */}
          <div className="entertainment__AreaP__subsection numbers">
            <h2>{t("areasPages__Header__Title6")}</h2>
            {data.paragraphsEducation.map((e) => (
              <p>{e}</p>
            ))}
            {data.paragraphsEducationList && (
              <ul>
                {data.paragraphsEducationList.map((e) => (
                  <li>
                    <p>{e}</p>
                  </li>
                ))}
              </ul>
            )}
            {data.paragraphsEducationNext &&
              data.paragraphsEducationNext.map((e) => <p>{e}</p>)}
          </div>
        </div>
        <div className="infrastructure__AreaP__photo">
          <div className="overlay"></div>
          <img
            src={data.bgList}
            alt="Infrastructure"
            width={646}
            height={970}
          />
        </div>
      </div>
    </section>
  );
};

export default index;
