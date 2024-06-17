import { sortInAlphabeticalOrder } from "./sortInAlphabeticalOrder";

export const getProjectsBySortParam = (projects, sortParam) => {
  if (!projects) return [];

  switch (sortParam) {
    case "A to Z":
      return sortInAlphabeticalOrder(projects, "projects")
    case "Z to A":
      return sortInAlphabeticalOrder(projects, "projects", true)
    case "Price - Low to high":
      return projects.slice().sort((a, b) => a.generalInfo.priceFrom - b.generalInfo.priceFrom);
    case "Price - High to low":
      return projects.slice().sort((a, b) => b.generalInfo.priceFrom - a.generalInfo.priceFrom);
    default:
      return projects;
  }
}