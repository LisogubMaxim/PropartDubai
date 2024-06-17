import React, { useState } from "react";

import style from "./categorySwitcher.module.scss";

const CategorySwitcher = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(data[0].category);
  const [showFullText, setShowFullText] = useState(false);

  const handleClickCategory = (category) => {
    setActiveCategory(category);
    setShowFullText(false);
  };

  return (
    <div className={style.categorySwitcher}>
      <div className={style.category}>
        {data.map((value, index) => {
          return (
            <div
              key={index}
              className={
                activeCategory === value.category
                  ? style.active
                  : style.notActive
              }
              onClick={() => handleClickCategory(value.category)}
            >
              {value.category}
            </div>
          );
        })}
      </div>
      <div className={`${style.text} ${showFullText ? "" : style.hide}`}>
        {data.map((value, index) => (
          <p
            key={index}
            style={{
              display: activeCategory === value.category ? "block" : "none",
            }}
          >
            {showFullText
              ? `${value.text}`
              : `${value.text.substring(0, 145)}... `}
            {value.text.length > 145 && (
              <span
                className={style.show}
                onClick={() => setShowFullText(!showFullText)}
              >
                {showFullText ? "Hide" : "Read more"}
              </span>
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CategorySwitcher;
