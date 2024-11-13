import React from "react";
import { ACTIONS } from "../App";

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#FFF" }}>
        {todo.name}
      </span>
      <input
        onChange={() =>
          dispatch({
            type: ACTIONS.EDIT_TODO,
            payload: { id: todo.id },
          })
        }
      ></input>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Completed
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
}
