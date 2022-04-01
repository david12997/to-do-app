import {Task} from '../../services/Task';


test('Instance and properties of task',()=>{
    const date = new Date();
    const task:object =  new Task('Juanito',date);

    expect(task).toBeInstanceOf(Task);
    expect(task).toHaveProperty('date',date);
    expect(task).toHaveProperty('user','Juanito');

});

test('Create task success', ()=>{

    const myTask = 'Study english 1';
    const dataContext:object = {

        yourKey:["your data",myTask]
        
    }
    const task =  new Task('Mari', new Date());

    expect(task.CreateTask(dataContext)).toBeTruthy();


});

test('Create task failed', ()=>{

    const dataContext:object = {};

    const task =  new Task('Jose', new Date());
    expect( typeof task.CreateTask(dataContext)).toBe('string');


});

test('Get task success',()=>{

    const date:Date = new Date();
    const user = 'Jose'
    const myTask = 'Study english 2';
    const dataContext:object = {

        yourKey:["your data",myTask]
        
    };

    const tasks =  new Task(user,date );
    expect(tasks.CreateTask(dataContext)).toBeTruthy();
    expect(tasks.GetTask()).toMatchObject({user:user,date_created:date.toISOString(),tasks:[dataContext]});

});

test('Get task Failed',()=>{

    const task =  new Task('Santiago', new Date());
    expect(task.GetTask()).toBeFalsy();
});


test('Delete one task',()=>{

    const task =  new Task('Santiago', new Date());
    const myTask = 'Study english 3';
    const index = 0;
    const dataContext:object = {

        yourKey:["your data",myTask]
        
    };
    expect(task.CreateTask(dataContext)).toBeTruthy();
    expect(task.DeleteTask(index)).toBeTruthy();
});

test('Delete one task',()=>{

    const task =  new Task('Santiago', new Date());
    const myTask = 'Study english 3';
    const index = 99;
    const dataContext:object = {

        yourKey:["your data",myTask]
        
    };
    expect(task.CreateTask(dataContext)).toBeTruthy();
    expect(typeof task.DeleteTask(index)).toBe('string');
});

test('Edite one task',()=>{

    const task =  new Task('Santi', new Date());
    const myTask = 'Study english 4';
    const index = 0;
    const dataContext:object = {

        yourKey:["your data",myTask]
        
    };

    const taskUpdate:object = {yourKey:["task update",'New task']};

    expect(task.CreateTask(dataContext)).toBeTruthy();
    expect(task.EditTask(index,taskUpdate)).toBeTruthy();
})