import styled from "styled-components";
function Direction(props) {    
    if (props === 'column') {
        return 'column';
    } else {
        return 'row';
    }
}
function Contents(props) {
    
    if (props === 'between') {
        return 'space-between';
    } else if(props === 'center') {
        return 'center';
    } else if(props === 'start') {
        return 'flex-start';
    }else if(props === 'end') {
        return 'flex-end';
     } else{
        return ''
    }
}
export const Sidebar = styled.div`
width: 280px;
flex: 0 0 auto;
background-color: #162539;
height: 100vh;
overflow: auto;
position: sticky;
top: 0;
left: 0;
z-index: 222;
&::-webkit-scrollbar{
display: none;
}
`
export const Logo=styled.a`
display:block;
border-bottom: 1px solid #253E5F;
padding: 16px 0 16px 24px;
position: sticky;
background:#162539;
top: 0;
left: 0;
z-index: 111;
width: 280px;
`
export const Flex = styled.div`
display: flex;
flex-direction:${(props) => Direction(props.direction)};
gap:${(props) => (props.g>0 ?props.g+'px': '0')} ;
padding:${(props) => (props.p>0 ?props.p+'px': '0')} ;
justify-content: ${(props)=>Contents(props.contents)};
`
export const Status = styled.span`
background:${(props) => (props.onlines ? '#52C41A' : '#666666')};
width: 10px;
height: 10px;
border-radius: 50%;
display: inline-block;
position: absolute;
bottom: 0;
right: 0;
`
export const UserImg = styled.a`
position: relative;
width: 48px;
height: 48px;
border-radius: 50%;
img{
    width: 100%;
    object-fit: cover;
}
`
export const UserName = styled.div`
font-size: 14px;
font-weight: 600;
line-height: 20px;
text-align: left;
color: #fff;
`
export const UserLink = styled.a`
color: #929FAF;
font-size: 12px;
font-weight: 500;
line-height: 20px;
text-align: left;
`
export const Lists = styled.ul`
/* display: flex;
flex-direction: column; */
`
export const List = styled.div`
cursor: pointer;
padding: 12px 24px;
font-size: 14px;
font-weight: 500;
line-height: 20px;
text-align: left;
color: #F8FAFC;
transition: all .2s linear;
user-select: none;
position:${ (props)=>(props.fixed?'fixed':'')};
bottom: 0;
background:#162539;
width:${ (props)=>(props.fixed?'280px':'100%')};
&:last-child{
border-top: 1px solid #253E5F;
padding: 24px;
}
svg{
    transition: all .2s linear;
}
&:hover{
color: #1890FF;
background:#253E5F;
a{color:#F8FAFC}
svg path{
    fill: #1890FF;
}
}
`
export const ChildLink= styled.div`
list-style: none;
transition: all .2s linear;
height: 0;
overflow-y:hidden;
padding: 0 34px  ;
&.active{
padding: 14px  0 14px 34px;
 height: auto;
}
a{
color: #F8FAFC;
transition: all .3s linear;
&:hover{
    color: #1890FF;
}
}
`
export const Btns = styled.div`
cursor: pointer;
`