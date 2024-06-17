// import "./select.scss";
// import toggleProperty from "../../../pages/DeveloperPage/Section/SearchDev_DeveloperPage/helper";

// export default function Select({
//   img,
//   placeholder,
//   state,
//   setState,
//   items,
//   valute,
//   valueToChange,
// }) {
//   if (!valute)
//     return (
//       <div className="select">
//         <span>{placeholder}</span>
//         <img src={img} alt="selectIcon" width={18} height={18} />
//         <div className="select__items">
//           {items.map((item, index) => (
//             <MyCheckBox
//               property={item}
//               handleState={setState}
//               state={state}
//               placeholder={valueToChange}
//               key={index}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   return (
//     <div className="select">
//       <span>{placeholder}</span>
//       <img src={img} alt="selectIcon" width={18} height={18} />
//       <div className="select__items">
//         <div className="select__itemsInputBox" data-valute={valute}>
//           <input
//             type="number"
//             className="select__itemsInput"
//             placeholder="from"
//             value={state[valueToChange].from}
//             onChange={(e) =>
//               setState({
//                 ...state,
//                 [valueToChange]: {
//                   ...state[valueToChange],
//                   from: e.target.value,
//                 },
//               })
//             }
//           />
//           {valute === "ft" ? (
//             <span>
//               {valute}
//               <sup>2</sup>
//             </span>
//           ) : (
//             valute
//           )}
//           <input
//             type="number"
//             className="select__itemsInput"
//             placeholder="to"
//             value={state[valueToChange].to}
//             onChange={(e) =>
//               setState({
//                 ...state,
//                 [valueToChange]: {
//                   ...state[valueToChange],
//                   to: e.target.value,
//                 },
//               })
//             }
//           />
//           {valute === "ft" ? (
//             <span>
//               {valute}
//               <sup>2</sup>
//             </span>
//           ) : (
//             valute
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function MyCheckBox({ property, handleState, state, placeholder }) {
//   const id = Math.random();
//   return (
//     <div className="form-group">
//       <input
//         type="checkbox"
//         id={id}
//         onChange={() =>
//           handleState({
//             ...state,
//             [placeholder]: property,
//           })
//         }
//         checked={state[placeholder] === property}
//       />
//       <label htmlFor={id}>{property}</label>
//     </div>
//   );
// }

import "./select.scss";
import toggleProperty from "../../../pages/DeveloperPage/Section/SearchDev_DeveloperPage/helper";

export default function Select({
  img,
  placeholder,
  state,
  setState,
  items,
  valute,
  valueToChange,
}) {
  if (!valute)
    return (
      <div className="select">
        <span>{placeholder}</span>
        <img src={img} alt="selectIcon" width={18} height={18} />
        <div className="select__items">
          {items.map((item, index) => (
            <MyCheckBox
              property={item}
              handleState={setState}
              state={state}
              placeholder={valueToChange}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  return (
    <div className="select">
      <span>{placeholder}</span>
      <img src={img} alt="selectIcon" width={18} height={18} />
      <div className="select__items">
        <div className="select__itemsInputBox" data-valute={valute}>
          <input
            type="number"
            className="select__itemsInput"
            placeholder="from"
            value={state[valueToChange].from}
            onChange={(e) =>
              setState({
                ...state,
                [valueToChange]: {
                  ...state[valueToChange],
                  from: e.target.value,
                },
              })
            }
          />
          {valute === "ft" ? (
            <span>
              {valute}
              <sup>2</sup>
            </span>
          ) : (
            valute
          )}
          <input
            type="number"
            className="select__itemsInput"
            placeholder="to"
            value={state[valueToChange].to}
            onChange={(e) =>
              setState({
                ...state,
                [valueToChange]: {
                  ...state[valueToChange],
                  to: e.target.value,
                },
              })
            }
          />
          {valute === "ft" ? (
            <span>
              {valute}
              <sup>2</sup>
            </span>
          ) : (
            valute
          )}
        </div>
      </div>
    </div>
  );
}

function MyCheckBox({ property, handleState, state, placeholder }) {
  const id = Math.random();
  return (
    <div className="form-group">
      <input
        type="checkbox"
        id={id}
        onChange={() =>
          handleState({
            ...state,
            [placeholder]: state[placeholder] === property ? "" : property,
          })
        }
        checked={state[placeholder] === property}
      />
      <label htmlFor={id}>{property}</label>
    </div>
  );
}
