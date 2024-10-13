import React from 'react';
import { useSelector } from 'react-redux';
import Stage1 from './Reducers/stage1';
import Stage2 from './Reducers/stage2';
import Stage3 from './Reducers/stage3';
import Stage4 from './Reducers/stage4';

const App = () => {
  const form = useSelector((state => state.form));
  console.log(form);
  
  
  return (
    <div>
      {(form.stage === 1 && <Stage1 />) ||
       (form.stage === 2 && <Stage2 />) ||
        (form.stage === 3 && <Stage3 />) ||
         (form.stage === 4 && <Stage4 />)}
      {/* {form.stage === 2 && <Stage2 />} */}
      {/* {form.stage === 3 && <Stage3 />} */}
      {/* {form.stage === 4 && <Stage4 />} */}
    </div>
  );
}

export default App;
