import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { withRouter } from 'react-router';
import { fetchQuestions, setLoading } from "../../../store/actions";

class Questions extends Component {
  componentDidMount() {
    const { fetchQuestions } = this.props;
    fetchQuestions();
  }
  render() {
    const { history } = this.props;

    const { questionsFetched, questions,transform } = this.props;

    return !questionsFetched ? (
      <div>Loading.....</div>
    ) : (
      <div className="questions-container">
        <div className="questions-wrapper" style={{width:`${questions.length * 600}px`,transform:`translateX(${transform}px)`}}>
          {questions.map((question) => (
            <Question question={question} />
          ))}
        </div>
        <div className="row p-0 m-0 mt-2 d-flex justify-content-center">
            <button className="btn btn-danger" onClick={() => history.push('/thanks')}>End the survey</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionsFetched: state.questionsFetched,
  questions: state.questions,
  transform:state.transform
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Questions));
