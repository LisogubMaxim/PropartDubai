import React, { useState } from "react";
import style from "./selectionButton.module.scss";
import chekIcon from "../../assets/images/check.svg";

export const SelectionButton = ({ text, onClick }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
        onClick(text, !isSelected);
    };

    const buttonStyle = {
        color: isSelected ? "#ffffff" : "#6F707A",
        backgroundColor: isSelected ? "#333863" : "",
    };

    return (
        <div className={style.button} style={buttonStyle} onClick={handleClick}>
            <span>{text}</span>
            <img src={chekIcon} alt="chekIcon" />
        </div>
    );
};
