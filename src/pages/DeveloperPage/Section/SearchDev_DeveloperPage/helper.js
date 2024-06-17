const toggleProperty = (objValue, property, handleState, state) => {
  let updatedProperties;

  if (property === "All") updatedProperties = [property];
  else {
    updatedProperties = [...state[objValue].filter((item) => item !== "All")];
    const index = updatedProperties.indexOf(property);
    if (index === -1) updatedProperties.push(property);
    else updatedProperties.splice(index, 1);
  }

  handleState({
    ...state,
    [objValue]: updatedProperties,
  });
};

export default toggleProperty;
