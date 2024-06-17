export const sortInAlphabeticalOrder = (data, type, descendingOrder = false) => {
  if (!data) return;

  if (type === "projects") {
    return data.slice().sort((a, b) => {
      const textA = a.generalInfo.name.toLowerCase();
      const textB = b.generalInfo.name.toLowerCase();

      if (descendingOrder) {
        if (textA > textB) return -1;
        if (textA < textB) return 1;
      } else {
        if (textA < textB) return -1;
        if (textA > textB) return 1;
      }

      return 0;
    });
  } else if (type === "areas" || type === "developers") {
    return data.slice().sort((a, b) => {
      const textA = a.title.toLowerCase();
      const textB = b.title.toLowerCase();

      if (textA < textB) return -1;
      if (textA > textB) return 1;
      return 0;
    });
  }
};
