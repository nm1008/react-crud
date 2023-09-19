export function Task({
  onHandleChange,
  todoList,
  addItems,
  onHandleDelete,
  completeTask,
}) {
  return (
    <div className="input">
      <input type="text" onChange={onHandleChange} />
      <button onClick={addItems}>Add to list</button>
      {todoList.map((task) => {
        return (
          <div
            className="task"
            key={task.id}
            style={{ backgroundColor: task.completed ? "green" : "white" }}
          >
            <h1>{task.taskName}</h1>
            <button onClick={() => completeTask(task.id)}>Completed</button>
            <button onClick={() => onHandleDelete(task.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
}
