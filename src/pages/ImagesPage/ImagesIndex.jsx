import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import response from "../../response.json";
import WidthContainer from "../../components/UI/WidthContainer";
import { useEffect, useState } from "react";
import { useGetProjectsQuery } from "../../store/query/projectsAPI/projectsAPI";
import ImagesIndex__ImageP from "./Sections/ImagesIndex__ImageP";

export default function index() {
  const { data, isLoading, isError } = useGetProjectsQuery("");
  const { id } = useParams();
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const index = queryParams.get("index");

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
        <ImagesIndex__ImageP item={projectData} index={index} />
      )}
    </main>
  );
}
