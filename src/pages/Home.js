import { useRef } from 'react';

import MenuBar from '../components/MenuBar';
import Menu from '../components/Menu';
import LoginBar from '../components/LoginBar';

const Home = () => {
  const menuRef = useRef(null);
  const loginBarRef = useRef(null);
  return (
    <div>
      <MenuBar menuRef={menuRef} loginBarRef={loginBarRef} />
      <Menu ref={menuRef} />
      <LoginBar ref={loginBarRef} />
    </div>
  );
};

export default Home;
