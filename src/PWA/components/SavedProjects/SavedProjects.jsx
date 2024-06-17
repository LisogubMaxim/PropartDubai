import { useEffect, useState } from "react";
import { useSavedProjects } from "../../hooks/useSavedProjects";
import CircleButton from "../ui/CircleButton/CircleButton";
import { TbArrowsSort } from "react-icons/tb";
import MenuBar from "../ui/MenuBar/MenuBar";
import { Link } from "react-router-dom";
import { getPresentationalImgs } from "../../utils/getProjectImgs";
import { useGetProjectsQuery } from "../../../store/query/projectsAPI/projectsAPI";
import { sortByPrice } from "../../utils/sortByPrice";
import ViewMore from "../ui/ViewMore/ViewMore";
import { useDebouncedCallback } from "use-debounce";

import magnify from "../../assets/images/magnify.svg";

import s from "./saved-projects.module.scss";

const SavedProjects = () => {
  const [savedProjects, setSavedProjects] = useSavedProjects();
  const [isImgLoading, setIsImgLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [isSort, setIsSort] = useState(false);

  const { data, isLoading, isError } = useGetProjectsQuery("");

  const filteredProjects = data?.filter((project) =>
    savedProjects.includes(project._id)
  );

  const applySearchParams = (projects) => {
    if (projects) {
      const filteredProjects = projects.filter((project) =>
        project.generalInfo.name
          .toLowerCase()
          .includes(searchText.toLowerCase())
      );

      return isSort
        ? sortByPrice(filteredProjects)
        : filteredProjects;
    }
  };

  const projects = applySearchParams(filteredProjects);

  const ITEMS_PER_SET = 8;
  const totalSets = Math.ceil(projects?.length / ITEMS_PER_SET);
  const [currentSet, setCurrentSet] = useState(1);

  const debouncedSearch = useDebouncedCallback((value) => {
    setSearchText(value);
  }, 500);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleShare = async (projectUrl) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Share a project link',
          url: `https://propart.ae/phone/project/${projectUrl}`,
        });
      } catch (error) {
        console.error('Error sharing content:', error);
      }
    } else {
      fallbackShare(projectUrl);
    }
  };

  const fallbackShare = (projectUrl) => {
    const textToCopy = `propart.ae/phone/project/${projectUrl}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('Link copied to clipboard!');
    }).catch((error) => {
      console.error('Could not copy text: ', error);
      alert('Sorry, your browser does not support the Web Share API or clipboard functionality.');
    });
  };

  return (
    <main className="main-container">
      <header className={s.header}>
        <div className={s.headerTop}>
          <h1 className={s.mainTitle}>Saved projects</h1>
        </div>
        <div className={s.headerBottom}>
          <div className={`shadow ${s.search}`}>
            <img src={magnify} className={s.searchIcon} alt="Magnify" />
            <input
              type="text"
              className={s.searchInput}
              onChange={(e) => debouncedSearch(e.target.value)}
              placeholder="Enter the project`s name"
            />
          </div>
          <button
            className={`circle-btn shadow ${s.sortBtn} ${isSort ? s.sortBtnActive : ""
              }`}
            onClick={() => setIsSort(!isSort)}
          >
            <TbArrowsSort
              size="20px"
              color={`${isSort ? "white" : "#6f707a"}`}
            />
          </button>
        </div>
      </header>
      {isLoading ||
        (isError && (
          <div className="loaderProjects__wrapper">
            <span className="loaderProjects"></span>
          </div>
        ))}
      {projects?.length ? (
        <div className={s.projects}>
          {projects.slice(0, currentSet * ITEMS_PER_SET).map((project) => (
            <div key={project._id} className={s.project}>
              {isImgLoading && <div className="skeleton-loader"></div>}
              <CircleButton
                type="share"
                onClick={() => handleShare(project._id)}
              />
              <CircleButton
                type="remove"
                styles={{ top: "12px", right: "64px" }}
                onClick={() => setSavedProjects(project._id)}
              />
              <Link to={`/phone/project/${project._id}`}>
                <div className={s.darkerImg}></div>
                {isImgLoading && <div className="skeleton-loader"></div>}
                {getPresentationalImgs(project.generalInfo.images)?.length ? (
                  <img
                    src={getPresentationalImgs(project.generalInfo.images)[0]}
                    className={s.projectImg}
                    onLoad={() => setIsImgLoading(false)}
                    alt={project.generalInfo.name}
                  />
                ) : (
                  <div className="loaderProjects__wrapper mapProject">
                    <span className="loaderProjects"></span>
                  </div>
                )}
                <div className={s.projectContent}>
                  <span className={s.projectName}>
                    {project.generalInfo.name}
                  </span>
                  <span className={s.projectText}>
                    {project.generalInfo.location}
                  </span>
                  <span className={s.projectText}>
                    from $ {project.generalInfo.priceFrom.toLocaleString()}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className={s.noProjectsText}>
          You do not have any saved projects yet
        </p>
      )}
      {currentSet < totalSets && (
        <ViewMore
          currentSet={currentSet}
          totalSets={totalSets}
          onClick={() => setCurrentSet(currentSet + 1)}
        />
      )}
      <MenuBar />
    </main>
  );
};

export default SavedProjects;
