import { useState } from "react";

import classnames from "classnames";
// import { useSpring, animated } from 'react-spring';

interface IModalLarge {
  children: any;
  className: string;
  hideModal: Function;
  position: string;
}

export const ModalLarge = ({ children, className, hideModal }: IModalLarge) => {
  // Style Panel
  const stylePanel = classnames(
    "fixed top-20 bottom-20 left-1/3 bg-white p-10 w-100 w-2/4 z-100 rounded-xl shadow-xl",
    className
  );

  const handleCloseModal = () => {
    setShow(true);
    setTimeout(() => {
      hideModal();
    }, 400);
  };

  return (
    <>
      <div
        onClick={handleCloseModal}
        className={"fixed top-0 bottom-0 left-0 right-0 z-10"}
        style={{ zIndex: 999 }}
      />
      <div className="overflow-auto h-full">{children}</div>
      <div className={stylePanel} style={{ zIndex: 1000 }}></div>
    </>
  );
};

ModalLarge.defaultProps = {
  className: "",
  position: "right",
};

export default ModalLarge;
