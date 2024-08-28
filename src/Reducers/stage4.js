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
    <div>
      <h2>Stage 4: Results Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option) => (
            <tr key={option}>
              <td>{option}</td>
              <td>{optionCounts[option]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stage4;