import React from 'react';
import clsx from 'clsx';

import style from './input.module.scss';

const Input = ({
  type,
  value,
  onChange,
  placeholder,
  isError,
  clearInput,
  marginBottom,
  name,
}) => {
  return (
    <div
      className={clsx(style.container, isError && style.error)}
      style={{ marginBottom: `${marginBottom}px` }}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
      {value && (
        <svg
          onClick={clearInput}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="16" height="16" rx="8" fill="#B7B8BC" />
          <path
            d="M11 5L5 11M11 11L5 5"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  );
};

export default Input;
