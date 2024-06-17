import useLocalStorage from "use-local-storage";
import { updateSavedProjects } from "../utils/updateSavedProjects";

export const useSavedProjects = () => {
  const [savedProjects, setSavedProjects] = useLocalStorage("saved-projects", []);

  const handleSaveProjects = (projectId) => {
    const updatedProjects = updateSavedProjects(projectId, savedProjects);

    setSavedProjects(updatedProjects);
  }

  return [savedProjects, handleSaveProjects];
}
