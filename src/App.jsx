import {
  Sidebar,
  Flex,
  Status,
  UserImg,
  UserLink,
  UserName,
  Logo,
  List,
  ChildLink,
} from "./components/Sidebar/sidebarStyle";
import logo from "./assets/images/Webbrain.crm.svg";
import userImgs from "./assets/images/user_img.png";
import analystic from "./assets/images/a1.svg";
import buyurtma from "./assets/images/a2.svg";
import moliya from "./assets/images/a3.svg";
import talaba from "./assets/images/a4.svg";
import guruhlar from "./assets/images/a5.svg";
import kurslar from "./assets/images/a6.svg";
import hR from "./assets/images/a7.svg";
import sozlamalar from "./assets/images/a8.svg";
import chiqish from "./assets/images/a9.svg";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { useState, useEffect } from "react";
import Tabble from "./components/Table";
import { Link, Routes ,Route} from "react-router-dom";

function App() {
  const data = [
    {
      id: 1,
      title: "Anlitika",
      icon: analystic,
      isOpen: false,
    },
    {
      id: 2,
      title: "Buyurtma",
      icon: buyurtma,
      isOpen: false,
      ChildLink: [
        { id: 1, title: "Buyurtmalar ro’yxati", url: "/table" },
        { id: 2, title: "Birinchi darsga yozilish", url: "" },
        { id: 3, title: "Yangi talabalar ro’yxati", url: "" },
      ],
    },
    {
      id: 3,
      title: "Moliya",
      icon: moliya,
      isOpen: false,
    },
    {
      id: 4,
      title: "Talaba",
      icon: talaba,
      isOpen: false,
      ChildLink: [
        { id: 1, title: "Davomat", url: "" },
        { id: 2, title: "Talabalar ro’yxati", url: "" },
        { id: 3, title: "Aktiv", url: "" },
        { id: 4, title: "Arxiv", url: "" },
        { id: 5, title: "Ota-ona", url: "" },
      ],
    },
    {
      id: 5,
      title: "Guruhlar",
      icon: guruhlar,
      isOpen: false,
      ChildLink: [
        { id: 1, title: "Guruhlar", url: "" },
        { id: 2, title: "Dars jadvali", url: "" },
        { id: 3, title: "Xonalar", url: "" },
      ],
    },
    {
      id: 6,
      title: "Kurslar",
      icon: kurslar,
      isOpen: false,
      ChildLink: [
        { id: 1, title: "Kurslar ro’yxati", url: "" },
        { id: 2, title: "Kurslar yo’nalishi", url: "" },
      ],
    },
    {
      id: 7,
      title: "HR",
      icon: hR,
      isOpen: false,
      ChildLink: [
        { id: 1, title: "Ro’llar", url: "" },
        { id: 2, title: "Hodimlar", url: "" },
      ],
    },
    {
      id: 8,
      title: "Sozlamalar",
      icon: sozlamalar,
      isOpen: false,
      ChildLink: [
        { id: 1, title: "Umumiy sozlamalar", url: "" },
        { id: 2, title: "Manager", url: "" },
        { id: 3, title: "O’qituvchi", url: "" },
        { id: 4, title: "Talaba", url: "" },
      ],
    },
  ];
  const [info, setInfo] = useState(() => {
    const savedInfo = localStorage.getItem("info");
    return savedInfo ? JSON.parse(savedInfo) : data;
  });

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(info));
  }, [info]);

  const Toggle = (id) => {
    const updatedInfo = info.map((item) =>
      item.id === id ? { ...item, isOpen: !item.isOpen } : item
    );

    setInfo(updatedInfo);
  };

  return (
    <div className="wrapper">
      <Flex contents={"between"}>
        <Sidebar>
          <Flex
            style={{ height: "100%" }}
            direction={"column"}
            contents={"between"}
          >
            <div className="sidebar_top">
              <Logo href="">
                <img src={logo} alt="" />
              </Logo>
              <Flex g={20} p={14}>
                <UserImg href="">
                  <img src={userImgs} alt="" />
                  <Status onlines="true" />
                </UserImg>
                <Flex direction={"column"} g={2}>
                  <UserName>Sardorbek Muhtorov</UserName>
                  <UserLink href="">s.muhtorov@gmail.com</UserLink>
                </Flex>
              </Flex>
              <ul>
                {info.map((list) => {
                  // const { icon: <Icon /> } = list;
                  return (
                    <List key={list.id}>
                      <Flex
                        contents={"between"}
                        onClick={() => Toggle(list.id)}
                      >
                        <Flex g={16}>
                          <div className="icon">
                            {/* <Icon /> */}
                            <img src={list.icon} alt="" />
                          </div>
                          <span>{list.title}</span>
                        </Flex>
                        {list.ChildLink ? (
                          <div
                            className={`rotate_icon ${
                              list?.isOpen && "rotate"
                            }`}
                          >
                            <svg
                              width="8"
                              height="12"
                              viewBox="0 0 8 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.97656 5.99999L0.851562 1.87499L2.0299 0.696655L7.33323 5.99999L2.0299 11.3033L0.851562 10.125L4.97656 5.99999Z"
                                fill="#929FAF"
                              />
                            </svg>
                          </div>
                        ) : (
                          ""
                        )}
                      </Flex>
                      {list.ChildLink
                        ? list.ChildLink.map((item) => (
                            <ChildLink
                              key={item.id}
                              className={`${list?.isOpen && "active"}`}
                            >
                              <Link to={item?.url ? item?.url : "/"}>
                                {item.title}
                              </Link>
                            </ChildLink>
                          ))
                        : ""}
                    </List>
                  );
                })}
              </ul>
            </div>
            <List fixed="true">
              <Flex>
                <Flex g={16}>
                  <div className="icon">
                    <img src={chiqish} alt="jhgdzsg" />
                  </div>
                  <span>Chiqish</span>
                </Flex>
              </Flex>
            </List>
          </Flex>
        </Sidebar>
        <Flex column="true" className="right_main">
          <Routes>
            <Route path="/table" element={<Tabble />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
          <Header />
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
