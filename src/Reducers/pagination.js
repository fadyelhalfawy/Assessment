import { useState, useEffect } from "react";
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector  } from 'react-redux';
import { setAssessment, prevStage, nextStage } from './formSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PageIndicatorList from './pageIdentecator';

const PaginatedQuestions = ({ questions }) => {
    const questionsPerPage = 5;
    const dispatch = useDispatch();
    const storedData = useSelector((state) => state.form.assessments);
    const [currentPage, setCurrentPage] = useState(1);
    const [phase, setPhase] = useState(0);
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);
    const pages = [];

    const generateYupSchema = (questions, numberOfQuestions, phase) => {
      const schemaFields = {};
    
      for(let i = phase; i < phase + numberOfQuestions; i++) schemaFields[questions[i]] = yup.string().required(`The question${i + 1} is required`);
      
      return yup.object().shape(schemaFields);
  };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(generateYupSchema(questions, numberOfQuestions, phase)),
    defaultValues: storedData
  });

  for (let i = 0; i < questions.length; i += questionsPerPage) pages.push(questions.slice(i, i + questionsPerPage));

  const numberOfPages = Math.ceil(questions.length / 5);

  const calculateQuestions = (pages, currentPage) => {
    if(currentPage === numberOfPages) return;
    
    setNumberOfQuestions(pages[currentPage].length);
  }

  const nextPage = () => {
    setCurrentPage(next => next + 1);
    setPhase(next => next + 5);
  };

  const previousPage = () => {
    setCurrentPage(prev => prev - 1);
    setPhase(prev => prev - 5);
  };

  const handlePrev = () => {dispatch(prevStage());};

  const onSubmit = data => {    
    calculateQuestions(pages, currentPage);

    dispatch(setAssessment({ data }));

    if(currentPage < numberOfPages) nextPage();

    else {
      setPhase(next => next + 5);
      dispatch(nextStage());
    }
  };

  useEffect(() => {
    calculateQuestions(pages, currentPage);
  },[]);

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <PageIndicatorList 
        numberOfPages={numberOfPages}
        currentPage={currentPage}
      />
      <div>
        <ul>
        {pages[currentPage - 1].map((question, index) => {
          const globalIndex = (currentPage - 1) * questionsPerPage + index;
            
            return (
              <li key={`question${globalIndex}`}>
                <p>{globalIndex + 1 + " " + question}</p>
                <Controller
                  name={question}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <div>
                      {["Very Satsfied", "Satsfied", "Very Good", "Good", "Bad"].map((option, index) => (
                        <label key={index} className="form-check-label">
                          <input
                              {...field}
                              checked={field.value === option}
                              className="form-check-input"
                              value={option}
                              type="radio"
                          />
                          {option}
                        </label>
                      ))}
                      {errors[question] && (
                        <p style={{ color: 'red' }}>
                          {errors[question]?.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div>
          {currentPage === 1 && <button type="button" onClick={handlePrev}>Previous Page</button>}
          {currentPage > 1 && <button type="button" onClick={previousPage}>Previous</button>}
          {currentPage < numberOfPages && <button type="submit">Next</button>}
          {currentPage === numberOfPages && <button type="submit">Submit</button>}
        </div>
    </form>
    </>
    
  );
};

export default PaginatedQuestions;