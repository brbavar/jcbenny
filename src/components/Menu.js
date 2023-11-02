import { forwardRef } from 'react';

const Menu = forwardRef((props, ref) => {
  return (
    <div id='menu' ref={ref}>
      <div>
        <a href='intro'>Mission</a>
      </div>
      <div>
        <a href='philosophers'>Philosophers of Religion</a>
      </div>
      <div>
        <a href='definition'>Definition</a>
      </div>
      <div>
        <a href='demarcation'>Demarcation</a>
      </div>
      <div>
        <a href='religion-founding'>Religion Founding</a>
      </div>
      <div>
        <a href='religion-finding'>Religion Finding</a>
      </div>
    </div>
  );
});

export default Menu;
