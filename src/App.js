import React,{useState} from 'react'
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  const[showAdd,setShowAdd]=useState(false);


  const[tasks,setTasks]=useState([{
    id:1,
    text:'i can do it',
    isMarked: false,
    remainder:false
}]);

  const TaskAdded =(task )=>{

    const id=Math.floor(Math.random()*1000);
    const newtask={id,...task  };
    setTasks([...tasks,newtask]);

  }

  

  const deleteTask=(id)=>{
    setTasks(tasks.filter(task=>task.id!==id));

  }
 
  const toggleRemainder=(id)=>{

    setTasks(
      tasks.map(task=> task.id === id ?
        {...task,remainder: !task.remainder  } : task )
    )

  }
  return (
    <div className="container">
      
      
       <Header title='Task Tracker' onAdd={()=>{setShowAdd(!showAdd)}} showAdd={showAdd}   />
       {showAdd && <AddTask onAdd={TaskAdded} /> }
       {tasks.length >0  ? 
       <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />
        : 'Hurray..Nothing Pending ' }
    </div>
  );
}

export default App;
