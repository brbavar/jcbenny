import { forwardRef } from 'react';

const Menu = forwardRef((props, ref) => {
  return (
    <div id='menu' ref={ref}>
      <div>
        <a href='philosophers'>Philosophers of Religion</a>
      </div>
      <div>
        <a href='demarcation'>Demarcation</a>
      </div>
      <div>
        <a href='inner-life'>Inner Life</a>
      </div>
      <div>
        <a href='outer-life'>Outer Life</a>
      </div>
    </div>
  );
});

export default Menu;
