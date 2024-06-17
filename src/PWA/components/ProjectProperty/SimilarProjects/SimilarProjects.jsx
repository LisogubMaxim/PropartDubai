import RecommendationsSlider from "../../ui/Slider/RecommendationsSlider";
import { useGetProjectsQuery } from "../../../../store/query/projectsAPI/projectsAPI";
import { useEffect, useState } from "react";
import { getSimilarProjects } from "../../../utils/getSimilarProjects";

export const SimilarProjects = ({ projectPrice }) => {
  const { data, isLoading, isError } = useGetProjectsQuery("");
  const [similarProjects, setSimilarProjects] = useState([]);

  useEffect(() => {
    if (data) {
      setSimilarProjects(getSimilarProjects(data, projectPrice));
    }
  }, [data]);

  return (
    <section className="project-property__section main-container">
      <h2 className="project-property__second-title">
        Similar projects
      </h2>
      {isLoading || isError ? (
        <div className="loaderProjects__wrapper">
          <span className="loaderProjects"></span>
        </div>
      ) : (
        <RecommendationsSlider data={similarProjects.slice(0, 8)} />
      )}
    </section>
  );
};
