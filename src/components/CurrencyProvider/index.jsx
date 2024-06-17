import React, { createContext, useContext, useState } from "react";

const CurrencyContext = createContext();

export const useCurrency = () => {
  return useContext(CurrencyContext);
};

export const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const changeCurrency = (currency) => {
    setSelectedCurrency(currency);
  };

  const convertPrice = (priceUSD) => {
    const exchangeRates = {
      USD: 1,
      EUR: 0.92,
      AED: 3.67,
    };

    const exchangeRate = exchangeRates[selectedCurrency];
    const convertedPrice = priceUSD * exchangeRate;

    return convertedPrice
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      .replace(/\.\d{2}$/, "");
  };

  return (
    <CurrencyContext.Provider
      value={{ selectedCurrency, changeCurrency, convertPrice }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
