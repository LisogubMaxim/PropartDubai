import React, { useRef, useState, useEffect } from "react";
import Button from "../Button";
import { useCurrency } from "../../CurrencyProvider";

const SelectCurrency = ({ img, width, height, children }) => {
  const { selectedCurrency, changeCurrency } = useCurrency();
  const [showSelect, setShowSelect] = useState(false);
  const currencies = ["USD", "EUR", "AED"];

  const selectRef = useRef();

  const handleCurrencySelect = (currency) => {
    changeCurrency(currency);
    setShowSelect(false);
  };

  const renderDropdownContent = () => {
    const dropdownCurrencies = currencies.filter(
      (currency) => currency !== selectedCurrency
    );

    return dropdownCurrencies.map((currency) => (
      <Button
        key={currency}
        className="header__wrap-btnDropSelect"
        handler={() => handleCurrencySelect(currency)}
      >
        {currency}
      </Button>
    ));
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setShowSelect(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header__wrap-select currency" ref={selectRef}>
      <div className="header__wrap-secondImg currency">
      {children}
        <Button
          handler={() => setShowSelect(!showSelect)}
          className="header__wrap-btnSelect"
        >
          {selectedCurrency}
          <img
            src={img}
            alt="img arrow"
            width={width}
            height={height}
            className={`header__wrap-imgSelect ${showSelect ? "active" : ""}`}
          />
        </Button>
      </div>
      <div
        className={`header__wrap-dropContent currency ${
          showSelect ? "active" : ""
        }`}
      >
        {renderDropdownContent()}
      </div>
    </div>
  );
};

export default SelectCurrency;
