import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  Container,
  Header,
  StyledSelect,
  AddButton,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  IconButton,
  ImportButton,
  Loader,
} from "./style";
import { Flex } from "../Sidebar/sidebarStyle";
import OrderModal from "./Modal";
import { Title } from "../Dashboard/style";
import { Input } from "react-select/animated";

const Tabble = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [input, setInput] = useState({
    ism: "vbsdgbrtgrtg",
    title: "",
    field: "",
    level: "",
    time: "",
    end_data: "",
    status: "",
    mentor: "",
  });
  const options = [
    { title: "Statusi", value: "hammasi", label: "Hammasi" },
    { title: "Ranglar bo’yicha", value: "mobile", label: "Mobile" },
    { title: "Guruh", value: "frontend", label: "Frontend" },
    { title: "Kurslar", value: "backend", label: "Backend" },
    { title: "Moderator", value: "backend", label: "Backend" },
    { title: "Sababi", value: "backend", label: "Backend" },
  ];
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const getData = ()=>{
fetch("https://sheet.best/api/sheets/423f9106-6b8e-41c1-811c-529329a327bc")
  .then((res) => res.json())
  .then((res) => setData(res));
  data.length > 0 ? setLoad(true) : setLoad(false);
  }

  const onChange = (event) => {
    const { value, name } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const onAdd = () => {
    fetch(
      "https://sheet.best/api/sheets/423f9106-6b8e-41c1-811c-529329a327bc",
      {
        method: "POST",
        headers: {
          "Content-Type": "aplication/json",
        },
        body: JSON.stringify({input}),
      }
    ).then(
      ()=>getData()
    )
    console.log(input);
    
  };
  useEffect(() => {
    getData()
    
  }, []);
  return (
    <Container>
      <Header>
        <Title>Buyurtmalar ro’yxati</Title>
        <div>
          <ImportButton>Import</ImportButton>
          <AddButton onClick={openModal}>Buyurtma qo’shish</AddButton>
        </div>
      </Header>
      <Flex direction={"column"} g="32" style={{ padding: "24px" }}>
        <Flex>
          {options.map((item) => (
            <Flex g="2" direction={"column"}>
              <div>{item.title}</div>
              <StyledSelect options={options} defaultValue={options[0]} />
            </Flex>
          ))}
        </Flex>
        <Table>
          <thead>
            <tr>
              <TableHeader></TableHeader>
              <TableHeader>O’quvchining ismi</TableHeader>
              <TableHeader>Guruh / Fan</TableHeader>
              <TableHeader>Dars kuni va vaqti</TableHeader>
              <TableHeader>Qo’shilgan sana</TableHeader>
              <TableHeader>Moderator</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader></TableHeader>
            </tr>
          </thead>
          <tbody>
            {load ? (
              data.map((dateInfo) => {
                return (
                  <TableRow>
                    <TableCell>{dateInfo.id}</TableCell>
                    <TableCell>{dateInfo.ism}</TableCell>
                    <TableCell>{dateInfo.field}</TableCell>
                    <TableCell>{dateInfo.time}</TableCell>
                    <TableCell>{dateInfo.end_data}</TableCell>
                    <TableCell>{dateInfo.mentor}</TableCell>
                    <TableCell>
                      <IconButton>
                        <FaEdit />
                      </IconButton>
                      <IconButton>
                        <FaTrash />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <Loader>
                <img src="https://i.gifer.com/ZKZg.gif" alt="Load" />
              </Loader>
            )}
          </tbody>
        </Table>
      </Flex>

      <OrderModal
        input={input}
        isOpen={isModalOpen}
        onClose={closeModal}
        onChange={onChange}
        onAdd={onAdd}
      />
    </Container>
  );
};

export default Tabble;
