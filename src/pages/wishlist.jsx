import React, {useState} from 'react';
import '../index.css'
import { Link } from 'react-router-dom';

function Wishlist(){
    const [task, setTask] = useState(''); 
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    
    const handleInputChange = (event) => {
        setTask(event.target.value); 
    };

    
    const addTask = () => {
        if (task.trim() !== '') { 
            setTasks([...tasks, task]); 
            setTask(''); 
        }
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') { 
            addTask(); 
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    
    const editTask = (index, newTask) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = newTask;
        setTasks(updatedTasks);
    };
    const markAsCompleted = (index) => {
        const taskToComplete = tasks[index];
        setCompletedTasks([...completedTasks, taskToComplete]);
        deleteTask(index);
    };

    return(
        <div className='page'>
            <nav>
            <img className='logo' src='src/assets/logo.jpg'/>
        <Link className='home' to="/">Home</Link>
      </nav>
            <div className='container1'>
            <div>
            <h1>Wishlist</h1>
            <input value={task} onChange={handleInputChange} onKeyPress={handleKeyPress} type='text' placeholder='Add an item'></input>
            <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                      <li className='list' key={index}>
                      <span>{task}</span>
              <div>
              <button onClick={() => markAsCompleted(index)}>Done</button>
                  <button onClick={() => editTask(index, prompt('Enter new item', task))}>Edit</button>
                  <button onClick={() => deleteTask(index)}>Delete</button>
              </div>
                 
                  </li>
                ))}
            </ul>
            <h2 className='done'>Completed Tasks</h2>
            <ul>
                {completedTasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>

            </div>
          
        </div>
        
    )
}
export default Wishlist;