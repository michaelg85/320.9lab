import { useState, useReducer } from "react";
import Todo from "./components/Todo";
import "./App.css";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  CHECKBOX_TODO: "check-todo",
  EDIT_TODO: "edit-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];



    case ACTIONS.EDIT_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, 'name': action.payload.text };
        }
          return todo;
      });



      case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });



    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <main>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.slice().reverse().map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </main>
  );
}
