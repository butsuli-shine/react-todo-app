import React, { Component } from "react";
import Form from "./Form";
import List from "./List";
import Navbar from "./Navbar";
import Calender from "./Calendar"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    this.state.todo.push({ title: e.target.title.value });
    this.setState({ todo: this.state.todo });
    e.target.title.value = "";
  }

  handleRemove(i) {
    this.state.todo.splice(i, 1);
    this.setState({ todo: this.state.todo });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="p-3 mb-2 bg-info text-white">
          <Form handleAdd={this.handleAdd} />
          <List todos={this.state.todo} handleRemove={this.handleRemove} />
        </div>
        <Calender/>
      </div>

    );

  }
}
