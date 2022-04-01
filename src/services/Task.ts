
interface TasksUser{

    user:string,
    date:Date

}

export class  Task implements TasksUser{

    
    public user:string;
    public date:Date;
    private tasksUser:any;

    constructor(user:string,date:Date){

        this.user =  user;
        this.date = date;
        this.tasksUser = this.tasksUser;


    }

    private SaveTasks(task:object):boolean{

        const tasks =  {

            user:this.user,
            tasks: [task],
            date_created:this.date
            
        };
        const data:string | null = localStorage.getItem(this.user);

        if (data === null || typeof data !== 'string'){
            
            localStorage.setItem(this.user,JSON.stringify(tasks));
            return true;

        }else {

            this.tasksUser = JSON.parse(data);
            this.tasksUser.tasks.push(task)
            
            //update localstorage
            localStorage.setItem(this.user,JSON.stringify(this.tasksUser));
            return true;
            
        
        }
        
    }

    private UpdateTask(idTask:number,messages:string[],type:string,newTask:any|null):string | true{

        const data:string | null = localStorage.getItem(this.user);

        if (data === null || typeof data !== 'string') return messages[0];
        else try{
            
            this.tasksUser = JSON.parse(data);

            if (idTask > this.tasksUser.tasks.length   || idTask < 0) return messages[1];

            if (type === 'edit')  this.tasksUser.tasks[idTask] = newTask;//edite task 
            else if( type === 'delete') this.tasksUser.tasks.splice(idTask,1); //delete task 
            else return 'type invalid try again';
            
            //update localstorage
            localStorage.setItem(this.user,JSON.stringify(this.tasksUser));
            return true;

        }catch (error) {
            
            return `${messages[2]} ${error} `;
        }
    }
    

    CreateTask(task:object):true | string {

        if( typeof task !== 'object' || Object.keys(task).length === 0  ) return 'create task failed task is empty or task is not an object';
        
        if (this.SaveTasks(task)) return true

        else return ` create task failed localstorage save task and set localstorage failed or localstorahe don'n supported`;
        
    }

    GetTask():object | false{

        if (typeof this.tasksUser !==  'object' || Object.keys(this.tasksUser).length === 0 ){

            const data:string | null = localStorage.getItem(this.user);

            if (data === null || typeof data !== 'string') return false;
            else return  JSON.parse(data);

        }else{

            return this.tasksUser;
        }

    }

    DeleteTask(idTask:number){

        const message = [
            
            `User ${this.user} does not tasks added`,
            'idTask incorrect, check your idTask',
            `Ups, we can't  delete the task error:`
    
        ]
  
        return this.UpdateTask(idTask,message,'delete',null)
    }

    EditTask(idTask:number,newTask:any){

        const message = [
            
            `User ${this.user} does not tasks added`,
            'idTask incorrect, check your idTask',
            `Ups, we can't  edit the task error:`
    
        ]

        return this.UpdateTask(idTask,message,'edit',newTask)
    }
}