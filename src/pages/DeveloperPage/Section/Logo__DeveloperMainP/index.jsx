import React from "react";
import "./logo__DeveloperMainP.scss";

const index = ({ item }) => {
  return (
    <section>
      <div
        className="developerMain__logo"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.55) -20%, rgba(0, 0, 0, 0) 100%), 
                    linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 10%), 
                    url("${item.header_photo_src}")`,
        }}
      >
        <h2>{item.title}</h2>
        <div>
          Developments:
          <span>{item.projects_amount}</span>
        </div>
        <div>
          Price from:
          <span>{item.projects_price_from} AED</span>
        </div>
      </div>
    </section>
  );
};

export default index;
