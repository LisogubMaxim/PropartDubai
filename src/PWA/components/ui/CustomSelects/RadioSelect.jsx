import s from "./custom-select.module.scss";

export const RadioSelect = ({ options, selectedValues, isMulti = false, onChange }) => {
  const isAnySelected = Array.isArray(selectedValues)
  ? selectedValues.indexOf("any") !== -1
  : selectedValues === "any";

  const handleChange = (e) => {
    const { value } = e.target;

    const isSelected = (val) => (Array.isArray(selectedValues)
      ? selectedValues.includes(val)
      : selectedValues === val);

    if (Array.isArray(selectedValues)) {
      let newValues;

      if (value === "any") {
        newValues = isSelected(value) ? [] : [value];
      } else if (isSelected(value)) {
        newValues = selectedValues.filter((prevValue) => prevValue !== value);
      } else {
        newValues = isMulti ? [...selectedValues, value] : [value];
      }

      onChange(newValues);
    } else {
      const newValue = isSelected(value) ? "" : value;
      onChange(newValue);
    }
  };

  return (
    <ul className={s.radioSelect}>
      {options.map((option, idx) => (
        <li key={idx} className={`${s.item} ${option.value.length > 2 ? s.itemLg : s.itemSm}`}>
          <label className={s.label}>
            {option.label}
            <input
              type="checkbox"
              className={s.input}
              value={option.value}
              disabled={isAnySelected && option.value !== "any"}
              checked={isAnySelected || (Array.isArray(selectedValues)
                ? selectedValues.indexOf(option.value) !== -1
                : option.value === selectedValues)}
              onChange={handleChange}
            />
          </label>
        </li>
      ))}
    </ul>
  )
}
