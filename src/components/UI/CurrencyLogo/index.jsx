import React from "react";

const CurrencyLogo = ({ currency }) => {
  let iconText;

  switch (currency) {
    case "USD":
      iconText = "$";
      break;
    case "EUR":
      iconText = "€";
      break;
    case "AED":
      iconText = "د.إ";
      break;
    default:
      iconText = "";
      break;
  }

  return <>{iconText}</>;
};

export default CurrencyLogo;
