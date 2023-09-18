import { useState } from "react";
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  //this function was set to onChange on the input field and logs the event and set the value of the event storing to the newTask state
  const handleChange = (e) => {
    //  console.log(e.target.value)
    setNewTask(e.target.value);
  };

  
  //this function was set to the add to list button, using spread operator which is adding the newTask to the existing array
  const addItems = () => {
    // const newTodoList = [...todoList, newTask];
    // setTodoList(newTodoList)

    //you can also do this for simplicity
    setTodoList([...todoList, newTask])

  };

  return (
    <div className="app">
      <h1>REACT CRUD</h1>
      <Input
        onHandleChange={handleChange}
        todoList={todoList}
        addItems={addItems}
      />
    </div>
  );
}

function Input({ onHandleChange, todoList, addItems }) {
  return (
    <div className="input">
      <input type="text" onChange={onHandleChange} />
      <button onClick={addItems}>Add to list</button>
      {todoList.map((task) => {
        return <h1 >{task}</h1>;
      })}
    </div>
  );
}

export default App;
