export const getShortPrice = (price) => {
  if (!price) return "0";

  if (price >= 1000000) {
    return (price / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (price >= 1000) {
    return (price / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }

  return "0";
};
