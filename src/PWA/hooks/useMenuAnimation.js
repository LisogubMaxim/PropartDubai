import { useState } from "react";
import { useMotionValue, animate } from "framer-motion";

const useMenuAnimation = (closeDropMenu) => {
  const [position, setPosition] = useState(50);
  const [menuIsClosing, setMenuIsClosing] = useState(false);
  const yPosition = useMotionValue(0);

  const handleCloseMenu = () => {
    if (!menuIsClosing && position >= window.innerHeight * 0.5) {
      setMenuIsClosing(true);
      closeDropMenu();
    } else if (!menuIsClosing) {
      animate(yPosition, 0, { type: "spring", stiffness: 500, damping: 30 });
    }
  };

  return { position, yPosition, menuIsClosing, handleCloseMenu, setPosition };
};

export default useMenuAnimation;
