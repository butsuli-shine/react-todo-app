import React from "react";

let style = { maxWidth: "700px" };

const List = (props) => (
  <ul className="siimple-list">
    {props.todos.map((todo, i) => {
      return (
        <div className="container">
          <li
            key={i}
            className="list-group-item list-group-item-info"
            style={style}
          >
            {todo.title}{" "}
          <div className="float-right">
            <button type="button" className="btn btn-danger btn-sm" onClick={() => props.handleRemove(i)}>delete</button>
          </div>
          </li>
        </div>

      );
    })}

  </ul>
);

export default List;
