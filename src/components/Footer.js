import React from "react";
import FilterLink from "../containers/FilterLink";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from "../constants/TodoFilters";

const FILTER_TITLES = {
  [SHOW_ALL]: "ALL",
  [SHOW_ACTIVE]: "Active",
  [SHOW_COMPLETED]: "Completed"
};

export default class Footer extends React.Component {
  static propTypes = {
    completedCount: React.PropTypes.number.isRequired,
    activeCount: React.PropTypes.number.isRequired,
    filter: React.PropTypes.string.isRequired,
    onClearCompleted: React.PropTypes.func.isRequired,
    onShow: React.PropTypes.func.isRequired
  };

  renderTodoCount = () => {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? "item" : "items";
    return (
      <span>
        <strong>{activeCount || "No"}</strong>
        {itemWord} left
      </span>
    );
  };

  renderFilterLink = filter => {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, onShow } = this.props;
    return (
      <a style={{ cursor: "pointer" }} onClick={() => onShow(filter)}>
        {title}
      </a>
    );
  };

  renderClearButton = () => {
    const { completedCount, onClearCompleted } = this.props;
    if (completedCount > 0) {
      return <button onClick={onClearCompleted}>Clear Completed</button>;
    }
  };

  render() {
    return (
      <footer>
        {this.renderTodoCount()}
        <ul>
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter => (
            <li key={filter}>{this.renderFilterLink(filter)}</li>
          ))}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }
}

/*
const Footer = () => (
  <p>
    Show: <FilterLink filter="SHOW_ALL">ALL</FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </p>
);

export default Footer;
*/
