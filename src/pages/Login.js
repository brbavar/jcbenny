import { useState, useEffect } from 'react';

import EyeIcon from '../components/EyeIcon';
import { eyeOpen, togglePasswordVisibility } from '../lib/password-visibility';

import { onsubmitHandler } from '../lib/form-handling';

const onfulfilled = (response) => {
  console.log(`Promise resolved\nresponse = ${Object.keys(response)}`);
};

const onrejected = (response) => {
  console.log(`Promise rejected\nResponse keys are ${Object.keys(response)}`);
};

const Login = () => {
  useEffect(() => {
    document.title = 'Sign in';
  });

  const [svgPath, setSVGPath] = useState(eyeOpen);
  const [svgCX, setSVGcx] = useState('56.5');
  const [lineWidth, setLineWidth] = useState('0');

  const [passVis, setPassVis] = useState('password');

  const eyeClickHandler = () =>
    togglePasswordVisibility(
      [passVis, setPassVis],
      [svgPath, setSVGPath],
      [svgCX, setSVGcx],
      [lineWidth, setLineWidth]
    );

  return (
    <body id='login'>
      <div className='card'>
        <h3>Sign in</h3>
        <form
          onSubmit={(e) => onsubmitHandler(e, 'GET', onfulfilled, onrejected)}
        >
          <div className='field'>
            <div>Email</div>
            <input type='email' />
          </div>
          <div className='field'>
            <div>Password</div>
            <input type={passVis} />
            <EyeIcon
              eyeClickHandler={eyeClickHandler}
              svgPath={svgPath}
              svgCX={svgCX}
              lineWidth={lineWidth}
            />
          </div>
          <div className='field'>
            <input className='submit' type='submit' value='SIGN IN' />
          </div>
          <p style={{ fontSize: '10pt' }}>
            New to Litrit? <a href='register'>Create an account.</a>
          </p>
        </form>
      </div>
    </body>
  );
};

export default Login;
