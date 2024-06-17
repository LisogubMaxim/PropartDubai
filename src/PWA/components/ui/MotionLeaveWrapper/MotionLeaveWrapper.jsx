import React from "react";
import { motion, useDragControls } from "framer-motion";

import s from "./motionLeaveWrapper.module.scss";

const MotionLeaveWrapper = ({
  children,
  title,
  closeSlideMenu,
  hidden,
  visible,
}) => {
  const handleDragEnd = (event, info) => {
    if (info.offset.y > 100) {
      closeSlideMenu();
    }
  };

  const dragControls = useDragControls();

  return (
    <>
      <div className={s.backdrop} onClick={closeSlideMenu}></div>
      <motion.div
        className={`main-container modal-window ${s.modalPanel}`}
        style={{ top: "80px", paddingTop: 0, paddingInline: 0 }}
        variants={{
          hidden: hidden,
          visible: visible,
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.2 }}
        dragControls={dragControls}
        dragListener={false}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.3}
        onDragEnd={handleDragEnd}
        dragMomentum={false}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        layout
      >
        <motion.div
          className={s.handle}
          onPointerDown={(e) => dragControls.start(e)}
          style={{ touchAction: "none" }}
        >
          <div className={s.handleBar} />
          <h2 className={s.secondTitle}>{title}</h2>
        </motion.div>
        <div className={`main-container ${s.modalBody}`}>{children}</div>
      </motion.div>
    </>
  );
};

export default MotionLeaveWrapper;
