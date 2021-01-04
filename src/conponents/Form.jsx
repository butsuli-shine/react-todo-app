import React, { useState } from "react";

const Form = (props) => {
  const [task, setTask] = useState([]);

  const handleNewTask = (event) => {
    setTask(event.target.value);
  };

  const resetInput = () => {
    setTask("");
  };

  const callAddTodoList = (event) => {
    event.preventDefault();
    props.addTodoList(task);
    resetInput();
  };

  return (
    <div>
      <form>
        <div className="form-group row">
          <label className="col-sm-2">Your todo:</label>
          <input
            type="text"
            className=""
            value={task}
            onChange={handleNewTask}
          />
          　
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={callAddTodoList}
          >
            {" "}
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
