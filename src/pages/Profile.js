import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import MenuBar from '../components/MenuBar';
import Menu from '../components/Menu';

import Placeholder from '../images/Portrait_Placeholder.png';

const Profile = (props) => {
  useEffect(() => {
    document.title = `${props.nameOfUser} | JCBenny`;
  });
  const menuRef = useRef(null);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <body id='profile'>
      <MenuBar menuRef={menuRef} />
      <Menu ref={menuRef} />
      <div className='container'>
        <img
          className='profile-pic'
          src={Placeholder}
          alt=''
          height='300px'
          width='auto'
        />
        <h1>{props.nameOfUser}</h1>
        <br />
        <br />
        <button onClick={logOut}>Log out</button>
      </div>
    </body>
  );
};

export default Profile;
