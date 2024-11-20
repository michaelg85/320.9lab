import React from "react";
import { ACTIONS } from "../App";

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.complete} // Checked state based on the todo's complete status
        onChange={() =>
          dispatch({
            type: ACTIONS.TOGGLE_TODO, // Dispatch toggle action
            payload: { id: todo.id },
          })
        }
      />

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
          dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        Completed
      </button>



      <button
        onChange={() =>
          dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id } })
        }
      >
        Edit
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
