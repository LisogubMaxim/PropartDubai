import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import response from "../../response.json";
import WidthContainer from "../../components/UI/WidthContainer";
import { useEffect, useState } from "react";
import { useGetProjectsQuery } from "../../store/query/projectsAPI/projectsAPI";
import Images__ImagesP from "./Sections/Images__ImagesP";

export default function index() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState(null);
  const [popupShow, setPopupShow] = useState(false);
  const { data, isLoading, isError } = useGetProjectsQuery("");

  useEffect(() => {
    if (isError) {
      navigate("/properties");
      return;
    }

    if (!isLoading && data) {
      const project = data.find((project) => project._id === id);
      if (project) {
        setProjectData(project);
        document.title = project.projectName;
        window.scrollTo(0, 0);
      } else {
        navigate("/properties");
      }
    }
  }, [id, data, isLoading, isError, navigate]);

  return (
    <main className="main-footer">
      {isLoading || isError || !projectData ? (
        <div className="loaderProjects__wrapper map">
          <span className="loaderProjects"></span>
        </div>
      ) : (
        <Images__ImagesP item={projectData} />
      )}
    </main>
  );
}
