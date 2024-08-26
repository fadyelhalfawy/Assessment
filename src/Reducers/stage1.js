// Stage1.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setTitle, nextStage } from './formSlice';

const Stage1 = () => {
  const dispatch = useDispatch();
  const titles = ['Title 1', 'Title 2', 'Title 3'];

  const handleSelect = (e) => {
    dispatch(setTitle(e.target.value));
    dispatch(nextStage());
  };

  return (
    <div>
      <select onChange={handleSelect}>
        <option value="">Select a Title</option>
        {titles.map((title, index) => (
          <option key={index} value={title}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Stage1;
