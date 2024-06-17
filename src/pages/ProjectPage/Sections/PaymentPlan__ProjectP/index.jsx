import React from "react";
import "./paymentPlan__ProjectP.scss";
import { useTranslation } from "react-i18next";

export default function index({ setPopupPaymentsPlans }) {
    const { t } = useTranslation();

    return (
        <div className="paymentBtn" onClick={() => setPopupPaymentsPlans(true)}>
            <span>{t("projectPage__paymentBtn")}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <g opacity="0.1">
                    <path
                        d="M19.5 0.75H4.5C3.675 0.75 3 1.425 3 2.25V21.75C3 22.575 3.675 23.25 4.5 23.25H19.5C20.325 23.25 21 22.575 21 21.75V2.25C21 1.425 20.325 0.75 19.5 0.75ZM7.5 17.25C7.086 17.25 6.75 16.914 6.75 16.5C6.75 16.086 7.086 15.75 7.5 15.75C7.914 15.75 8.25 16.086 8.25 16.5C8.25 16.914 7.914 17.25 7.5 17.25ZM7.5 14.25C7.086 14.25 6.75 13.914 6.75 13.5C6.75 13.086 7.086 12.75 7.5 12.75C7.914 12.75 8.25 13.086 8.25 13.5C8.25 13.914 7.914 14.25 7.5 14.25ZM7.5 11.25C7.086 11.25 6.75 10.914 6.75 10.5C6.75 10.086 7.086 9.75 7.5 9.75C7.914 9.75 8.25 10.086 8.25 10.5C8.25 10.914 7.914 11.25 7.5 11.25ZM7.5 8.25C7.086 8.25 6.75 7.914 6.75 7.5C6.75 7.086 7.086 6.75 7.5 6.75C7.914 6.75 8.25 7.086 8.25 7.5C8.25 7.914 7.914 8.25 7.5 8.25ZM16.5 17.25H10.5C10.086 17.25 9.75 16.914 9.75 16.5C9.75 16.086 10.086 15.75 10.5 15.75H16.5C16.914 15.75 17.25 16.086 17.25 16.5C17.25 16.914 16.914 17.25 16.5 17.25ZM16.5 14.25H10.5C10.086 14.25 9.75 13.914 9.75 13.5C9.75 13.086 10.086 12.75 10.5 12.75H16.5C16.914 12.75 17.25 13.086 17.25 13.5C17.25 13.914 16.914 14.25 16.5 14.25ZM16.5 11.25H10.5C10.086 11.25 9.75 10.914 9.75 10.5C9.75 10.086 10.086 9.75 10.5 9.75H16.5C16.914 9.75 17.25 10.086 17.25 10.5C17.25 10.914 16.914 11.25 16.5 11.25ZM16.5 8.25H10.5C10.086 8.25 9.75 7.914 9.75 7.5C9.75 7.086 10.086 6.75 10.5 6.75H16.5C16.914 6.75 17.25 7.086 17.25 7.5C17.25 7.914 16.914 8.25 16.5 8.25Z"
                        fill="#111918"
                    />
                </g>
            </svg>
        </div>
    );
}
