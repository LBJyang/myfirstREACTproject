import React, { useState } from "react";
function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  function toggleEditing(id) {
    let updateEditing;
    if (id === props.id) {
      updateEditing = !isEditing;
    }
    setEditing(updateEditing);
  }
  function handleNameSubmit(e, id) {
    e.preventDefault();
    if (id === props.id) {
      setNewName(e.target.value);
    }
    toggleEditing(id);
  }
  const editingTemplate = (
    <form className="stack-small">
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input id={props.id} className="todo-text" type="text" />
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel">
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button
          type="submit"
          className="btn btn__primary todo-edit"
          onClick={(e) => handleNameSubmit(e, props.id)}
        >
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => toggleEditing(props.id)}
        >
          Edit{" "}
          <span className="visually-hidden" isEditing={isEditing}>
            {props.name}
          </span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );
  return (
    <li className="todo stack-small">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
}
export default Todo;