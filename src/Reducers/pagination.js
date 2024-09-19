import { useState, useEffect } from "react";
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector  } from 'react-redux';
import { setAssessment, prevStage, nextStage } from './formSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PageIndicatorList from './pageIdentecator';
import options from "./options";
import questions from "./questions";

const PaginatedQuestions = () => {
    const questionsPerPage = 5;
    const dispatch = useDispatch();
    const storedData = useSelector((state) => state.form);
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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto my-4 bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">Survey Form</h1>
      <h2 className="text-2xl font-bold mb-4 text-lime-600 text-center">{storedData.selectedItem}</h2>
      <PageIndicatorList 
        numberOfPages={numberOfPages}
        currentPage={currentPage}
      />
      <div>
        <ul className="space-y-6">
        {pages[currentPage - 1].map((question, index) => {
          const globalIndex = (currentPage - 1) * questionsPerPage + index;
            
            return (
              <li key={`question${globalIndex}`} className="mb-4">
                <p className="mb-2 font-medium text-gray-700">{globalIndex + 1 + " " + question}</p>
                <Controller
                  name={question}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <div className="flex space-x-4">
                      {options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-2">
                        <input
                        {...field}
                        checked={field.value === option}
                        className="form-radio accent-red-600 h-4 w-4"
                        value={option}
                        type="radio"
                      />
                        <label>
                          {option}
                        </label>
                        </div>
                        
                      ))}
                      {errors[question] && (
                        <p className="text-red-600">
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

      <div className="space-x-3">
          {currentPage === 1 && <button type="button" className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700" onClick={handlePrev}>Previous Page</button>}
          {currentPage > 1 && <button type="button"  className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700" onClick={previousPage}>Previous</button>}
          {currentPage < numberOfPages && <button type="submit" className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700">Next</button>}
          {currentPage === numberOfPages && <button type="submit" className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700">Submit</button>}
        </div>
    </form>
    </>
    
  );
};

export default PaginatedQuestions;