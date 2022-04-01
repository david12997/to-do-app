import styled from "styled-components";
import { Card } from "./card";


const StyleBoard = styled.div`

    grid-area:tasks ;
    padding:10px;
    display: flex;
    align-items:center ;
    margin-bottom:10px ;
    overflow-x: scroll ;

    &::hover{
        overflow-x: scroll ;
    }
    & .board__message{

        display:flex ;
        width:100% ;
        justify-content:center ;
        color:gray ;
    }
`;

type PropsBoard = {

    user:string,
    tasks:any,
    setBoard:any,

}

export const Board = (props:PropsBoard):JSX.Element =>{



    return<StyleBoard>
        {
            (props.tasks !== null &&  props.tasks.tasks.length !== 0)
            ?
            props.tasks.tasks.map((task:any,index:number)=><Card idTask={index} setBoard={props.setBoard} user={props.user} do={task.do} status={task.status} date={task.date} key={index} />)
            :
            <h3 className="board__message">You don't have any task yet</h3>
           
            
        }
    
    </StyleBoard>
    
}