import { useDispatch } from 'react-redux';
import { setItem, nextStage } from './formSlice';
import leaderImage from '../Images/usedfor.jpg';

const Stage2 = () => {
  const dispatch = useDispatch();
  
  const items = ["collaborate", "Customer Focus", "Communicates Effectively"];

  const handleSelect = e => {
    const dataId = items[e.target.id];
    dispatch(setItem(dataId));
    dispatch(nextStage());
  };

  return (
    <div className='m-3 sm:p-1 grid grid-cols-2 gap-4'>
      <div>
        <h2 className='text-2xl font-medium mb-3'>
          Create your developement plan
        </h2>

        <p className='text-base mb-5'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>

        <img src={leaderImage} alt='Core-Image'/>
      </div>

      
      <div>
        <div className='mb-3'>
        <hr className='bg-gray-700 mb-4'></hr>
        <div className='flex-col space-y-2 md:flex md:flex-row md:justify-between md:space-x-2 md:space-y-0 m-2'>
          <div className='flex items-center'>
            <img src={leaderImage} alt='Leader-Image' className='w-6 h-6'/>
            <h3 className='text-lg font-medium ml-2'>Collaborate</h3>
          </div>

          <button className='text-white bg-gray-400 py-1 px-1 flex-none w-max border-solid rounded'>See Details</button>
        </div>

        <div className='m-2 space-y-2'>
        <p>Emotionel Intellgence</p>
        <p>Infulence</p>
        <p>Inclusive Leadership</p>
        </div>
        <div className='mx-2'>
          <a id='0' href='#' 
          className='text-red-500' 
          onClick={handleSelect}>
            Go to Skill <span id='0'
            className='font-bold'>
            Collaborates Skills </span> Assessment</a>
        </div>
        
        </div>
        
        <div className='mb-3'>
        <hr className='bg-gray-700 mb-4'></hr>
        <div className='flex-col space-y-2 md:flex md:flex-row md:justify-between md:space-x-2 md:space-y-0 m-2'>
          <div className='flex items-center'>
            <img src={leaderImage} alt='Leader-Image' className='w-6 h-6'/>
            <h3 className='text-lg font-medium ml-2'>Customer Focus</h3>
          </div>

          <button className='text-white bg-gray-400 py-1 px-1 border-solid rounded'>See Details</button>
        </div>

        <div className='m-2 space-y-2'>
        <p>Emotionel Intellgence</p>
        <p>Communication</p>
        <p>Building Trust</p>
        <p>Innovation</p>
        </div>
        <div className='mx-2'>
          <a id='1' href='#' 
            className='text-red-500' 
            onClick={handleSelect}>
              Go to Skill <span id='1' 
              className='font-bold'> 
              Customer Focus </span>skill Assessment</a>
        </div>
        </div>
        
        <div className='mb-3'>
          <hr className='bg-gray-700 mb-4'></hr>
          <div className='flex-col space-y-2 m-2 md:flex md:flex-row md:justify-between'>
            <div className='flex items-center'>
              <img src={leaderImage} alt='Leader-Image' className='w-6 h-6'/>
              <h3 className='text-lg font-medium ml-2'>Communicates Effectively</h3>
            </div>

            <button className='text-white bg-gray-400 py-1 px-1 border-solid rounded'>See Details</button>
          </div>

          <div className='m-2 space-y-2'>
          <p>Communication</p>
          <p>Difficult Conversations</p>
          <p>Personal Skills</p>
          </div>

          <div className='mx-2'>
            <a id='2' href='#'
            className='text-red-500' 
            onClick={handleSelect}>
              Go to Skill <span id='2' 
                className='font-bold'>
                  Communicates Effectively </span>Assessment</a>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Stage2;