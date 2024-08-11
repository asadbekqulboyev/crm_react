import { useState } from 'react'
import React from 'react'
import Plus1 from '../../assets/images/plus1.svg?react'
import Plus2 from '../../assets/images/plus2.svg?react'
import Plus3 from '../../assets/images/plus2.svg?react'
import TopIcon1 from '../../assets/images/top_1.svg?react'
import TopIcon2 from '../../assets/images/top_2.svg?react'
import TopIcon3 from '../../assets/images/top_3.svg?react'
import topImg1 from '../../assets/images/top_img1.png'
import topImg2 from '../../assets/images/top_img2.png'
import topImg3 from '../../assets/images/top_img3.png'
import IconSpcial1 from '../../assets/images/social1.svg?react'
import IconSpcial2 from '../../assets/images/social2.svg?react'
import IconSpcial3 from '../../assets/images/social3.svg?react'
import IconSpcial4 from '../../assets/images/social4.svg?react'
import SocialImg from '../../assets/images/end_img.svg?react'
import PLus from '../../assets/images/plus.svg?react'
import Btn from '../../assets/images/btn_icon.svg?react'
import NextSlide from '../../assets/images/next.svg?react'
import PrevSlide from '../../assets/images/prev.svg?react'
import { Flex } from '../Sidebar/sidebarStyle'
import 'react-calendar/dist/Calendar.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { DashboardContainer, Title, Section, SectionTitle, F16, Statistic, EmailList, EmailItem, CalendarWrapper, FinanceSection, MonthYear, DaysWrapper, Day, SelectedDate, Amount, PercentageChange, Legend, LegendItem, ColorDot } from './style'
function Dashboard() {
    const analysticData = [
        {
            id: 1,
            title: 'Talabalar',
            iconPlus: Plus1,
            icon: TopIcon1,
            img: topImg1,
            statistic: '285',
            bg: '#F6FFED'
        },
        {
            id: 2,
            title: 'Mentorlar',
            iconPlus: Plus2,
            icon: TopIcon2,
            img: topImg2,
            statistic: '36',
            bg: '#FFFBE6'
        },
        {
            id: 3,
            title: 'Filiallar',
            iconPlus: Plus3,
            icon: TopIcon3,
            img: topImg3,
            statistic: '3',
            bg: '#E6F7FF'
        },
    ]
    const social = [
        {
            id: 1,
            title: 'Instagram',
            icon: IconSpcial1,
            btn: Btn,
            bg: '#FFFFFF',
            statistic: '+22%',
            statisticNumber: '16k'
        },
        {
            id: 2,
            title: 'Telegram',
            icon: IconSpcial2,
            btn: Btn,
            bg: '#FFFFFF',
            statistic: '-15%',
            statisticNumber: '28k'
        },
        {
            id: 3,
            title: 'Youtube',
            icon: IconSpcial3,
            btn: Btn,
            bg: '#FFFFFF',
            statistic: '+22%',
            statisticNumber: '31k'
        },
        {
            id: 4,
            title: 'Linkedin',
            icon: IconSpcial4,
            btn: Btn,
            bg: '#FFFFFF',
            statistic: '+22%',
            statisticNumber: '2k'
        },
        {
            id: 5,
            Plus: PLus,
            img: SocialImg,
            bg: '#ADC6FF'
        }

    ]
    const emails = [
        {id:1, name: 'Salima Fayziyeva', role: 'Marketolog', subject: 'Zoom uchrashuv', time: '12:56', selected:false },
        {id:2, name: 'Marat Allaberganov', role: 'O\'qituvchi', subject: 'Yangi dars jadvali so\'rovi?', time: '11:28', selected: false },
        {id:3, name: 'Djamshid Murodov', role: 'Kurator', subject: 'Yangi talabalar ro\'yxati', time: 'Kecha 20:10',selected: false  },
        {id:4, name: 'Elmira Yusupova', role: 'HR', subject: 'Yangi mentor bilan suhbat', time: 'Kecha 16:37',selected: false  }
    ];
    const calendarData = [
        {id:1, day: 'Du', date: 22, amount: 7800000 },
        {id:2, day: 'Se', date: 23, amount: 8000000 },
        {id:3, day: 'Cho', date: 24, amount: 8520000 },
        {id:4, day: 'Pa', date: 25, amount: 7600000 },
        {id:5, day: 'Ju', date: 26, amount: 7400000 },
        {id:6, day: 'Sha', date: 27, amount: 9200000 },
        {id:7, day: 'Sha', date: 28, amount: 9200000 },
        {id:8, day: 'Sha', date: 29, amount: 9200000 },
        {id:9, day: 'Sha', date: 30, amount: 9200000 },
    ];
    const [emailj,setEmail]=useState(emails)
    const [selectedDay, setSelectedDay] = useState(2); // Default selected day (index)
    const handleDayClick = (index) => {
        setSelectedDay(index);
    };
    const Selecteds = (id)=>{
        const emailUpdate= emails.map((val)=>
            val.id === id ? { ...val, selected: !val.selected } : val
        ) 
        setEmail(emailUpdate)
        }
    const currentAmount = calendarData[selectedDay].amount;
    const previousAmount = selectedDay > 0 ? calendarData[selectedDay - 1].amount : currentAmount;
    const percentageChange = ((currentAmount - previousAmount) / previousAmount) * 100;
    const ispositive = percentageChange >= 0;
    return (
        <DashboardContainer>
            <Title>Analitika</Title>
            <Flex contents={'between'} direction={'row'} style={{ width: '100%', paddingTop: '16px' }} g={24}>
                {analysticData.map((item) => {
                    const { iconPlus: Plus, icon: Icon } = item
                    return (

                        <Flex key={item.id} contents={'between'} style={{ background: item.bg, padding: '24px 0 0 24px', borderRadius: '8px', width: '100%' }}>
                            <Flex direction={'column'} contents={'between'} style={{ width: '100%' }}>
                                <Flex contents={'between'} style={{ paddingRight: '24px', width: '100%' }}>
                                    <Flex style={{ alignItems: 'center' }} g={16}>
                                        <Icon />
                                        <Title>{item.title}</Title>
                                    </Flex>
                                    <Plus />
                                </Flex>
                                <Flex contents={'between'} style={{ alignItems: 'center', width: '100%' }}>
                                    <h2 className='text_md'>{item.statistic}</h2>
                                    <img src={item.img} alt="" />
                                </Flex>
                            </Flex>
                        </Flex>

                    )
                }
                )}
            </Flex>
            <Section>
                <SectionTitle>Ijtimoiy tarmoqlar</SectionTitle>
                <Flex style={{ paddingTop: '16px' }} contents={'between'} g={8} >
                    {social.map(val => {
                        const { icon: Icon, btn: Dot, Plus: P, img: Img } = val
                        return (
                            <Flex key={val.id} direction={'column'} contents={'between'} style={{width:'100%', padding: '24px', border: '1px solid #F0F0F0', background: val.bg, borderRadius: '8px' }}>
                                {val.Plus ? <Flex contents={'end'}><a href=""> <P /> </a></Flex> :
                                    <Flex contents={'between'} g={32} style={{ alignItems: 'center' }}>
                                        <Flex g={16} style={{ alignItems: 'center' }}>
                                            <a href="">{val.icon ? <Icon /> : ''}</a>
                                            <F16>{val.title ? val.title : ''}</F16>
                                        </Flex>
                                        {val.btn ? <Dot /> : ''}
                                    </Flex>
                                }
                                {val.statistic ?
                                    <Flex contents='between'>
                                        <Statistic text={'sm'}>{val.statistic}</Statistic>

                                        <Statistic >{val.statisticNumber}</Statistic>
                                    </Flex> : <Flex> <Img /></Flex>}

                            </Flex>
                        )
                    })}
                </Flex>
            </Section>
            <Section>
                <Flex contents={'between'}>
                    <EmailList>
                        {emailj.map((email) => (
                            <EmailItem onClick={()=>Selecteds(email.id)
                            } key={email.id} selected={email.selected}>
                                <input type="checkbox"  />
                                <Flex>
                                <img src={`https://i.pravatar.cc/150?img=${email.id}`} alt={email.name} />
                                <div>
                                    <div>{email.name}</div>
                                    <div>{email.subject}</div>
                                </div>
                                </Flex>
                                
                                <div style={{ marginLeft: 'auto' }}>{email.time}</div>
                            </EmailItem>
                        ))}
                    </EmailList>
                    <FinanceSection>
                        <CalendarWrapper>
                            <Flex contents={'between'} g={15} style={{width:'100%',alignItems:'center'}}> <div className='swiper_prev btn'><PrevSlide /></div> <MonthYear>Fevral 2023</MonthYear> <div className='swiper_next btn'><NextSlide /></div></Flex>
                            
                            <DaysWrapper>
                                <Swiper navigation={{
                                    nextEl: ".swiper_next",
                                    prevEl: ".swiper_prev",
                                }} modules={[Navigation]} className="mySwiper"
                                    slidesPerView={6}
                                    spaceBetween={8}
                                >
                                    {calendarData.map((item, index) => (
                                        <SwiperSlide key={item.id}>
                                            <Day
                                                
                                                isselected={index === selectedDay}
                                                onClick={() => handleDayClick(index)}
                                            >
                                                <span>{item.day} </span><span>{item.date}</span>
                                            </Day>
                                        </SwiperSlide>

                                    ))}
                                </Swiper>
                            </DaysWrapper>

                            <Flex style={{ width: '100%' }} g={16}>
                                <Flex direction={'column'}>
                                    <SelectedDate>{calendarData[selectedDay].date}-Fevral, 2023</SelectedDate>
                                    <Amount>{currentAmount.toLocaleString()}</Amount>
                                </Flex>
                                <PercentageChange ispositive={toString(ispositive)}>
                                    {ispositive ? '↑' : '↓'} {Math.abs(percentageChange).toFixed(2)}%
                                </PercentageChange>
                            </Flex>


                            <Legend>
                                <LegendItem>
                                    <div>
                                        <ColorDot color="#00CC66" />
                                        Talabalar
                                    </div>
                                    <div>5 760 000</div>
                                </LegendItem>
                                <LegendItem>
                                    <div>
                                        <ColorDot color="#D8A1F2" />
                                        Darsliklar sotuvi
                                    </div>
                                    <div>2 180 000</div>
                                </LegendItem>
                            </Legend>
                        </CalendarWrapper>
                    </FinanceSection>
                </Flex>

            </Section>


        </DashboardContainer>
    )
}

export default Dashboard;