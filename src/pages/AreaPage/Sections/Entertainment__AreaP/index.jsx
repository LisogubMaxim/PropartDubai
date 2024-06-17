import React from "react";

import "./entertainment__AreaP.scss";
import WidthContainer from "../../../../components/UI/WidthContainer";
import { useTranslation } from "react-i18next";

const index = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section className="entertainment__AreaP">
      <div className="entertainment__AreaP__wrapper">
        <div className="entertainment__AreaP__photo">
          <div className="overlay"></div>
          <img
            src={data.entertainmentBg}
            alt="Entertainment"
            width={1440}
            height={957}
          />
          <div className="entertainment__AreaP__info" id="entertainmentSection">
            <h2>{t("areasPages__Header__Title7")}</h2>
            {data.paragraphsEntertainment.map((e) => (
              <p>{e}</p>
            ))}
            <div className="entertainment__AreaP__subsection">
              {data.paragraphsEntertainmentList && (
                <ul>
                  {data.paragraphsEntertainmentList.map((e) => (
                    <li>
                      <p>{e}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <WidthContainer>
          <div className="entertainment__AreaP__subsection">
            {data.paragraphsEntertainmentNext.map((e) => (
              <p>{e}</p>
            ))}
            {data.paragraphsEntertainmentNextPoints && (
              <ul>
                {data.paragraphsEntertainmentNextPoints.map((e) => (
                  <li>
                    <p>{e}</p>
                  </li>
                ))}
              </ul>
            )}
            {data.paragraphsEntertainmentNextPointsNext && (
              <ul>
                {data.paragraphsEntertainmentNextPointsNext.map((e) => (
                  <p>{e}</p>
                ))}
              </ul>
            )}
          </div>
        </WidthContainer>
      </div>
    </section>
  );
};

export default index;
