import React from "react";

import Header from "../components/Header";
//import MainSection from "../components/MainSection";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as TodoActions from "../actions/Todos";

const TodoMVC = ({ todos, actions }) => (
  <div>
    <Header addTodo={actions.addTodo} />
  </div>
);
// <MainSection todos={todos} actions={actions} />

TodoMVC.propTypes = {
  todos: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoMVC);
