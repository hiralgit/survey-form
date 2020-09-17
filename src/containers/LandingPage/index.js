import React, { Component } from "react";
import { withRouter } from "react-router";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="landing-page-container">
        <h3>
          Welcome to the railway survey website. We are happy to have you here.
        </h3>
        <button className="btn btn-primary" onClick={() => history.push('/survey')}>Conduct Survey</button>
      </div>
    );
  }
}

export default withRouter(LandingPage);
