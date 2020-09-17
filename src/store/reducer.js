import * as actionTypes from "./actionType";

const initialState = {
  surveyForm: [],
  questionCounter: 0,
  userEmail: "",
  questions: [],
  questionsFetched: false,
  questionsLoading: false,
  transform: 0,
};
export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.SET_ANSWER:
      const { answer } = payload;
      const answerIndex = state.surveyForm.findIndex(
        (x) => x.questionId === answer.questionId
      );
      
      let updatedSurveyForm = [...state.surveyForm];
      if (answerIndex !== -1) {
        updatedSurveyForm.splice(answerIndex, 1);
        updatedSurveyForm = [...updatedSurveyForm, answer];
      } else {
        updatedSurveyForm = [...state.surveyForm, answer];
      }
      localStorage.setItem('answers',JSON.stringify(updatedSurveyForm));
      return {
        ...state,
        surveyForm : updatedSurveyForm,
      };
    case actionTypes.SET_EMAIL:
      return {
        ...state,
        userEmail: payload.email,
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        questionsLoading: payload.questionsLoading,
      };
    case actionTypes.SET_QUESTIONS_FETCHED:
      return {
        ...state,
        questionsFetched: payload.questionsFetched,
      };
    case actionTypes.SET_TRANSFORM:
      return {
        ...state,
        transform:
          payload.transform === "prev"
            ? state.transform + 600
            : state.transform - 600,
      };
    case actionTypes.SET_QUESTIONS:
      return {
        ...state,
        questionsLoading: false,
        questions: payload.questions,
      };
  }
  return initialState;
};
