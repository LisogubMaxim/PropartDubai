import React from "react";

import style from "./informationPoints.module.scss";

export const InformationPoints = ({ title, points }) => {
    return (
        <div className={style.InformationPoints}>
            <div className={style.title}>{title}</div>
            <div className={style.points}>
                {points.map((value, index) => {
                    return (
                        <div className={style.point} key={index}>
                            {value}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
