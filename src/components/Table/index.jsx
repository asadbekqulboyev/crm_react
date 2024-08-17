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
const Tabble = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [input, setInput] = useState({
    ism: "",
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
  const getData = () => {
    setLoad(true);
    fetch("https://sheet.best/api/sheets/423f9106-6b8e-41c1-811c-529329a327bc")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoad(false);
      });

  };

  const onChange = (event) => {
    const { value, name } = event.target;
    console.log(value);
    
    setInput({
      ...input,
      [name]: value,
    });
  };
const onAdd = async () => {
  setLoad(true);

  try {
    // Avvalgi ma'lumotlarni olib kelish
    const response = await fetch(
      "https://sheet.best/api/sheets/423f9106-6b8e-41c1-811c-529329a327bc"
    );
    const data = await response.json();

    // Eng katta id ni topish
    const maxId = data.reduce(
      (max, item) => (item.id > max ? item.id : max),
      0
    );
    const newId = maxId + 1;

    // Yangi ma'lumotni jo'natish
    await fetch(
      "https://sheet.best/api/sheets/423f9106-6b8e-41c1-811c-529329a327bc",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...input, id: newId }),
      }
    );

    // Yangi ma'lumotni olib kelish
    getData();
    closeModal();
  } catch (error) {
    console.error("Error adding data:", error);
  } finally {
    setLoad(false);
  }
};

 const onDelete = (id) => {
   setLoad(true);
   fetch(
     `https://sheet.best/api/sheets/423f9106-6b8e-41c1-811c-529329a327bc/id/*${id}*`,
     {
       method: "DELETE",
       headers: {
         "Content-Type": "application/json",
       },
     }
   )
     .then(() => {
       getData();
       closeModal();
     })
     .catch((error) => {
       console.error("Error deleting data:", error);
     })
     .finally(() => {
       setLoad(false);
     });

   console.log(id);
 };

  useEffect(() => {
    setLoad(false);

    getData();
  }, []);

  const onUpdate = ()=>{
    openModal()
  }
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
              <Loader>
                <img src="https://i.gifer.com/ZKZg.gif" alt="Load" />
              </Loader>
            ) : (
              data.map((dateInfo) => {
                return (
                  <TableRow key={dateInfo.id}>
                    <TableCell>{dateInfo.id}</TableCell>
                    <TableCell>{dateInfo.ism}</TableCell>
                    <TableCell>{dateInfo.field}</TableCell>
                    <TableCell>{dateInfo.time}</TableCell>
                    <TableCell>{dateInfo.end_data}</TableCell>
                    <TableCell>{dateInfo.mentor}</TableCell>
                    <TableCell>
                      <IconButton onClick={()=>onUpdate()}>
                        <FaEdit />
                      </IconButton>
                      <IconButton onClick={()=>onDelete(dateInfo.id)}>
                        <FaTrash />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })
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
