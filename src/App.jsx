import { useState } from "react";
import "./App.css";
import { Task } from "./Task";

function App() {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);


  //this function was set to onChange on the input field and logs the event and set the value of the event storing to the newTask state
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  //this function was set to the add to list button, using spread operator which is adding the newTask to the existing array
  const addItems = () => {
    //this code is to check if the array is 0 set id: 1, else gets the last elements id and adds 1
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };

    // const newTodoList = [...todoList, newTask];
    // setTodoList(newTodoList)

    //you can also do this for simplicity
    setTodoList([...todoList, task]);
  };

  const handleDelete = (id) => {
    // const newTodoList = todoList.filter((task) => {
    //   if (task === taskName){
    //     return false
    //   } else {
    //     return true
    //   }
    // })

    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="app">
      <h1>REACT CRUD</h1>
      <Task
        onHandleChange={handleChange}
        onHandleDelete={handleDelete}
        todoList={todoList}
        addItems={addItems}
        completeTask={completeTask}
      />
    </div>
  );
}

export default App;
