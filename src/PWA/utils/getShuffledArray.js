export const getShuffledArray = (array) => {
  if (!array) return null;

  const shuffledArray = Array.from(array);

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};
