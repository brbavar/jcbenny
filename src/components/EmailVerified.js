import { useNavigate } from 'react-router-dom';

export const EmailVerified = () => {
  const navigate = useNavigate();

  return (
    <body>
      <div>
        <h1>Success!</h1>
        <p>
          Thanks for verifying your email! Now you can start shopping—or
          selling, as the case may be.
        </p>
        <button onClick={() => navigate('/shop')}>Shop</button>
        <button onClick={() => navigate('/sell-something')}>
          Sell something
        </button>
      </div>
    </body>
  );
};
