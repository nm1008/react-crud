import { useState } from "react";
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");
 
  


  return (
    <div className="app">
      <h1>REACT CRUD</h1>
      <Input setNewTask={setNewTask}  />
    </div>
  );
}

function Input({ setNewTask }) {
  return (
    <div className="input">
      <input type="text" onChange={(e) => setNewTask(e.target.value)} />
      <button>Add to List</button>
    </div>
  );
}

export default App;
