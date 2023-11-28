import { useEffect, useRef } from 'react';

import MenuBar from '../components/MenuBar';
import Menu from '../components/Menu';

import Item from '../components/Item';
// import KatherinRogersImg from '../images/katherin-rogers.jpeg';
// import PortraitPlaceholder from '../images/Portrait_Placeholder.png';

const Catalog = () => {
  useEffect(() => {
    document.title = 'Catalog | JCBenny';
  });
  const menuRef = useRef(null);

  const items = [];

  const srcs = [null]; // Replace null with imported AI-generated image
  const prices = [0]; // Replace 0 with price of item represented by aforementioned image

  for (let i = 0; i < 9; i++) {
    srcs.push(null);
    prices.push(0);
  }

  for (let i = 0; i < 10; i++)
    items.push(<Item src={srcs[i]} price={prices[i]} />);

  return (
    <body id='items'>
      <MenuBar menuRef={menuRef} />
      <Menu ref={menuRef} />
      <div className='item-grid'>{items}</div>
    </body>
  );
};

export default Catalog;
