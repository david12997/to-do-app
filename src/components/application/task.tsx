import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Task } from "../../services/Task";


const SearchStyles = styled.div`

    grid-area:main ;
    background:#edede5 ;
    display: flex;
    justify-content:center ;
    align-items:center ;
    
    & .search{

        width:300px;
        height: 50px;
        background:white ;
        border:0px;
        box-shadow:4px 4px 6px rgba(0,0,0,0.4);
        border-radius:7px ;
    }

`;

type propsSearch = {

    user:string,
    setBoard:any,

} 

export const Search = (props:propsSearch):JSX.Element =>{

    useEffect(()=>{

        const data:string | null = localStorage.getItem(props.user);

       if (data !== null && typeof data === 'string' && data !== '' ) props.setBoard(JSON.parse(data))

    },[])

    const inputValue = useRef(null);
    const AddTask = (e:React.KeyboardEvent, value:any)=>{

        let task = value.current.value;
        if(e.key === 'Enter'){

            if( task === '') return alert(`You can't add empty task`);
            else{
                
                const CreateTask = new Task(props.user,new Date);
                CreateTask.CreateTask({do:task,status:'red',date:new Date});
                
                //clean input
                value.current.value = '';

                //set board tasks
                props.setBoard(CreateTask.GetTask());
            }

        } 
    

       
    }

    return<SearchStyles>
        <div>
            <p><b> ¡Hello {props.user}! add your task here</b></p>
            <input  ref={inputValue} onKeyUp={(e)=>AddTask(e, inputValue)} type="text" placeholder=" Write your task" className="search"/>
        </div>
      
    </SearchStyles>
}