import s from "./custom-select.module.scss";
import arrowUp from "../../../assets/images/arrow-up.svg";
import arrowDown from "../../../assets/images/arrow-down.svg";
import checkboxIcon from "../../../assets/images/check-icon.svg";
import { useCustomSelect } from "../../../hooks/useCustomSelect";

export const CustomSelect = ({
  options,
  selectedValues,
  isMulti = false,
  placeholder = "Select...",
  selectBoxStyles = {},
  onChange
}) => {
  const [isOpen, setIsOpen, selectBoxRef, optionsRef] = useCustomSelect();

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
    <div className={s.selectBox} ref={selectBoxRef}>
      <div className={s.selectTop} onClick={() => setIsOpen(!isOpen)} style={selectBoxStyles}>
        <p className={s.placeholderText}>{placeholder || "Select..."}</p>
        {isOpen ? (
          <img src={arrowUp} alt="Arrow Up" />
        ) : (
          <img src={arrowDown} alt="Arrow Down" />
        )}
      </div>
      {isOpen && (
        <ul className={s.options} ref={optionsRef}>
          {options.map((option, idx) => (
            <li key={idx} className={s.option}>
              <label className={s.optionLabel}>
                <span className={s.valueText}>{option.label}</span>
                <input
                  type="checkbox"
                  className={s.checkbox}
                  value={option.value}
                  disabled={isAnySelected && option.value !== "any"}
                  checked={isAnySelected || (Array.isArray(selectedValues)
                    ? selectedValues.indexOf(option.value) !== -1
                    : option.value === selectedValues)}
                  onChange={handleChange}
                />
                <span className={s.checkboxIcon}>
                  <img src={checkboxIcon} alt="Check" />
                </span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
