import styled from "styled-components";
export const DashboardContainer = styled.div`
    background: #FFFFFF;
    padding: 19px 24px;
    margin-top:73px;
    margin-left: 12px;
    border-radius: 8px;
    width: 100%;
    flex:0 0 1;
    height: calc(100vh - 73px) ;
    overflow-y: auto;
    &::-webkit-scrollbar{
        display: none;
    }
`
export const Title = styled.h2`
font-size: 20px;
font-weight: 600;
line-height: 28px;
text-align: left;
`
export const SectionTitle = styled.h2`
font-size: 16px;
font-weight: 500;
line-height: 24px;
text-align: left;

`
export const Section = styled.section`
    padding-top: 24px;
`
export const F16 = styled.div`
font-size: 16px;
font-weight: 500;
line-height: 24px;
text-align: left;

`
export const Statistic = styled.div`
font-size:${(props)=>props.text=='sm'? '24px' : '40px' }  ;
font-weight: ${(props)=>props.text=='sm'? '500' : '600' } ;
line-height: 56px;
text-align: left;
color:${(props)=>props.text=='sm'? '#52C41A' : '#253E5F' } ;
`

export const EmailSection = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const FinanceSection = styled.div`
  width: calc(40% - 7.5px);

`;

export const EmailList = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: calc(60% - 7.5px);
`;

export const EmailItem = styled.label`
gap: 0 16px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${props => props.selected ? '#eef4fe' : 'transparent'};
  
  &:hover {
    background-color: #f5f5f5;
  }

   img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;


export const FinanceInfo = styled.div`
  text-align: center;
  margin-top: 20px;

  & > h1 {
    font-size: 36px;
    margin: 10px 0;
  }

  & > h2 {
    color: green;
  }
`;


export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 24px;
  background-color:#FFFFFF;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  border: 1px solid #F0F0F0;
`;

export const MonthYear = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const DaysWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

export const Day = styled.div`
  padding: 15px 12px;
  display: flex;
  flex-direction: column;
  min-width: 48px;
  text-align: center;
  justify-content: center;
  gap: 3.5px;
  border-radius: 24px;
  background-color: ${props => (props.isselected ? '#3399FF' : '#E6E6E6')};
  color: ${props => (props.isselected ? '#fff' : '#000')};
  cursor: pointer;
  flex: 0 0 auto;
font-size: 12px;
font-weight: 500;
line-height: 20px;
text-align: left;
span{text-align:center;}
`;

export const SelectedDate = styled.div`
  font-size: 14px;
  color: #999999;
`;

export const Amount = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

export const PercentageChange = styled.div`
  font-size: 16px;
  color: ${props => (props.ispositive ? '#00CC66' : '#FF3333')};
  display: flex;
  align-items: center;
`;

export const Legend = styled.div`
  margin-top: 20px;
  width: 100%;
`;

export const LegendItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const ColorDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.color};
  display: inline-block;
  margin-right: 10px;
`;
