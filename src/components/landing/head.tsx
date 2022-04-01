import { faListCheck, faTasksAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyleHead = styled.div`

    grid-area: navbar ;
    background:orange ;
    height:70px;

    & .head__nav{

        display:flex;
        justify-content:center ;
        align-items:center ;
        font-size:22px ;
        height:100% ;
        font-family: cursive;
        color:white;
        text-shadow:0px 0px 6px rgba(0,0,0,0.4) ;
    }


`;

export const Head = ():JSX.Element =>{


    return<StyleHead>

        <div className="head__nav">
            <FontAwesomeIcon style={{marginRight:'8px'}} icon={faListCheck} />
            <span>Task Manager</span>
        </div>

    </StyleHead>
}