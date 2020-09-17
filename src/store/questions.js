const QUESTION_TYPE = {
  MULTIPLE: 1,
  SINGLE: 2,
};
export default [
  {
    QuestionId: 1,
    Question: "Do you satisfied with this browser? ",
    QuestionType: QUESTION_TYPE.SINGLE,
    options: ["satisfied", "not satisfied"],
  },
  {
    QuestionId: 2,
    Question: "how was the food?",
    QuestionType: QUESTION_TYPE.SINGLE,
    options: ["good", "not good"],
  },
  {
    QuestionId: 3,
    Question: "How was the Restaurant?",
    QuestionType: QUESTION_TYPE.SINGLE,
    options: ["good", "not good"],
  },
  {
    QuestionId: 4,
    Question: "Are you satisfied with the salary?",
    QuestionType: QUESTION_TYPE.SINGLE,
    options: ["yes", "no"],
  },
  {
    QuestionId: 5,
    Question: "Have you ever purchase a product from our website?",
    QuestionType: QUESTION_TYPE.SINGLE,
    options: ["yes", "no"],
  },
  {
    QuestionId: 6,
    Question: "was the house clean?",
    QuestionType: QUESTION_TYPE.SINGLE,
    options: ["yes", "no"],
  },
  {
    QuestionId: 7,
    Question: "Have you ever try this brand?",
    QuestionType: QUESTION_TYPE.SINGLE,
    options: ["yes", "no"],
  },
  {
    QuestionId: 8,
    Question: "Are you satisfied with this product?",
    QuestionType: QUESTION_TYPE.SINGLE,
    options: ["satisfied", "not satisfied"],
  },
];
