export const updateSavedProjects = (projectId, savedProjects) => {
  if (savedProjects.includes(projectId)) {
    return savedProjects.filter(savedId => savedId !== projectId);
  }

  return [ ...savedProjects, projectId ];
}