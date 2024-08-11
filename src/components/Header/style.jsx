import styled from "styled-components";
export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #FFFFFF;
    padding: 10px 10px;
    box-shadow: 0px 8px 19px 0px #F5F6F8;
    form{
        padding-left: 285px;
    }
    .input{
        position: relative;
        button{
            position:absolute;
            left:16px;
            border: none;
            background:none;
            top: 10px;
        }
    input{
       height: 40px;
       border-radius: 8px;
       border:1px solid #F0F0F0;
       opacity: 0px;
       width: 500px;
       padding: 10px 16px 10px 34px;
       font-size: 14px;
       font-weight: 500;
       line-height: 20px;
       text-align: left;
       outline: none;
       transition: all .2s linear;
       &:focus{
        border-color: #b3b3b3;
       }
   }
    }
   
`