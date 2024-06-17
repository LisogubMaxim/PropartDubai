export const sortByPrice = (data) => {
  if (!data) return

  return data.slice().sort((a, b) => a.generalInfo.priceFrom - b.generalInfo.priceFrom);
}