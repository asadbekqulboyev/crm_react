import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #343a40;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #343a40;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ModalInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  color: #495057;
  transition: border-color 0.3s;

  &:hover, &:focus {
    border-color: #2d7ff9;
    outline: none;
  }
`;

export const ModalSelect = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  color: #495057;
  transition: border-color 0.3s;

  &:hover, &:focus {
    border-color: #2d7ff9;
    outline: none;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

export const DeleteButton = styled.button`
  background-color: #ff3b30;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const SaveButton = styled.button`
  background-color: #2d7ff9;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1a5fd9;
  }
`;
