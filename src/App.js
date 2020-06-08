import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "./helpers/history";
import { PrivateRoute } from "./components/PrivateRoute";
import { alertActions } from "./actions/alertActions";
import HomePage from "./Home/HomePage";
import LoginPage from "./Login/LoginPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }
  render() {
    const { alert } = this.props;
    return (
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container-fluid" style={{ height: "600px" }}>
            <div className="col-sm-8 col-sm-offset-3">
              {alert.message && (
                <div className={`alert ${alert.type} `}>{alert.message}</div>
              )}
              <Router history={history}>
                <Switch>
                  <PrivateRoute exact path="/" component={HomePage} />
                  <Route path="/login" component={LoginPage} />
                  <Redirect from="*" to="/" />
                </Switch>
              </Router>
            </div>
          </div>
        </div>
        <div className="container">
          <h6 className="col-sm-offset-4">shyam041@gmail.com</h6>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  const { alert } = state;
  return { alert };
};
export default connect(mapStateToProps, { clearAlerts: alertActions.clear })(
  App
);
