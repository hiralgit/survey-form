import React from "react";
import "../Questions.css";
import { connect } from "react-redux";
import { setTransform, setAnswer } from "../../../../store/actions";
import {withRouter} from 'react-router';

const mapDispatchToProps = (dispatch) => ({
  setTransform: (from) => dispatch(setTransform(from)),
  setAnswer: (answer) => dispatch(setAnswer(answer)),
});

const mapStateToProps = (state) => ({
  transform: state.transform,
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  const { question, setTransform, transform,setAnswer, } = props;
  return (
    <div class="card text-center">
      <div class="card-header">{question.Question}</div>
      <div class="card-body">
        <div class="row mb-5 options-container container">
          {question.options.map((option) => (
            <div className="col">
              <div className="col-12">
                <button
                  className="btn btn-secondary w-100"
                  onClick={() => {
                    console.log("asdas");
                    setAnswer({
                      questionId: question.QuestionId,
                      answer: option,
                    });
                  }}
                >
                  {option}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div class="row justify-content-center">
          <button
            href="#"
            class="btn btn-primary col mr-1"
            onClick={() => {
              setTransform("prev");
            }}
            disabled={transform === 0}
          >
            Previous
          </button>
          <button
            class="btn btn-primary col"
            onClick={() => {
              setTransform("next");
            }}
            disabled={transform === -(4800 - 600)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}));
