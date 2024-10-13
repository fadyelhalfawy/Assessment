import options from './options';
import { useSelector } from 'react-redux';

const Stage4 = () => {
    const selectedOptions = useSelector((state) => state.form.assessments);

    const optionCounts = options.reduce((acc, option) => {
        acc[option] = 0;
        return acc;
      }, {});

    Object.values(selectedOptions).forEach((answer) => {
        if (optionCounts.hasOwnProperty(answer)) {
          optionCounts[answer] += 1;
        }
      });

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h2 className='text-3xl font-bold mb-6 text-gray-800 text-center'>Results Summary</h2>
      <table className="min-w-full border-collapse block table">
        <thead className="block table-header-group">
          <tr className="border border-gray-300 border-none table-row">
            <th className="bg-gray-100 p-4 text-left font-semibold text-gray-600 block table-cell">Option</th>
            <th className="bg-gray-100 p-4 text-left font-semibold text-gray-600 block table-cell">Count</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option, index) => (
            <tr
              key={index}
              className={`border border-gray-400 border-none table-row 
                ${index % 2 === 1 ? 'bg-gray-200' : ''}`}>
              <td className="p-4 text-gray-800 block table-cell">{option}</td>
              <td className="p-4 text-gray-800 block table-cell">{optionCounts[option]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stage4;