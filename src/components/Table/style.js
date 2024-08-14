import styled from "styled-components";
import Select from "react-select";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 margin-top: 73px;
 width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: #f0f5ff;
  padding: 18px 24px;
`;
// Styled react-select component
export const StyledSelect = styled(Select)`
  width: 160px;
  margin-right: 15px;

  .react-select__control {
    border-radius: 8px;
    border: 1px solid #d1d3e2;
    padding: 2px 4px;
    box-shadow: none;
    &:hover {
      border-color: #858796;
    }
  }

  .react-select__menu {
    border-radius: 8px;
    border: 1px solid #d1d3e2;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .react-select__option--is-selected {
    background-color: #4e73df;
  }

  .react-select__option--is-focused {
    background-color: #e3e6f0;
  }
`;

// Button for adding a new order
export const AddButton = styled.button`
  background-color: #4e73df;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;

  &:hover {
    background-color: #2e59d9;
  }

  &:active {
    background-color: #224abe;
  }
`;

// Import button
export const ImportButton = styled.button`
  background-color: #f8f9fc;
  color: #4e73df;
  padding: 10px 20px;
  border: 1px solid #d1d3e2;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  margin-right: 10px;

  &:hover {
    background-color: #e3e6f0;
  }

  &:active {
    background-color: #d1d3e2;
  }
`;

// Table and table rows
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 12px;
  background-color: #f8f9fc;
  color: #858796;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fc;
  }

  &:hover {
    background-color: #e3e6f0;
  }
`;

export const TableCell = styled.td`
  padding: 14px;
  border-bottom: 1px solid #e3e6f0;
  color: #5a5c69;
  font-size: 14px;
`;

// Status badge for accepted/rejected statuses
export const StatusBadge = styled.span`
  padding: 6px 12px;
  color: white;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  background-color: ${props => (props.status === 'Accepted' ? '#1cc88a' : '#e74a3b')};
`;

// Icon button for edit and delete
export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #4e73df;
  font-size: 16px;
  padding: 6px;

  &:hover {
    color: #2e59d9;
  }
`;
export const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: #253e5f80;
  z-index: 111111111111;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
  }
`;