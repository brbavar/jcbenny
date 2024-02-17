import { useEffect, useRef } from 'react';
import { scanDatabase } from '../lib/scanDatabase';
import { getS3Obj } from '../lib/getS3Obj';

import MenuBar from '../components/MenuBar.js';
import Menu from '../components/Menu.js';

import Item from '../components/Item.js';
// import KatherinRogersImg from '../images/katherin-rogers.jpeg';
// import PortraitPlaceholder from '../images/Portrait_Placeholder.png';

const Catalog = () => {
  useEffect(() => {
    document.title = 'Catalog | JCBenny';
  });
  const menuRef = useRef(null);

  const items = [];

  const srcs = [];

  scanDatabase('/merch', {
    params: {
      expressionAttributeNames: { '#M': 'Merch' },
    },
  }).then((allMerch) => {
    if (allMerch) {
      for (let subset of allMerch) {
        for (let item of subset.Merch) {
          // console.log(JSON.stringify(item));
          console.log(item[2]);
          srcs.push(item[2]);
        }
      }
    }
  });

  for (let src of srcs) getS3Obj(`/merch-imgs/${src}`);

  const prices = [0]; // Replace 0 with price of item represented by aforementioned image

  for (let i = 0; i < srcs.length; i++) {
    prices.push(0);
    items.push(<Item src={srcs[i]} price={prices[i]} />);
  }

  // for (let i = 0; i < 10; i++)
  //   items.push(<Item src={srcs[i]} price={prices[i]} />);

  return (
    <body id='items'>
      <MenuBar menuRef={menuRef} />
      <Menu ref={menuRef} />
      <div className='item-grid'>{items}</div>
    </body>
  );
};

export default Catalog;
