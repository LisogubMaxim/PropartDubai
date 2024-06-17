import React from "react";
import companiesInfo from "../../companiesInfo.json";
import { Link } from "react-router-dom";
import "./company.scss";

const index = ({ start, end }) => {
  return (
    <section className="companyPage">
      <ul className="companyPage__list">
        {companiesInfo.slice(start, end).map((e) => (
          <Link to={`/developer/${e.value}`}>
            <li key={index} className="companyPage__item">
              <img src={e.logo_src} alt="Logo company" />
              <span className="companyPage__item-title">{e.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default index;
