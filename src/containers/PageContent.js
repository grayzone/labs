import React from "react";

import { connect } from "react-redux";
import PageContent from "../components/PageContent";
import { bindActionCreators } from "redux";

const PageContentApp = ({ value }) => (
  <div>
    <PageContent content={value} />
  </div>
);

const mapStateToProps = state => ({
    value: state.menu.url
});

export default connect(mapStateToProps)(PageContentApp);
