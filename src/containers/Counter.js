import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CounterItem from "../components/CounterItem";
import * as CounterActions from "../actions/Counter";

console.log("CounterActions:", CounterActions);

const Counter = ({ value, actions }) => (
  <div>
    <CounterItem value={value} actions={actions} />
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  value: state.counter
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CounterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
