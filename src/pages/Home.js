import { useRef } from 'react';

import MenuBar from '../components/MenuBar';
import Menu from '../components/Menu';
import LoginBar from '../components/LoginBar';

const Home = () => {
  const menuRef = useRef(null);
  const loginBarRef = useRef(null);
  return (
    <body id='home'>
      <MenuBar menuRef={menuRef} loginBarRef={loginBarRef} />
      <Menu ref={menuRef} />
      <LoginBar ref={loginBarRef} />
    </body>
  );
};

export default Home;
