import React from 'react';
import { useSelector } from 'react-redux';
import Stage1 from './Reducers/stage1';
import Stage2 from './Reducers/stage2';
import Stage3 from './Reducers/stage3';

const App = () => {
  const stage = useSelector((state) => state.form.stage);
  const form = useSelector((state) => state.form);
  console.log(form);
  
  return (
    <div>
      {stage === 1 && <Stage1 />}
      {stage === 2 && <Stage2 />}
      {stage === 3 && <Stage3 />}
    </div>
  );
}

export default App;
