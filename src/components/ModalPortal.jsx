import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalPortal = ({ children }) => {
  return createPortal(
    <ModalPortalContainer>{children}</ModalPortalContainer>,
    document.querySelector("#portal")
  );
};

const ModalPortalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.1);
`;

export default ModalPortal;
