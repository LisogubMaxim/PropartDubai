import { useEffect } from "react";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetProjectsQuery } from "../../../store/query/projectsAPI/projectsAPI";
import { Amenities } from "./Amenities/Amenities";
import { Description } from "./Description/Description";
import { Details } from "./Details/Details";
import { Hero } from "./Hero/Hero";
import { InteriorExterior } from "./InteriorExterior/InteriorExterior";
import { Plans } from "./Plans/Plans";
import { SimilarProjects } from "./SimilarProjects/SimilarProjects";
import { Location } from "./Location/Location";
import { Developer } from "./Developer/Developer";
import { useGetDevIdQuery } from "../../../store/query/developersAPI/developersAPI";
import GetConsultation from "../ui/GetConsultationForm/GetConsultation";
import MenuBar from "../ui/MenuBar/MenuBar";

import "./project-property.scss";
import "./property-slider.scss";

const ProjectProperty = ({ projectId }) => {
  const { data, isLoading, isError } = useGetProjectsQuery("");
  const project = data?.find((project) => project._id === projectId);

  const { data: devData } = useGetDevIdQuery(
    project?.generalInfo?.developer
      ? project.generalInfo.projectMainInfo?.developer
      : skipToken
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  return (
    <main className="project-property">
      {isLoading || isError ? (
        <div className="loaderProjects__wrapper">
          <span className="loaderProjects"></span>
        </div>
      ) : (
        <>
          <Hero projectData={project} />
          <div className="main-container">
            <Details
              bedrooms={project.generalInfo.projectMainInfo.rooms}
              size={project.generalInfo.projectMainInfo.size}
              price={project.generalInfo.priceFrom}
            />
          </div>
          <Description about={project.about} />
          <Amenities amenities={project.amenities} />
          <InteriorExterior images={project.generalInfo.images} />
          <Plans floorPlans={project.floorPlans} />
          <Location
            coordinates={project.generalInfo.coordinates}
            polygon={project.generalInfo.polygon}
          />
          <Developer
            qrCode={project?.information?.qrCode}
            name={devData?.name}
            handover={project.generalInfo.projectMainInfo.handover}
            brochure={project.brochure}
            getInfo={devData?.phone}
          />
          <SimilarProjects projectPrice={project?.generalInfo?.priceFrom} />
          <section className="project-property__section main-container">
            <GetConsultation />
          </section>
        </>
      )}
      <MenuBar />
    </main>
  );
};

export default ProjectProperty;
