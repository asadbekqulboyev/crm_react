import { Sidebar, Flex, Status, UserImg, UserLink, UserName, Logo, List, ChildLink } from "./components/Sidebar/sidebarStyle"
import logo from './assets/images/Webbrain.crm.svg';
import userImgs from './assets/images/user_img.png'
import Analystic from './assets/images/a1.svg?react'
import Buyurtma from './assets/images/a2.svg?react'
import Moliya from './assets/images/a3.svg?react'
import Talaba from './assets/images/a4.svg?react'
import Guruhlar from './assets/images/a5.svg?react'
import Kurslar from './assets/images/a6.svg?react'
import HR from './assets/images/a7.svg?react'
import Sozlamalar from './assets/images/a8.svg?react'
import Chiqish from './assets/images/a9.svg?react'
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { useState, useEffect } from "react";

function App() {
  const data = [
    {
      id: 1,
      title: 'Anlitika',
      icon: Analystic,
      isOpen: false
    },
    {
      id: 2,
      title: 'Buyurtma',
      icon: Buyurtma,
      isOpen: false,
      ChildLink: [
        { id: 1, title: 'Buyurtmalar ro’yxati' },
        { id: 2, title: 'Birinchi darsga yozilish' },
        { id: 3, title: 'Yangi talabalar ro’yxati' }
      ]
    },
    {
      id: 3,
      title: 'Moliya',
      icon: Moliya,
      isOpen: false
    },
    {
      id: 4,
      title: 'Talaba',
      icon: Talaba,
      isOpen: false,
      ChildLink: [
        { id: 1, title: 'Davomat' },
        { id: 2, title: 'Talabalar ro’yxati' },
        { id: 3, title: 'Aktiv' },
        { id: 4, title: 'Arxiv' },
        { id: 5, title: 'Ota-ona' },
      ]
    },
    {
      id: 5,
      title: 'Guruhlar',
      icon: Guruhlar,
      isOpen: false,
      ChildLink: [
        { id: 1, title: 'Guruhlar' },
        { id: 2, title: 'Dars jadvali' },
        { id: 3, title: 'Xonalar' },
      ]
    },
    {
      id: 6,
      title: 'Kurslar',
      icon: Kurslar,
      isOpen: false,
      ChildLink: [
        { id: 1, title: 'Kurslar ro’yxati' },
        { id: 2, title: 'Kurslar yo’nalishi' },
      ]
    },
    {
      id: 7,
      title: 'HR',
      icon: HR,
      isOpen: false,
      ChildLink: [
        { id: 1, title: 'Ro’llar' },
        { id: 2, title: 'Hodimlar' },
      ]
    },
    {
      id: 8,
      title: 'Sozlamalar',
      icon: Sozlamalar,
      isOpen: false,
      ChildLink: [
        { id: 1, title: 'Umumiy sozlamalar' },
        { id: 2, title: 'Manager' },
        { id: 3, title: 'O’qituvchi' },
        { id: 4, title: 'Talaba' }
      ]
    }
  ]
  const [info, setInfo] = useState(() => {
    const savedInfo = localStorage.getItem('info');
    return savedInfo ? JSON.parse(savedInfo) : data;
  });

  useEffect(() => {
  localStorage.setItem('info', JSON.stringify(data))
   
    
  }, [info]);

  const Toggle = (id) => {
    const updatedInfo = info.map(item =>
      item.id === id ? { ...item, isOpen: !item.isOpen } : item
    );
    setInfo(updatedInfo);
  };
  return (
    <div className='wrapper'>
      <Flex contents={'between'}>
        <Sidebar>
         <Flex style={{ height: '100%' }} direction={'column'} contents={'between'} >
            <div className="sidebar_top">
              <Logo href="" >
                <img src={logo} alt="" />
              </Logo>
              <Flex g={20} p={14}>
                <UserImg href="">
                  <img src={userImgs} alt="" />
                  <Status onlines="true" />
                </UserImg>
                <Flex direction={'column'} g={2}>
                  <UserName >
                    Sardorbek Muhtorov
                  </UserName>
                  <UserLink href="">s.muhtorov@gmail.com</UserLink>
                </Flex>
              </Flex>
              <ul>
                {info.map((list) => {
                  const { icon: Icon } = list
                  return (
                    <List key={list.id} onClick={() => Toggle(list.id)}  >
                      <Flex contents={'between'}>
                        <Flex g={16}>
                          <div className="icon">
                            <Icon />
                          </div>
                          <span>{list.title}</span>
                        </Flex>
                        {list.ChildLink ? <div className={`rotate_icon ${list?.isOpen && 'rotate'}`}>
                          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.97656 5.99999L0.851562 1.87499L2.0299 0.696655L7.33323 5.99999L2.0299 11.3033L0.851562 10.125L4.97656 5.99999Z" fill="#929FAF" />
                          </svg>
                        </div> : ''}

                      </Flex>
                      {list.ChildLink ?
                        list.ChildLink.map(item => (
                          <ChildLink key={item.id} className={`${list?.isOpen && 'active'}`}>
                            <a href="">{item.title}</a>
                          </ChildLink>
                        )) : ""
                      }

                    </List>
                  )
                })}
              </ul>
            </div>
            <List fixed='true'>
              <Flex>
                <Flex g={16}>
                  <div className="icon">
                    <Chiqish />
                  </div>
                  <span>Chiqish</span>
                </Flex>

              </Flex>
            </List>
         </Flex>
        </Sidebar>
        <Flex column='true' className="right_main">
          <Header />
          <Dashboard />

        </Flex>
      </Flex>

    </div>
  )
}

export default App
