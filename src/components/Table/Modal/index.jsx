import React from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalContent,
  ModalInput,
  ModalSelect,
  ModalActions,
  DeleteButton,
  SaveButton,
} from './style';
const OrderModal = ({ isOpen, onClose, input, onChange, onAdd }) => {
  if (!isOpen) return null;
  
  
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Buyurtma qo'shish</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>

        <ModalContent>
          <ModalInput
            onChange={onChange}
            name="ism"
            type="text"
            placeholder="Ism.."
            value={input.ism}
          />
          <ModalInput
            onChange={onChange}
            name="title"
            type="text"
            placeholder="Guruh.."
            value={input.title}
          />
          <ModalSelect
            onChange={onChange}
            name="field"
            defaultValue={input.field}
          >
            <option>Front End</option>
            <option>Back End</option>
            <option>Smm</option>
            <option>AI</option>
          </ModalSelect>
          <ModalSelect onChange={onChange} name="level" value={input.level}>
            <option>Beginner</option>
            <option>Middle</option>
            <option>Senior</option>
          </ModalSelect>
          <ModalInput
            onChange={onChange}
            name="time"
            type="date"
            value={input.time}
          />
          <ModalInput
            onChange={onChange}
            name="end_data"
            type="date"
            value={input.end_data}
          />
          <ModalSelect name="type">
            <option>online</option>
            <option>offline</option>
          </ModalSelect>

          <ModalInput
            onChange={onChange}
            name="mentor"
            placeholder="O'qituvchi"
          />
        </ModalContent>

        <ModalActions>
          <DeleteButton>O'chirish</DeleteButton>
          <SaveButton onClick={onAdd}>Saqlash</SaveButton>
        </ModalActions>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default OrderModal;
