import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const VerifyEmail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 10000);
  }, [navigate]);

  return (
    <body id='verify-email'>
      <div>
        <h1>Thanks for signing up!</h1>
        <p>
          We just sent you a verification email. You must verify your email
          address to enjoy all that JCBenny has to offer. So, what are you
          waiting for? Check your inbox!
        </p>
      </div>
    </body>
  );
};
