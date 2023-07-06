import { useState } from "react";
import Task from "./features/Task";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  function addTask(e) {
    e.preventDefault();
    const inputValue = e.target.elements[0].value;
    setTasks([...tasks, inputValue]);
    e.target.reset();
  }
  function deleteTask(index) {
    const updatdTasks = [...tasks];
    updatdTasks.splice(index, 1);
    setTasks(updatdTasks);
  }
  function isEmpty() {
    if (tasks.length == 0) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div style={{ marginTop: 100, marginLeft: 100 }}>
      <form
        style={{
          display: "flex",
          gap: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={(e) => addTask(e)}
      >
        <input
          style={{ fontSize: 20 }}
          type="text"
          className="taskInput"
          required
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" style={{ width: 50, height: 30 }}>
          Add
        </button>
      </form>

      {tasks.length == 0 ? (
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Task yoxdur
        </h1>
      ) : (
        tasks.map((task, index) => (
          <Task key={index} task={task} deleteTask={() => deleteTask(index)} />
        ))
      )}
    </div>
  );
}

export default App;
