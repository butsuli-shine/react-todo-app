import React from "react";
let style = { maxWidth: "700px" };

const List = (props) => {
  const callDeleteTodoList = (index) => {
    console.log(index);
    props.deleteTodoList(index);
  };

  const TodoListItems = props.todos.map((todo, index) => {
    return (
      <div className="container">
        <li key={index} className="list-group-item " style={style}>
          {todo.content}{" "}
          <div className="float-right">
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => callDeleteTodoList(index)}
            >
              delete
            </button>
          </div>
        </li>
      </div>
    );
  });

  return <ul className="siimple-list">{TodoListItems}</ul>;
};
export default List;
