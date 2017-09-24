import React from "react";
import propTypes from "prop-types";

export default class AddTodoForm extends React.Component {
  state = {
    value: ""
  };
  static propTypes = {
    actions: propTypes.object.isRequired
  };
  handleFormSubmit = e => {
    e.preventDefault();
    if (!this.state.value.trim()) {
      return;
    }
    this.props.actions.addTodo(this.state.value);
    this.setState({
      value: ""
    });
  };
  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    console.log("todo props:", this.props);
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input onChange={this.handleInputChange} value={this.state.value} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}
