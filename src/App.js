import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'Doctors appointment',
      day: 'Feb 5th at 2:30 pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30 pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 7th at 4:30 pm',
      reminder: true,
    },
  ])

  const deleteTask = (id) => {
    // console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(tasks.map((task) => task.id === id ? 
    {...task, reminder: !task.reminder} : task
    ))
  }

  const addTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task}    
    setTasks([...tasks, newTask]);
  }

  return (
    <>
    <div className="container">
      <Header title="Task Tracker"/>
      <AddTask onAdd={addTask}/>
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
    </>
  );
}

export default App;
