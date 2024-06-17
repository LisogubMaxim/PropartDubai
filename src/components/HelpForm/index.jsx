import React, { useState } from "react";
import Button from "../UI/Button";
import axios from "axios";
import { useTranslation } from "react-i18next";
import contries from "./contries";
import PopupHelpForm from "../PopupHelpForm";
import "../../pages/MainPage/Sections/Questions__MainP/questions__MainP.scss";
import "./helpForm.scss";

const index = ({ floorPopupActive }) => {
  const [popupShow, setPopupShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    additional: "missing",
  });
  const [showDropDown, setShowDropDown] = useState(false);
  const [countryInfo, setCountryInfo] = useState({
    number: "+971",
    emoj: "🇦🇪",
  });
  const { t } = useTranslation();

  const [searchCountry, setSearchCountry] = useState("");

  async function sendData() {
    setLoading(true);

    let data = JSON.stringify({
      ...formData,
      phone: countryInfo.number + formData.phone,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://contact.propart.ae/append-data",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      await axios.request(config);
      setFormData({
        email: "",
        phone: "",
        name: "",
        additional: "missing",
      });
      setPopupShow(false);
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  }

  return (
    // <div className="helpForm">
    <div className={`helpForm ${floorPopupActive ? "floorPopupActive" : ""}`}>
      <ul className="helpForm__list">
        <li className="helpForm__itemBG">
          <ul className="helpForm__listPoints">
            <li className="helpForm__itemPoints">
              <span>{t("HelpForm__OurQualification")}</span>
            </li>
            <li className="helpForm__itemPoints">
              <p>01. {t("HelpForm__OurQualification__Text1")}</p>
            </li>
            <li className="helpForm__itemPoints">
              <p>02. {t("HelpForm__OurQualification__Text2")}</p>
            </li>
            <li className="helpForm__itemPoints">
              <p>03. {t("HelpForm__OurQualification__Text3")}</p>
            </li>
            <li className="helpForm__itemPoints">
              <p>04. {t("HelpForm__OurQualification__Text4")}</p>
            </li>
            <li className="helpForm__itemPoints">
              <p>05. {t("HelpForm__OurQualification__Text5")}</p>
            </li>
            <li className="helpForm__itemPoints">
              <p>06. {t("HelpForm__OurQualification__Text6")}</p>
            </li>
            <li className="helpForm__itemPoints">
              <p>07. {t("HelpForm__OurQualification__Text7")}</p>
            </li>
          </ul>
        </li>
        <li className="helpForm__item">
          <div className="helpForm__item-wrap">
            <h4>{t("HelpForm__Title")}</h4>
            <p className="helpForm__item-descr">{t("HelpForm__Text")}</p>
            <div className="helpForm__form">
              <div className="helpForm__form-content">
                <div className="helpForm__form-inputs">
                  <input
                    type="text"
                    name="name"
                    className="helpForm__form-input"
                    placeholder={t("HelpForm__InputName")}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <img
                    src="/assets//MainPage/person.svg"
                    alt="Form input image"
                  />
                </div>
                <div className="helpForm__form-inputs">
                  <div className="helpForm__form-phoneList">
                    <span onClick={() => setShowDropDown(!showDropDown)}>
                      {countryInfo.emoj}
                      <img
                        src="/assets/UI/arrowDownGrey.svg"
                        alt="arrowDownGrey"
                        height={20}
                        width={20}
                        style={{
                          transform: `${
                            showDropDown ? "rotate(180deg)" : "rotate(0deg)"
                          }`,
                        }}
                      />
                    </span>
                    <div
                      className={`helpForm__form-phoneDropDown ${
                        showDropDown && "helpForm__form-phoneDropDown--active"
                      }`}
                    >
                      <input
                        type="text"
                        className="helpForm__form-inputDropDown"
                        placeholder={t("HelpForm__InputSearchCountry")}
                        value={searchCountry}
                        onChange={(e) => setSearchCountry(e.target.value)}
                      />
                      <div className="">
                        {contries()
                          .filter((item) =>
                            item.country.includes(searchCountry)
                          )
                          .map((item, index) => (
                            <div
                              className="helpForm__form-phoneDropDownItem"
                              onClick={() => {
                                setCountryInfo({
                                  emoj: item.emoji,
                                  number: item.phone_code,
                                });
                                setSearchCountry("");
                                setShowDropDown(false);
                              }}
                              key={index}
                            >
                              {item.country} ({item.phone_code})
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="helpForm__form-inputBox">
                    {countryInfo.number}
                    <input
                      type="text"
                      name="phone"
                      className="helpForm__form-input"
                      value={formData.phone}
                      minLength={7}
                      maxLength={15}
                      onChange={(e) => {
                        let value = e.target.value;
                        value = value.replace(/\D/g, "");
                        setFormData({ ...formData, phone: value });
                      }}
                    />
                  </div>
                  <img
                    src="/assets/Global/phoneOrange.svg"
                    alt="Form input image"
                  />
                </div>
                <div
                  className="helpForm__form-buttons"
                  onClick={() => setPopupShow(true)}
                >
                  <Button
                    className="button--orange"
                    disabled={formData.name === "" || formData.phone.length < 7}
                  >
                    {t("HelpForm__Btn")}
                    <img
                      src="/assets//MainPage/send.svg"
                      alt="From send"
                      width={24}
                      height={24}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <PopupHelpForm
        handler={setPopupShow}
        isVisible={popupShow}
        formData={formData}
        setFormData={setFormData}
        sendData={sendData}
        loading={loading}
      />
    </div>
  );
};

export default index;
