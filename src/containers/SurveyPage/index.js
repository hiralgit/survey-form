import React, { Component } from "react";
import { connect } from "react-redux";
import EmailComponent from "../../components/survey/email";
import QuestionsComponent from "../../components/survey/Questions";
import "./SurveyPage.css";

class SurveyPage extends Component {
  render() {
    const { email } = this.props;
    return (
      <div className="survey-form-container container">
        {email === "" ? <EmailComponent /> : <QuestionsComponent />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.userEmail,
});

export default connect(mapStateToProps)(SurveyPage);
