import styled from "styled-components";


const StyleSection = styled.div`

    grid-area:tasks ;
    padding-top:20px ;

    & .section{

        width:100%;
    }

    & .section__title{

        width:100%;
        height:55px ;
        display:flex ;
        justify-content:center ;
        align-items:center ;
        color: ${({theme})=>theme.colors.black};
        font-size:20px ;
    }

    & .section__content{

        width:100%;
        display:flex ;
        justify-content:space-around;
        flex-wrap:wrap ;
    }

    & .section__features{

        width:100% ;
        padding:20px ;
        font-family:cursive ;
        font-size:18px ;
        color:gray ;
    }
    & .section__image{
        width:90%;
       
    }

    & img{
        border-radius:20px ;
    }
    & li{
        margin-bottom:10px ;
    }

    @media(min-width:700px){

        & .section__image{

            width:550px;
        }

        & .section__features{

            padding:20px ;
            width:450px ;
        }
    }


`;

export const Section = ():JSX.Element =>{

    return<StyleSection>
        <div className="section">
            <hr></hr>
            <div className="section__title">
                <b>¡Manage your time, be productive!</b>
            </div>
            <br></br>
            <div className="section__content">
                <div className="section__features">
                    <li>Manage your time as you want</li>
                    <li>Be more productive,become the owner of your time</li>
                    <li>Create your tasks and manage it </li>
                    <li>Create multi-users and manage your task more organizate and focus</li>
                </div>
                <div className="section__image">
                    <img alt="image board task" width='100%' src="img/board-1.png"></img>
                </div>
                
            </div>

        </div>
    </StyleSection>
}