import { useNavigate } from 'react-router-dom';

export const EmailNotVerified = () => {
  const navigate = useNavigate();

  return (
    <body>
      <div>
        <h1>Oh no...</h1>
        <p>Your email could not be verified.</p>
        <button onClick={() => navigate('/register')}>Sign up again</button>
      </div>
    </body>
  );
};
