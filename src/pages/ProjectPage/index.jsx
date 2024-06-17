import React, { useRef, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import WidthContainer from "../../components/UI/WidthContainer";
import HeaderSecond from "../../components/HeaderSecond";
import BuildingInfo__ProjectP from "./Sections/BuildingInfo__ProjectP";
import About__ProjectP from "./Sections/About__ProjectP";
import FloorPlan__ProjectP from "./Sections/FloorPlan__ProjectP";
import Map__ProjectP from "./Sections/Map__ProjectP";
import HelpForm from "../../components/HelpForm";
import Images__PorjectP from "./Sections/Images__ProjectP";
import Amenities__ProjectP from "./Sections/Amenities__ProjectP";
import Developer__ProjectP from "./Sections/Developer__ProjectP";
import PaymentPlan__ProjectP from "./Sections/PaymentPlan__ProjectP";
import { useGetProjectsQuery } from "../../store/query/projectsAPI/projectsAPI";
import ListProjects from "../../components/ListProjects";
import "./projectPage.scss";
import { useGetDevIdQuery } from "../../store/query/developersAPI/developersAPI";
import PopupPaymentsPlans from "../../components/PopupPaymentsPlans";
import { useTranslation } from "react-i18next";

const Index = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState(null);
    const [popupShow, setPopupShow] = useState(false);
    const [popupPaymentsPlans, setPopupPaymentsPlans] = useState(false);
    const { data, isLoading, isError } = useGetProjectsQuery("");
    const { data: devData } = useGetDevIdQuery(
        projectData?.generalInfo?.projectMainInfo?.developer
    );

    useEffect(() => {
        if (isError) {
            navigate("/properties");
            return;
        }

        if (!isLoading && data) {
            const project = data.find((project) => project._id === id);
            if (project) {
                setProjectData(project);
                document.title = project.generalInfo.name;
                window.scrollTo(0, 0);
            } else {
                navigate("/properties");
            }
        }
    }, [id, data, isLoading, isError, navigate]);

    return (
        <main>
            {isLoading || !projectData ? (
                <div className="loaderProjects__wrapper">
                    <span className="loaderProjects"></span>
                </div>
            ) : (
                <>
                    <HeaderSecond
                        floorPopupActive={popupShow || popupPaymentsPlans}
                    />
                    <WidthContainer>
                        <div className="projectPageWrapper">
                            <div className="projectPageWrapper__leftContent">
                                <div className="projectPageWrapper__leftContent-left">
                                    <div>
                                        <Images__PorjectP item={projectData} />
                                        <About__ProjectP item={projectData} />
                                    </div>
                                    <FloorPlan__ProjectP
                                        item={projectData}
                                        popupShow={popupShow}
                                        setPopupShow={setPopupShow}
                                    />
                                </div>
                            </div>
                            <div className="projectPageWrapper__rightContent">
                                <BuildingInfo__ProjectP
                                    item={projectData}
                                    devData={devData}
                                />
                                <Amenities__ProjectP item={projectData} />
                                <Developer__ProjectP
                                    item={projectData}
                                    devData={devData}
                                />
                                <Map__ProjectP
                                    item={projectData}
                                    floorPopupActive={popupShow}
                                />
                                <PaymentPlan__ProjectP
                                    setPopupPaymentsPlans={
                                        setPopupPaymentsPlans
                                    }
                                />
                                <PopupPaymentsPlans
                                    item={projectData}
                                    isVisible={popupPaymentsPlans}
                                    handler={setPopupPaymentsPlans}
                                />
                            </div>
                        </div>
                        <div className="projectPage__listProject">
                            <h2 className="projectPage__listProject-title">
                                {t("projectPage__listTitle")}
                            </h2>
                            <ListProjects items={data} number={8} />
                        </div>
                        <div
                            className="projectPage__helpform"
                            id="consultationHelpForm"
                        >
                            <HelpForm floorPopupActive={popupShow} />
                        </div>
                    </WidthContainer>
                </>
            )}
        </main>
    );
};

export default Index;
