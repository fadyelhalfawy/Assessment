import PaginatedQuestions from './pagination';

const questions = [
  "What is your name?",
  "What is your age?",
  "What is your favorite color?",
  "What is your favorite food?",
  "What is your hobby?",
  "Where do you live?",
  "What is your profession?",
  "What are your goals?",
  "What is your favorite movie?",
  "What is your favorite position?",
  "What is your favorite player?",
  "What is your favorite sport?",
  "What is your favorite money?",
];

const Stage3 = () => {  
  
  return (
      <PaginatedQuestions
        questions={questions}
      />
  );
};

export default Stage3;
