
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState(0);

  function addTodo() {
    setId(id + 1);
    let todoObj = { 'id': id, 'todo': todo };
    setTodoList([...todoList, todoObj]);
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  }

  return (
    <div className="todo-container">
      {/* Do not remove the main div */}
      <h1>To-Do List</h1>
      <div className="input">
        <input type="text" onChange={(event) => setTodo(event.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul>
        {
          todoList.length > 0 &&
          todoList.map((todoItem) => {
            return (
              <div className="item">
                <li>{todoItem.todo}</li>
                <button onClick={() => deleteTodo(todoItem.id)}>Delete</button>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
