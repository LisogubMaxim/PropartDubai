import { useCustomSelect } from "../../../hooks/useCustomSelect";

import s from "./custom-select.module.scss";

const RangeSelect = ({ options, selectedMin, selectedMax, onChange }) => {
  const [isMinOpen, setIsMinOpen, selectMinRef, optionsMinRef] =
    useCustomSelect();
  const [isMaxOpen, setIsMaxOpen, selectMaxRef, optionsMaxRef] =
    useCustomSelect();
  const maxValues = [...options, { value: "", label: "Unlimited" }];

  const minValueIdx = options.findIndex(
    (option) => option.value === selectedMin
  );
  const maxValueIdx = maxValues.findIndex(
    (option) => option.value === selectedMax
  );

  const filteredMaxValues =
    minValueIdx === -1 ? maxValues : maxValues.slice(minValueIdx + 1);

  return (
    <div className={s.rangeContainer}>
      <div className={`${s.rangeSelect} ${s.selectBox}`} ref={selectMinRef}>
        <div className={s.top} onClick={() => setIsMinOpen(!isMinOpen)}>
          <span className={s.topPlaceholder}>Min</span>
          {selectedMin ? (
            <span className={s.selectedValue}>{selectedMin}</span>
          ) : (
            <span className={s.mainPlaceholder}>
              {options[0]?.label || "0"}
            </span>
          )}
        </div>
        {isMinOpen && (
          <ul className={s.options} ref={optionsMinRef}>
            {options.map((option, idx) => (
              <li key={idx} className={s.option}>
                <label className={s.optionLabel}>
                  {option.label}
                  <input
                    type="radio"
                    className={s.input}
                    name={option.label}
                    value={option.value}
                    checked={option.value === selectedMin}
                    onChange={() => {
                      const maxValue =
                        idx >= maxValueIdx
                          ? maxValues[idx + 1].value
                          : selectedMax;
                      onChange([option.value, maxValue]);
                      setIsMinOpen(false);
                    }}
                  />
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
      <span className={s.separator}></span>
      <div className={`${s.rangeSelect} ${s.selectBox}`} ref={selectMaxRef}>
        <div className={s.top} onClick={() => setIsMaxOpen(!isMaxOpen)}>
          <span className={s.topPlaceholder}>Max</span>
          {selectedMax ? (
            <span className={s.selectedValue}>{selectedMax}</span>
          ) : (
            <span className={s.mainPlaceholder}>Unlimited</span>
          )}
        </div>
        {isMaxOpen && (
          <ul className={s.options} ref={optionsMaxRef}>
            {filteredMaxValues.map((option, idx) => (
              <li key={idx} className={s.option}>
                <label className={s.optionLabel}>
                  {option.label}
                  <input
                    type="radio"
                    className={s.input}
                    name={option.label}
                    value={option.value}
                    checked={option.value === selectedMax}
                    onChange={() => {
                      onChange([selectedMin, option.value]);
                      setIsMaxOpen(false);
                    }}
                  />
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RangeSelect;
