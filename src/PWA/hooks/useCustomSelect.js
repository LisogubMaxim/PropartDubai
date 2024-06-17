import { useState, useEffect, useRef } from 'react';

export const useCustomSelect = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const selectBoxRef = useRef(null);
  const optionsRef = useRef(null);

  useEffect(() => {
    if (isOpen && optionsRef.current) {
      optionsRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    const handleClickOutside = (event) => {
      if (selectBoxRef.current && !selectBoxRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [selectBoxRef, isOpen, optionsRef]);

  return [isOpen, setIsOpen, selectBoxRef, optionsRef];
}