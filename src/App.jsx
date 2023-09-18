import { useState } from "react";
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);


  //this function was set to onChange on the input field and logs the event and set the value of the event storing to the newTask state
  const handleAddTask = (e) => {
    //  console.log(e.target.value)
    setNewTask(e.target.value);
  };

  return (
    <div className="app">
      <h1>REACT CRUD</h1>
      <Input addTask={handleAddTask} />
    </div>
  );
}

function Input({ addTask }) {
  return (
    <div className="input">
      <input type="text" onChange={addTask} />
      <button>Add to List</button>
    </div>
  );
}

export default App;
