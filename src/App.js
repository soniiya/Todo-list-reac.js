import React,{useState,useRef} from "react";
import "./App.css";

function App(){

  const [todoList, setTodolist] = useState([]);
  const [currentTask,setCurrenttask]=useState("");
  
  const inputTask=useRef(null);

  const addTask = () =>{
   setTodolist([...todoList, {task: currentTask, completed: false}]);
   inputTask.current.value ="";
  }

  const deletetask = (taskToDelete)=>{
    setTodolist(
      todoList.filter((task)=>{               // will filter that task which is not equal to value(todeleteatsk) 
                                              // rest will be printed.
      return task.task !== taskToDelete;
    }))
  }

  const completetask = (taskTocomplete)=>{
    setTodolist(
      todoList.map( (task) =>{
        return task.task === taskTocomplete 
        ? { task: taskTocomplete , completed:true} 
        : {task: task.task, completed: task.completed ? true : false}
      })
    )
  }
  return (
    <div className="App">
    <h1>TODO-LIST</h1>
    <div>
      <input 
      ref={inputTask}
       type="text" placeholder="Type here..."
       onKeyDown={(e) =>{
         if(e.keyCode == 13) addTask();
       }} 
        onChange = {(e) =>{
        setCurrenttask(e.target.value)
        }}
      />
      <button onClick={addTask}>Add task</button>
    </div>
    <hr />
    <ul>
      {todoList.map((value,key)=>{
        return(
          <div id="task">
          <li key={key}> {value.task}</li>
          <button id="complete_btn" onClick={()=> completetask(value.task)  }>Completed</button>
          <button id="del_btn" onClick={() => deletetask(value.task) }>Delete</button>
          {value.completed ? <h1>Completed task</h1> : <h1>Not completed</h1>}
          </div>
        )
      })}
    </ul>
  
    </div>
  );
  }

export default App;
