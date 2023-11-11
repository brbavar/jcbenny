import Placeholder from '../images/Portrait_Placeholder.png';

const MyProfile = () => {
  return (
    <body id='profile'>
      <img
        className='profile-pic'
        src={Placeholder}
        alt=''
        height='300px'
        width='auto'
      />
    </body>
  );
};

export default MyProfile;
