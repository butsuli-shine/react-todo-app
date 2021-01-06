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
    if (!(task === undefined || task === null) || task === "") {
      event.preventDefault();
      props.addTodoList(task);
      resetInput();
    } else {
      return;
    }
  };

  const returnFalse = () => {
    return false;
  };

  return (
    <div>
      <form className="form-group" onsubmit={returnFalse}>
        <div className="row">
          <div className="col-xs-3">
            <div className="col-auto">
              <label className="col-form-label col-form-label-lg">
                Your todo:
              </label>

              <input
                type="text"
                className="form-control"
                value={task}
                onChange={handleNewTask}
              />
            </div>
            <div className="col-auto">
              <button
                className="btn btn-success"
                type="button"
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
