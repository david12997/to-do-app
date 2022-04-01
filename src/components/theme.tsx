import styled from "styled-components";

export const theme = {

    colors:{
        orange:'orange',
        white:'white',
        black:'black',
        red:'red',
        green:'green',
        gray:'#edede5'
    },
    areas:` "navbar navbar"
            "main main"
            "tasks tasks"
            "footer footer"
    `,
    
}

const PageStyle = styled.div`

    width: 100%;
    height:100%;
    overflow-y:hidden;
    overflow-x:hidden ;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 3fr 4fr 1fr ;
    grid-template-areas: ${({theme})=>theme.areas} ;
    

`;

export const Page =(props:any):JSX.Element=>{

    return<PageStyle>
        {props.children}
    </PageStyle>
}