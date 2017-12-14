import * as React from "react";
import Scrollbars from "react-custom-scrollbars";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { renderRoutes } from "react-router-config";
import { Dispatch } from "redux";
import { bindActionCreators } from "redux";
import actions from "../../actions";

import "./app.styl";

class App extends React.PureComponent<any, any> {
  public render() {
    const { route } = this.props;
    return (
      <div className="app">
        <div className="header">Header</div>
        <div className="content">
          <Scrollbars universal>
            {renderRoutes(route.routes)}
          </Scrollbars>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return state;
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));
