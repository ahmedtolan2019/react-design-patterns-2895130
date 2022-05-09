import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalWindow = styled.div`
  margin: 10% auto;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 50%;
`;

export const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <ModalBackground onClick={() => setIsOpen(false)}>
          <ModalWindow onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
            {children}
          </ModalWindow>
        </ModalBackground>
      )}
    </>
  );
};
