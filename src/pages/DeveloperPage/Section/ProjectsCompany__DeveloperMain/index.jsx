import React from "react";
import ListProjects from "../../../../components/ListProjects";
import response from "../../../../response.json";
import "./projectsCompany__DeveloperMain.scss";
import { useTranslation } from "react-i18next";
import { useGetProjectsQuery } from "../../../../store/query/projectsAPI/projectsAPI";

const Index = ({ item }) => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useGetProjectsQuery("");

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const projectTitles = item.title.toLowerCase();
  const copyProjectData = response.filter(
    (item) => item.developer.toLowerCase() === projectTitles
  );

  const shuffledData =
    copyProjectData.length < 8
      ? shuffleArray(response)
      : shuffleArray(copyProjectData);

  return (
    <section className="projectsCompanyDevP">
      <h2 className="projectsCompanyDevP__title">
        {t("developerMainPage__SelectProjectsTitle")}
      </h2>
      {isLoading || isError ? (
        <div className="loaderProjects__wrapper">
          <span className="loaderProjects"></span>
        </div>
      ) : (
        <ListProjects items={data} number={8} />
      )}
    </section>
  );
};

export default Index;
