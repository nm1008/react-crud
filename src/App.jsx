import "./index.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updatedList = [...todoList];
      updatedList[editIndex] = userInput;
      setTodoList(updatedList);
      setEditIndex(null);
    } else {
      setTodoList((prevTodoList) => [...prevTodoList, userInput]);
    }
    setUserInput("");
  };

  const handleDelete = (index) => {
    const filtered = todoList.filter((item, i) => {
      return i !== index;
    });
    setTodoList(filtered);
  };

  const handleUpdate = (index) => {
    setUserInput(todoList[index]);
    setEditIndex(index);
  };

  return (
    <>
      <h1>React CRUD</h1>

      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {editIndex === null ? "Submit" : "Update"}
      </button>
      {todoList.map((item, index) => (
        <div key={index} className="todoList">
          <h1>{item}</h1>

          {editIndex !== null ? (
            <div></div>
          ) : (
            <>
              <button onClick={() => handleUpdate(index)}>Update</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default App;
