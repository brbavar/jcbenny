import { forwardRef } from 'react';

const Menu = forwardRef((props, ref) => {
  return (
    <div id='menu' ref={ref}>
      <div>
        <a href='/shop'>Catalog</a>
      </div>
      <div>
        <a href='/pricing'>Pricing</a>
      </div>
    </div>
  );
});

export default Menu;
