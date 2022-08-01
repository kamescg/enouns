import { useState } from "react";

import classnames from "classnames";
// import { useSpring, animated } from 'react-spring';

interface IModalSmall {
  children: any;
  className: string;
  hideModal: Function;
  position: string;
}

export const ModalSmall = ({ children, className, hideModal }: IModalSmall) => {
  // Style Panel
  const stylePanel = classnames(
    "fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-50",
    // "bg-white p-10 w-100 z-100 rounded-xl shadow-xl",
    className
  );

  const handleCloseModal = () => {
    hideModal();
  };

  return (
    <>
      <div className={stylePanel}>
        <div
          onClick={handleCloseModal}
          className={"fixed top-0 bottom-0 left-0 right-0 z-10"}
          style={{ zIndex: 40 }}
        />
        <div
          className="relative"
          style={{
            height: "520px",
            minWidth: "440px",
            maxWidth: "540px",
            zIndex: 1000,
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

ModalSmall.defaultProps = {
  className: "",
  position: "right",
};

export default ModalSmall;
