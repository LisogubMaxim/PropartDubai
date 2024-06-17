// import React, { useEffect, useRef, useState } from "react";
// import { useTranslation } from "react-i18next";
// import PopupFloorPlan from "../../../../components/PopupFloorPlan";
// import { useCurrency } from "../../../../components/CurrencyProvider";
// import CurrencyLogo from "../../../../components/UI/CurrencyLogo";
// import "./floorPlan__ProjectP.scss";

// const index = ({ item, popupShow, setPopupShow }) => {
//     const { t } = useTranslation();
//     const { selectedCurrency, convertPrice } = useCurrency();
//     const [activePlan, setActivePlan] = useState(null);
//     // const [activeFloorPlan, setActiveFloorPlan] = useState("1");

//     const [activeFloorPlan, setActiveFloorPlan] = useState("");

//     useEffect(() => {
//         if (item.floorPlans) {
//             const firstFloorPlanKey = Object.keys(item.floorPlans)[0];
//             setActiveFloorPlan(firstFloorPlanKey);
//         }
//     }, [item.floorPlans]);

//     const handlePopupShow = (plan) => {
//         setActivePlan(plan);
//         setPopupShow(true);
//     };

//     const floorPlanKeys = item.floorPlans ? Object.keys(item.floorPlans) : [];

//     return (
//         <section className="floorPlan">
//             <div className="floorPlan__content">
//                 <div className="floorPlan__floorPlan">
//                     <div className="asfasasfasf"></div>
//                     <div className="floorPlan__floorPlan-head">
//                         <h4 className="floorPlan__floorPlan-title">
//                             {t("projectPage__floorAndPayment")}
//                         </h4>
//                         <ul className="floorPlan__floorPlan-selectList">
//                             {floorPlanKeys.map((key) => (
//                                 <li
//                                     key={key}
//                                     className={`floorPlan__floorPlan-selectItem ${
//                                         activeFloorPlan === key ? "active" : ""
//                                     }`}
//                                     onClick={() => setActiveFloorPlan(key)}
//                                 >
//                                     {key}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                     <span className="floorPlan__floorPlan-click">
//                         {t("projectPage__clickToView")}
//                     </span>
//                     <ul className="floorPlan__floorPlan-floorList">
//                         {item.floorPlans &&
//                             item.floorPlans[activeFloorPlan] &&
//                             item.floorPlans[activeFloorPlan].map(
//                                 (plan, index) => (
//                                     <div key={index}>
//                                         {plan.visible && (
//                                             <li
//                                                 key={index}
//                                                 className="floorPlan__floorPlan-floorItem"
//                                                 onClick={() =>
//                                                     handlePopupShow(plan)
//                                                 }
//                                             >
//                                                 <div className="floorPlan__floorPlan-floorImg">
//                                                     <img
//                                                         src={plan.image}
//                                                         alt="Image floor plan"
//                                                         width={197}
//                                                         height={173}
//                                                     />
//                                                 </div>
//                                                 <div className="floorPlan__floorPlan-texts">
//                                                     <span className="floorPlan__floorPlan-price">
//                                                         <CurrencyLogo
//                                                             currency={
//                                                                 selectedCurrency
//                                                             }
//                                                         />
//                                                         {convertPrice(
//                                                             plan.price
//                                                         )}
//                                                     </span>
//                                                     <div className="floorPlan__floorPlan-info">
//                                                         <span>
//                                                             {plan.size}{" "}
//                                                             {t(
//                                                                 "projectsPage__About__SqFt"
//                                                             )}
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </li>
//                                         )}
//                                     </div>
//                                 )
//                             )}
//                         <PopupFloorPlan
//                             handler={setPopupShow}
//                             isVisible={popupShow}
//                             plan={activePlan}
//                             payment={item.paymentPlans}
//                         />
//                     </ul>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default index;

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PopupFloorPlan from "../../../../components/PopupFloorPlan";
import { useCurrency } from "../../../../components/CurrencyProvider";
import CurrencyLogo from "../../../../components/UI/CurrencyLogo";
import "./floorPlan__ProjectP.scss";

const Index = ({ item, popupShow, setPopupShow }) => {
    const { t } = useTranslation();
    const { selectedCurrency, convertPrice } = useCurrency();
    const [activePlan, setActivePlan] = useState(null);
    const [activeFloorPlan, setActiveFloorPlan] = useState("");

    useEffect(() => {
        if (item.floorPlans) {
            const firstVisibleFloorPlanKey = Object.keys(item.floorPlans).find(
                (key) => item.floorPlans[key].some((plan) => plan.visible)
            );
            setActiveFloorPlan(firstVisibleFloorPlanKey || "");
        }
    }, [item.floorPlans]);

    const handlePopupShow = (plan) => {
        setActivePlan(plan);
        setPopupShow(true);
    };

    const floorPlanKeys = item.floorPlans
        ? Object.keys(item.floorPlans).filter((key) =>
              item.floorPlans[key].some((plan) => plan.visible)
          )
        : [];

    return (
        <section className="floorPlan">
            <div className="floorPlan__content">
                <div className="floorPlan__floorPlan">
                    <div className="asfasasfasf"></div>
                    <div className="floorPlan__floorPlan-head">
                        <h4 className="floorPlan__floorPlan-title">
                            {t("projectPage__floorAndPayment")}
                        </h4>
                        <ul className="floorPlan__floorPlan-selectList">
                            {floorPlanKeys.map((key) => (
                                <li
                                    key={key}
                                    className={`floorPlan__floorPlan-selectItem ${
                                        activeFloorPlan === key ? "active" : ""
                                    }`}
                                    onClick={() => setActiveFloorPlan(key)}
                                >
                                    {key}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <span className="floorPlan__floorPlan-click">
                        {t("projectPage__clickToView")}
                    </span>
                    <ul className="floorPlan__floorPlan-floorList">
                        {item.floorPlans &&
                            item.floorPlans[activeFloorPlan] &&
                            item.floorPlans[activeFloorPlan]
                                .filter((plan) => plan.visible)
                                .map((plan, index) => (
                                    <li
                                        key={index}
                                        className="floorPlan__floorPlan-floorItem"
                                        onClick={() => handlePopupShow(plan)}
                                    >
                                        <div className="floorPlan__floorPlan-floorImg">
                                            <img
                                                src={plan.image}
                                                alt="Image floor plan"
                                                width={197}
                                                height={173}
                                            />
                                        </div>
                                        <div className="floorPlan__floorPlan-texts">
                                            <span className="floorPlan__floorPlan-price">
                                                <CurrencyLogo
                                                    currency={selectedCurrency}
                                                />
                                                {convertPrice(plan.price)}
                                            </span>
                                            <div className="floorPlan__floorPlan-info">
                                                <span>
                                                    {plan.size}{" "}
                                                    {t(
                                                        "projectsPage__About__SqFt"
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                        <PopupFloorPlan
                            handler={setPopupShow}
                            isVisible={popupShow}
                            plan={activePlan}
                            payment={item.paymentPlans}
                        />
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Index;
