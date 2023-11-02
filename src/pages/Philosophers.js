import { useEffect, useRef } from 'react';

import MenuBar from '../components/MenuBar';
import Menu from '../components/Menu';

import Philosopher from '../components/Philosopher';
import KatherinRogersImg from '../images/katherin-rogers.jpeg';
import PortraitPlaceholder from '../images/Portrait_Placeholder.png';

const Philosophers = () => {
  useEffect(() => {
    document.title = 'Philosophers of Religion';
  });

  const menuRef = useRef(null);

  const philosophers = [];

  const srcs = [KatherinRogersImg];
  const names = ['Katherin Rogers'];
  const descriptions = [
    'Wrote a book analyzing the concept of a perfect being. This book contains one of the most paradigmatic statements of the flawed rationale behind perfect being theology: that only a perfect being is worthy of worship.',
  ];

  for (let i = 0; i < 9; i++) {
    srcs.push(PortraitPlaceholder);
    names.push('Lorem ipsum');
    descriptions.push(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    );
  }

  for (let i = 0; i < 10; i++)
    philosophers.push(
      <Philosopher
        src={srcs[i]}
        name={names[i]}
        description={descriptions[i]}
      />
    );

  return (
    <body id='philosophers'>
      <MenuBar menuRef={menuRef} />
      <Menu ref={menuRef} />
      <div className='philosopher-grid'>{philosophers}</div>
    </body>
  );
};

export default Philosophers;
