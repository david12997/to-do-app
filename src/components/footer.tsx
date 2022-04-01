import styled from "styled-components";

const StyleFooter =  styled.div`

    grid-area:footer ;
    background:${({theme})=>theme.colors.orange} ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    font-family:cursive ;
    color:${({theme})=>theme.colors.white}; ;

`;

export const Footer = ():JSX.Element =>{

    return<StyleFooter>

        <p>Developed by David Castañeda</p>
           
    </StyleFooter>
}