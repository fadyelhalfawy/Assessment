import React from 'react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { setTitle, nextStage } from './formSlice';
import leaderImage from '../Images/usedfor.jpg';

const Stage1 = () => {
  const dispatch = useDispatch();
  const [delay, setDelay] = useState(true);
  const titles = ['Team Memeber', 'People Leader', 'Director'];

  const validationSchema = yup.object().shape({
    option: yup.string().required('You must select an option'),
  });

  const {
    control,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleSubmit = e => {
    dispatch(setTitle(e.target.value));
    setTimeout(() => {
      setDelay(!delay);
      dispatch(nextStage());
    }, 1000);
  }

  return (
    <form className="bg-gray-100 m-3 p-5 leading-7" onChange={handleSubmit}>
      <div className='md:flex md:justify-between md:mb-3 lg:flex lg:justify-between'>
      <div>
      <h1 className='text-3xl font-black mb-2'>
        Matthew Mason
      </h1>

      <p className='mb-4'>Pre-sales Engine Sales</p>

      <h2 className='text-2xl font-medium mb-2'>Please select your current level to proceed</h2>
      <ul className='flex'>
        {titles.map((title, index) => {
          return (
            <li key={index} className='flex-auto'>
              <Controller
                name={"option"}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div className='flex items-center ms-1'>
                    <input
                            id={`radio ${index + 1}`}
                            {...field}
                            type="radio"
                            value={title}
                            className="form-radio accent-red-600 h-4 w-4"
                            checked={field.value === title}
                        />

                    <label 
                      key={index} 
                      className="ms-2 font-medium" 
                      htmlFor={`radio ${index + 1}`}
                      >
                        {title}
                      </label>
                  </div>
                )}
              />
            </li>
          );
        })}
      </ul>
      </div>

      <img src={leaderImage} alt='Leadership-Image'className="w-32 max-md:mx-auto md:w-40 lg:w-52"/>
      </div>
    </form>
  );
};

export default Stage1;