import styled from "styled-components";

const StyleUser = styled.div`

    grid-area: main ;
    background:${({theme})=>theme.colors.white};
    margin-bottom:30px ;

    & .user{

        display:flex ;
        justify-content:space-around ;
        flex-wrap:wrap ;
    }

    & .user__image{

        margin-bottom:10px ;
    }

    & .user__image, .user__form{

        width:330px;
    }

    & .user__formLabel{

        width:100%;
        display:flex;
        justify-content:center ;
        font-size:20px ;
        margin-bottom:15px ;
    }

    & .user__formInput{

        width:100%;
        border:0px ;
        box-shadow:3px 3px 10px rgba(0,0,0,0.3);
        height:45px ;
        border-radius: 8px;
        margin-bottom:30px ;
    }

    & .user__formButton{

        width:101%;
        height:50px;
        background:black ;
        color:${({theme})=>theme.colors.white};
        font-family:cursive ;
        font-size:20px;
        border:0px;
        border-radius:8px ;
        box-shadow:4px 4px 5px rgba(0,0,0,0.5);
        cursor:pointer;
    }

    & .user__formButton:active{
        width:98%;
        height:48px;
    }
   


`;

type PropsNewUser = {

    setUser:any
}

export const User = (props:PropsNewUser):JSX.Element =>{


    const CreateUser = (e:any):void=>{

        e.preventDefault();

        if(e.target[0].value !== ""){
            
            props.setUser(e.target[0].value);
        }
        

    }

    return<StyleUser>

        <div className="user">

            <div className="user__image">
                <img  alt="image nootebok task" width='100%' src="img/notebook-task.png"></img>
            </div>
            <form onSubmit={(e)=>CreateUser(e)} className="user__form">
                <label className="user__formLabel"><b>Create your user :</b></label>
                <input placeholder=" Write your new or existing user" className="user__formInput" type='text' ></input>
                <button className="user__formButton" type="submit"> Start now </button>
            </form>
        </div>

    </StyleUser>
}