import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px 30px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Icon = styled.div`
  color: #f44336;
  font-size: 24px;
  margin-right: 15px;
  display: flex;
  align-items: center;

  & > .fa-triangle-exclamation {
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  color: #222;
`;

export const ModalBody = styled.div`
  margin-bottom: 20px;
  color: #555;
  line-height: 1.5;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalButton = styled.button`
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  font-size: 0.9rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  &.cancel {
    background-color: #ccc;
    &:hover {
      background-color: #b8b8b8;
    }
  }

  &.deactivate {
    background-color: #f44336;
    &:hover {
      background-color: #d0382d;
    }
  }
`;