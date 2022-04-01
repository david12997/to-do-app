import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const NavStyles = styled.div`

    color:white;
    background:${({theme})=>theme.colors.orange};
    width:100%;
    height:80px;
    display: flex;
    justify-content:center;
    align-items: center;
    grid-area: navbar ;
    margin-bottom:10px ;
    font-size:20px ;

    & .nav__arrow{

        font-size:25px;
        position:absolute;
        margin-left:-45% ;
        cursor:pointer;
    }

    @media(max-width:500px){

        & .nav__title{

            margin-left: 40px;
        }
    }
`;

type PropsNav = {

    setUser:any,
    setBoard:any
}

export const Nav = (props:PropsNav):JSX.Element =>{

    return<NavStyles>
        <FontAwesomeIcon 
            onClick={()=>{props.setUser(null);props.setBoard(null)}} 
            className='nav__arrow'  icon={faArrowLeft}
            data-testid="arrow"
           
        />
        <b   className='nav__title'>What do you need to do today?</b>
    </NavStyles>

}