import React from "react";
import "./corporateAccount.scss";

const index = ({ title }) => {
  return (
    <section className="corporateAccount">
      <h3 className="corporateAccount__title">{title}</h3>
      {/* <div className="corporateAccount__buttons">
        <button>
          <img
            src="/assets/components/CorporateAccount/arrowLeft.svg"
            alt="Arrow left"
            width={24}
            height={24}
          />
        </button>
        <button>
          <img
            src="/assets/components/CorporateAccount/arrowRight.svg"
            alt="Arrow left"
            width={24}
            height={24}
          />
        </button>
      </div> */}
    </section>
  );
};

export default index;
