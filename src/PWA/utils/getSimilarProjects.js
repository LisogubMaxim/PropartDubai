import { getShuffledArray } from "./getShuffledArray";

export const getSimilarProjects = (projects, targetPrice = 0) => {
  if (!projects) return [];

  const lowerBound = targetPrice * 0.85;
  const upperBound = targetPrice * 1.15;

  const filteredProjects = projects.filter(project => (project.generalInfo.priceFrom >= lowerBound) && (project.generalInfo.priceFrom <= upperBound))

  return getShuffledArray(filteredProjects);
}