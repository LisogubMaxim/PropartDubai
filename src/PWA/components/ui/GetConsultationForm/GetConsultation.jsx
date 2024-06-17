import React, { useState } from "react";
import { t } from "i18next";
import axios from "axios";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createPortal } from "react-dom";

import Input from "../input/input";
import Button from "../Button/Button";
import { validatePhoneNumber } from "../../../utils/validatePhoneNumber";

import s from "./get-help.module.scss";

const GetConsultation = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneError, setIsPhoneError] = useState(false);

  const phoneNumberHandler = (event) => {
    const phoneNumber = event.target.value;

    if (validatePhoneNumber(phoneNumber)) {
      setIsPhoneError(false);
    } else {
      setIsPhoneError(true);
    }

    if (phoneNumber.length === 0) {
      setIsPhoneError(false);
    }

    if (/^\+?\d*$/.test(phoneNumber)) {
      setPhoneNumber(phoneNumber);
    }
  };

  const nameHandler = (event) => {
    const name = event.target.value;

    if (/^[a-zA-Z]*$/.test(name)) {
      setName(name);
    }
  };

  const clearPhoneInput = () => {
    setPhoneNumber("");
    setIsPhoneError(false);
  };

  const clearNameInput = () => {
    setName("");
  };

  async function sendData() {
    setLoading(true);

    let data = JSON.stringify({
      email: "missing",
      name,
      phone: phoneNumber,
      additional: "missing",
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
      setPhoneNumber("");
      setName("");
      toast.success('Success', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (e) {
      toast.error('Failed, try again later', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      throw e;
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {createPortal(
        <ToastContainer style={{ zIndex: 10002 }} />,
        document.body
      )}
      <h2 className={s.getHelpTitle}>{t("HelpForm__Title")}</h2>
      <p className={s.getHelpText}>{t("e_cj_text")}</p>
      {loading ? (
        <div style={{ position: "relative", height: "200px", width: "100%" }}>
          <div className="loaderProjects__wrapper mapProject">
            <span className="loaderProjects"></span>
          </div>
        </div>
      ) : (
        <>
          <Input
            placeholder={t("e_cj_line1")}
            value={name}
            onChange={nameHandler}
            clearInput={clearNameInput}
            marginBottom={8}
          />
          <Input
            placeholder={t("block6_line2")}
            value={phoneNumber}
            onChange={phoneNumberHandler}
            clearInput={clearPhoneInput}
            isError={isPhoneError}
            marginBottom={16}
          />
          <Button
            text={t("HelpForm__Btn")}
            backgroundColor={"#333863"}
            color={"#fff"}
            isDisabled={isPhoneError || !name || !phoneNumber}
            onClick={sendData}
          />
        </>
      )}
    </>
  );
};

export default GetConsultation;
