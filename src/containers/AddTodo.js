import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AddTodoForm from "../components/AddTodoForm";
import * as TodoActions from "../actions/Todos";

console.log("TodoActions:", TodoActions);

const AddTodo = ({ actions }) => (
  <div>
    <AddTodoForm actions={actions} />
  </div>
);

AddTodo.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  value: state.todos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
