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
      <form className="form-group">
        <div className="row">
          <div className="col-xs-3">
            <div className="col-auto">
              <label className="col-form-label col-form-label-lg">Your todo:</label>

            <input
              type="text"
              className="form-control"
              value={task}
              onChange={handleNewTask}
            />
            </div>
            <div className="col-auto">
              <button
                type="button"
                className="btn btn-success"
                onClick={callAddTodoList}
              >
              {" "}
              Add
              </button>
              </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
