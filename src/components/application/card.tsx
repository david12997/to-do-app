import styled from "styled-components";

import { formatDistance, formatRelative, setDate, subDays } from 'date-fns';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faFilePen } from "@fortawesome/free-solid-svg-icons";
import { Task } from "../../services/Task";
import { useRef, useState } from "react";


const StyleCard = styled.div`

    width:330px;
    height: 200px;
    margin:10px;
    position:relative ;
    padding:5px ;
    position: relative ;

    & .card__body{

        width:330px;
        height:200px;
        border-radius:6px;
        box-shadow:2px 2px 15px rgba(0,0,0,0.3);
        background:#edede5;
        position:relative ;
    }

    & .card__title{

        display:flex;
        justify-content:center;
        padding:7px ;
        font-size:18px ;
        color:black;
    }

    & .card__status, .card__changeState{

        width:100%;
        padding:7px ;
        color:gray;
        font-family:cursive;
    }

    & .card__date{

        font-family:cursive;
        display: flex;
        justify-content:center ;
        color:gray;
    }

    & .card__state--pending{

        color:red;
    }
    & .card__state--working{

        color:orange;
    }
    & .card__state--finished{

        color:green;
    }

    & .card__actions{

        display:block;
        position:absolute;
        left:77%;
        bottom:17% ;
        
    }
    & .card__btn{

        margin-bottom:35px ;
        display:flex ;
        justify-content:end ;
        align-items:center ;
        cursor: pointer;
        font-family:cursive;

    }

    & .card__btn--delete{

        color:red
    }

    & .card__btn--edit{

        color:#ff8100
    }

    & .card__inputEdit{

        position:absolute ;
    }
`;

type propsCard = {

    do:string,
    status:string,
    date:string,
    user:string,
    idTask:number,
    setBoard:any

}

export const Card = (props:propsCard):JSX.Element =>{


    const [inputEdit, setInputEdit] = useState<true | null>(null);


    const EditTask = ():void =>setInputEdit(true);
    const UpdateTask = (e:any, type:string):void =>{

        const task = new Task(props.user,new Date());

        if(type === 'name'){

            if(e.key === 'Enter'){

                const newTask = {do:e.target.value, status:props.status,date:props.date};
                if (!task.EditTask(props.idTask, newTask)) alert('Ups somthing do not work try again');
                else task.GetTask() !== false && props.setBoard(task.GetTask());
                setInputEdit(null);
    
            }
        
        }else if(type === 'status'){

            const newTask = {do:props.do, status:e.target.value,date:props.date};
            if (!task.EditTask(props.idTask, newTask)) alert('Ups somthing do not work try again');
            else task.GetTask() !== false && props.setBoard(task.GetTask());
            setInputEdit(null);
        
        }else alert('type is wrong check your type at updateTask');


    }

    const DeleteTask =  ():void =>{

        const task = new Task(props.user,new Date());
        if (!task.DeleteTask(props.idTask)) alert('Ups somthing do not work try again');
        else task.GetTask() !== false && props.setBoard(task.GetTask());
        
    }

    const SetDate = (type:number):string=>{

        if (type === 1) return 'This task was created '+formatRelative(new Date(props.date),new Date());
        else return 'This task was created '+formatDistance(new Date(props.date),new Date()) + ' ago';
        
    }

    return <StyleCard>
        <div className="card__body">

            <div className="card__title">
                { inputEdit !== null 
                    && 
                    <input 
                        onBlur={()=>setInputEdit(null)} 
                        autoFocus 
                        defaultValue={props.do} 
                        className="card__inputEdit" 
                        type='text'
                        onKeyDownCapture={(e)=>UpdateTask(e,'name')}
                    />

                }
               <b>{props.do}</b>
            </div>
            <div className="card__status">
                <p>
                    Status task:  
                    { 
                        props.status === 'red' 
                        ? 
                        <span className="card__state--pending"> Pending</span>
                        :
                        props.status === 'orange'
                        ?
                        <span className="card__state--working"> Working</span>
                        :
                        <span className="card__state--finished"> Finished</span>
                    }
                </p>
           </div>
            <div className="card__changeState">
                <label>Change state: </label>
                <select onChange={(e)=>UpdateTask(e,'status')} name="sate-task">
                    <option value='red'>Pending</option>
                    <option value='orange'>Working</option>
                    <option value='green'>Finished</option>
                </select>
            </div>
            <div className="card__actions">

               <div onClick={()=>EditTask()} className="card__btn card__btn--edit">
                   <small>Edit </small>  
                   <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faFilePen}/> 
                </div>
               <div onClick={()=>DeleteTask()} className="card__btn card__btn--delete">
                   <small>Delete </small> 
                    <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faDeleteLeft}/>
                </div>

            </div>

            <br></br>

            <div className="card__date">
               <small>{SetDate(2)}</small>
            </div>

        </div>
    </StyleCard>

}