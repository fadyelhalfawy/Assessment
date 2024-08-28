import React from 'react';
import { useDispatch } from 'react-redux';
import { setItem, nextStage } from './formSlice';

const Stage2 = () => {
  const dispatch = useDispatch();
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'];

  const handleSelect = (e) => {
    dispatch(setItem(e.target.value));
    dispatch(nextStage());
  };

  return (
    <div>
      <select onChange={handleSelect}>
        <option value="">Select an Item</option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Stage2;
