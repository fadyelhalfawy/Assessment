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
    <div className='m-3 p-5 grid grid-cols-2 gap-4'>
      <div className='leading-5'>
        <h2 className='text-xl font-medium mb-3'>
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
        <div className='flex justify-between m-2'>
          <div className='flex'>
            <img src={leaderImage} alt='Leader-Image' className='w-6 h-6'/>
            <h3 className='text-lg font-medium ml-2'>Collaborate</h3>
          </div>

          <button className='text-white bg-gray-400 py-2 px-3 border-solid rounded'>See Details</button>
        </div>

        <div className='m-2'>
        <p>Emotionel Intellgence</p>
        <p>Infulence</p>
        <p>Inclusive Leadership</p>
        </div>
        
        <a id='0' href='#' className='text-red-400 m-2' onClick={handleSelect}>Go to Skill <span id='0' className='font-bold'>Collaborates Skills</span> Assessment</a>
        </div>
        
        <div className='mb-3'>
        <hr className='bg-gray-700 mb-4'></hr>
        <div className='flex justify-between m-2'>
          <div className='flex'>
            <img src={leaderImage} alt='Leader-Image' className='w-6 h-6'/>
            <h3 className='text-lg font-medium ml-2'>Customer Focus</h3>
          </div>

          <button className='text-white bg-gray-400 py-2 px-3 border-solid rounded'>See Details</button>
        </div>

        <div className='m-2'>
        <p>Emotionel Intellgence</p>
        <p>Communication</p>
        <p>Building Trust</p>
        <p>Innovation</p>
        </div>
        
        <a id='1' href='#' className='text-red-400 m-2' onClick={handleSelect}>Go to Skill <span id='1' className='font-bold'>Customer Focus</span> skill Assessment</a>
        </div>
        
        <div className='mb-3'>
          <hr className='bg-gray-700 mb-4'></hr>
          <div className='flex justify-between m-2'>
            <div className='flex'>
              <img src={leaderImage} alt='Leader-Image' className='w-6 h-6'/>
              <h3 className='text-lg font-medium ml-2'>Communicates Effectively</h3>
            </div>

            <button className='text-white bg-gray-400 py-2 px-3 border-solid rounded'>See Details</button>
          </div>

          <div className='m-2'>
          <p>Communication</p>
          <p>Difficult Conversations</p>
          <p>Personal Skills</p>
          </div>
          
          <a id='2' href='#' className='text-red-400 m-2' onClick={handleSelect}>Go to Skill <span id='2' className='font-bold'>Communicates Effectively</span> Assessment</a>
        </div>
        
      </div>
    </div>
  );
};

export default Stage2;