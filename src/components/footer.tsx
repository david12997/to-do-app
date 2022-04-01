import styled from "styled-components";

const StyleFooter =  styled.div`

    grid-area:footer ;
    background:orange ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    font-family:cursive ;
    color:white ;

`;

export const Footer = ():JSX.Element =>{

    return<StyleFooter>

        <p>Developed by David Castañeda</p>
           
    </StyleFooter>
}