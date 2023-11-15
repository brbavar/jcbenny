import { useNavigate } from 'react-router-dom';

import Placeholder from '../images/Portrait_Placeholder.png';

const MyProfile = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <body id='profile'>
      <img
        className='profile-pic'
        src={Placeholder}
        alt=''
        height='300px'
        width='auto'
      />
      <button onClick={logOut}>Log out</button>
    </body>
  );
};

export default MyProfile;
