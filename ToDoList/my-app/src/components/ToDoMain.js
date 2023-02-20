import React from 'react'
import Task from './Task';

export default function ToDoMain() {
    const [task, setTask] = React.useState("");
    const [taskArray, setTaskArray] = React.useState([]);

    const onTaskChange = (event) =>{
        setTask(event.target.value);
    }

    const addTask = () =>{
        if(task !== ""){
            setTimeout(()=>{
                setTaskArray((prevTasks) => {
                    return [...prevTasks,task]
                }); // Does not re render here
                console.log(taskArray);
                setTask(""); 
            },1000)
            
        }
    }

    const deleteItem = (id) => {
        setTaskArray((prevTasks)=>{
            return prevTasks.filter((ele,index) => index !== id)
        })
    }

    console.log(taskArray);

  return (
    <div>
        <h1> ToDo List App</h1>
        <input type="text" value={task} placeholder="Add a task" onChange={onTaskChange}/>
        <button onClick={addTask}> Add </button>
        <ol>
            {
                taskArray.map((val,index) => {
                    return  <Task key={index} id={index} text = {val} onDelete ={deleteItem} />
                } )

            }
        </ol>
    </div>
  )
}
