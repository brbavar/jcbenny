import { useEffect } from 'react';
import Philosopher from '../components/Philosopher';

const Philosophers = () => {
  useEffect(() => {
    document.title = 'Philosophers of Religion';
  });

  return (
    <body id='philosophers'>
      <div className='philosopher-grid'>
        <Philosopher />
      </div>
    </body>
  );
};

export default Philosophers;
