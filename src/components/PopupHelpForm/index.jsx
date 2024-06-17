import { useTranslation } from "react-i18next";
import BlockContainer from "../../components/UI/BlockContainer";
import Button from "../../components/UI/Button";
import Popup from "../../components/UI/Popup";
import "./popup__MarketP.scss";
import { useEffect, useRef } from "react";

export default function Popup__MarketP({
    handler,
    isVisible,
    formData,
    setFormData,
    sendData,
    loading,
}) {
    const { t } = useTranslation();
    const contentRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                contentRef.current &&
                !contentRef.current.contains(event.target)
            ) {
                handler(false);
            }
        };

        if (isVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isVisible, handler]);

    return (
        <div className="helpFormModal">
            <Popup isVisible={isVisible}>
                {loading && <span className="loader"></span>}
                <div className="helpFormModal__content" ref={contentRef}>
                    <div className="helpFormModal__content-block">
                        <img
                            src="/assets/components/HelpForm/google.svg"
                            alt="Google img"
                            className="helpFormModal__content-imgGoogle"
                            width={51}
                            height={51}
                        />
                        <div className="helpFormModal__content-texts">
                            <h3 className="helpFormModal__content-title">
                                {t("HelpForm__ModalTitle")}
                            </h3>
                            <p className="helpFormModal__content-descr">
                                {t("HelpForm__ModalDescr")}
                            </p>
                        </div>
                    </div>
                    <div className="helpFormModal__content-block">
                        <div className="helpFormModal__content-closseWrapper">
                            <Button handler={() => handler(false)}>
                                <img
                                    src="/assets/components/HelpForm/close.svg"
                                    alt="close image"
                                    className="helpFormModal__content-close"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                        </div>
                        <div className="helpFormModal__content-inputs">
                            <div className="helpForm__form-inputs">
                                <input
                                    type="text"
                                    name="name"
                                    className="helpForm__form-input"
                                    placeholder={t("HelpForm__InputName")}
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                />
                                <img
                                    src="/assets//MainPage/person.svg"
                                    alt="Form input image"
                                />
                            </div>
                            <div></div>
                            <div className="helpForm__form-inputs">
                                <input
                                    type="text"
                                    name="email"
                                    className="helpForm__form-input"
                                    placeholder={t("HelpForm__Mail")}
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                />
                                <img
                                    src="/assets/components/HelpForm/mail.svg"
                                    alt="Form input image"
                                />
                            </div>
                        </div>
                        <div className="helpFormModal__content-buttons">
                            <Button
                                className="button--darkBlue"
                                handler={() => sendData()}
                            >
                                {t("HelpForm__Sub")}
                            </Button>
                            <span className="helpFormModal__content-btnSubText">
                                {t("HelpForm__SubText")}
                            </span>
                        </div>
                        <div>
                            <button className="helpFormModal__content-noInteres">
                                {t("HelpForm__Interested")}
                            </button>
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    );
}
