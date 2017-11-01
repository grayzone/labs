import React from "react";

import { connect } from "react-redux";
import MenuSection from "../components/MenuSection";
import { bindActionCreators } from "redux";

import * as MenuActions from "../reducers/MenuSection";

const MenuApp = ({ actions }) => (
  <div>
    <MenuSection actions={actions} />
  </div>
);

const mapStateToProps = state => ({
  menu: state.menu
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MenuActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuApp);
