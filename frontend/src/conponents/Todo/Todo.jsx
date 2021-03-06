import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

const Todo = () => {
  const [todoList, setTodoList] = useState([]); //maparray

  const addTodoList = (content, deadline) => {
    setTodoList(todoList.concat({ content: content, deadline: deadline }));
  };

  const deleteTodoList = (index) => {
    setTodoList(todoList.filter((item) => todoList[index] !== item));
  };

  return (
    <div className="p-3 mb-2">
      <Form todos={todoList} addTodoList={addTodoList} />
      <List todos={todoList} deleteTodoList={deleteTodoList} />
    </div>
  );
};

export default Todo;
