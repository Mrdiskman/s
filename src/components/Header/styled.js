import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    height: fit-content;
    width: 100vw;
    justify-content: center;
    align-items: center;
    .textContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center 
    }

    .photo{
        max-width: 320px;
    }

    .headerMainContent{
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background-color:#f8f8ff;
    }

    .title{
        font-size: 18px;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        display: flex;
        flex-wrap: wrap;
        width: 70%;
    }

    .paragraph{
        color: #846aff;
        margin-left: 5px;
        margin-right: 5px;
    }
    
    .secondParagraph{
        display: flex;
        text-align: start;
        font-size: 16px;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        margin-top: 24px;
        width: 70%;
    }

    .search{
        background-color: #846aff;
        color: #FFFFFF;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: 13px;
        margin-top: 24px;
        margin-bottom: 24px;
        height: 40px;
        border-radius: 5px;
    }
    .divButton{
        width: 100%;
        display: flex;
        padding-left: 30%;
    }
    .search:hover{
        transition: 0.9s;
        color: black;
        text-decoration: underline;
    }
    @media (min-width: 769px){
        flex-direction: row;
        .headerMainContent{
            flex-direction: row;
        }
    }
`