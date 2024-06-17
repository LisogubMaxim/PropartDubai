export const getPresentationalImgs = (images) => {
  if (!images?.length) return [];

  const exteriorImgs = images.find((img) => (
    img?.name?.EN === "Presentation" || img?.name?.EN === "Exterior"
  ))?.photos

  return exteriorImgs?.length ? exteriorImgs : images[0]?.photos;
};

export const getInteriorImgs = (images) => {
  if (!images?.length) return;

  const interiorImgs = images.find((img) => (
    img?.name?.EN === "Finishing examples" || img?.name?.EN === "Interior"
  ))?.photos

  return interiorImgs?.length
    ? interiorImgs
    : interiorImgs?.length > 1
      ? images[1]?.photos
      : [];
};
