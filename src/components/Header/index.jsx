import { HeaderContainer, } from './style'
import { Flex } from '../Sidebar/sidebarStyle'
import SearchIcon from '../../assets/images/search.svg?react'
import Select from 'react-select';
import { useState, forwardRef } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
function Header() {
    const [selectedOption, setSelectedOption] = useState({ value: 'uz', label: "O'zbekcha" });

    const options = [
        { value: 'uz', label: "O'zbekcha" },
        { value: 'ru', label: 'Русский' },
        { value: 'en', label: 'English' },
    ];
    const customStyles = {
        control: (base) => ({
            ...base,
            borderColor: '#c5c5c5',
            minWidth: 150,
        }),
        singleValue: (base) => ({
            ...base,
            color: '#374151', // text color
        }),
        dropdownIndicator: (base) => ({
            ...base,
            color: '#c5c5c5', // dropdown icon color
        }),
    };
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const CustomInput = ({ value, onClick }) => (
        <div onClick={onClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#374151', fontSize: '14px', marginRight: '4px' }}>
            {format(new Date(value), 'd-MMMM')}
          </span>
          <span style={{ color: '#c5c5c5', fontSize: '14px' }}>
            {format(new Date(value), 'yyyy')}
          </span>
        </div>
      );
    

    return (
        <HeaderContainer>
            <Flex contents={'between'} >
                <form action="">
                    <div className="input">
                        <input type="text" placeholder='Izlash' />
                        <button><SearchIcon /></button>
                    </div>
                </form>
                <Flex g={20} style={{alignItems:'center'}}>
                    <Flex className='time'>
                        <span>17:38 </span>
                        <span className='disablet'>PM</span>
                    </Flex>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd MMMM yyyy"
                        customInput={<CustomInput />}
                    />
                    <Select
                        value={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        styles={customStyles}
                        isSearchable={false} // Remove search functionality
                        placeholder="Tilni tanlang"
                    />
                </Flex>
            </Flex>

        </HeaderContainer>
    )
}

export default Header