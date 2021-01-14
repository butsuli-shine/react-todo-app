import React, { useState } from "react";

const Form = (props) => {
  const [content, setContent] = useState([]);

  const handleNewContent = (event) => {
    setContent(event.target.value);
  };

  const resetInput = () => {
    setContent("");
  };

  const callAddTodoList = (event) => {
    if (!(content === undefined || content === null) || content === "") {
      event.preventDefault();
      props.addTodoList(content);
      resetInput();
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
                value={content}
                onChange={handleNewContent}
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
