import * as ActionsTypes from "./actionType";
import Questions from "./questions";

export const setEmail = (email) => ({
  type: ActionsTypes.SET_EMAIL,
  payload: {
    email,
  },
});

export const setLoading = (state) => ({
  type: ActionsTypes.SET_EMAIL,
  payload: {
    questionsLoading: state,
  },
});

export const setQuestionsFetched = (state) => ({
  type: ActionsTypes.SET_QUESTIONS_FETCHED,
  payload: {
    questionsFetched: state,
  },
});

export const setTransform = (state) => ({
  type: ActionsTypes.SET_TRANSFORM,
  payload: {
    transform: state,
  },
});

export const setAnswer = (answer) => {
  return {
    type: ActionsTypes.SET_ANSWER,
    payload: {
      answer,
    },
  };
};

export const setQuestions = (questions) => ({
  type: ActionsTypes.SET_QUESTIONS,
  payload: { questions },
});

export const fetchQuestions = () => (dispatch) => {
  setTimeout(() => {
    dispatch(setQuestions(Questions));
    dispatch(setQuestionsFetched(true));
  }, 5000);
};
