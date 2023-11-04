import { useState, useEffect } from 'react';

import EyeIconBox from '../components/EyeIconBox';
import { eyeOpen, togglePasswordVisibility } from '../lib/password-visibility';

import { onsubmitHandler } from '../lib/form-handling';

const onfulfilled = async (response) => {
  console.log(await response.json());
  if (response.status === 400) {
    return;
  } else {
    const card = document.querySelector('#register > div.card');
    card.querySelectorAll('*').forEach((elem) => elem.remove());
    const h2 = document.createElement('h2');
    card.appendChild(h2);
    h2.textContent = 'Your account was successfully created!';
  }
};

const Register = () => {
  useEffect(() => {
    document.title = 'Create an account';
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <body id='register'>
      <div className='card'>
        <h3>Create an account</h3>
        <form
          onSubmit={(e) => onsubmitHandler(e, '/register', 'POST', onfulfilled)}
        >
          <div className='field'>
            <div>Email</div>
            <input
              name='Email'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='name-section'>
            <div className='field'>
              <div>First name</div>
              <input name='First name' type='text' />
            </div>
            <div className='field'>
              <div>Last name</div>
              <input name='Last name' type='text' />
            </div>
          </div>
          <div className='password-section'>
            <div className='field'>
              <div>Password</div>
              <div className='password-subfield'>
                <input
                  style={{ width: '100%' }}
                  name='Password'
                  type={passVis}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <EyeIconBox
                  eyeClickHandler={eyeClickHandler}
                  svgPath={svgPath}
                  svgCX={svgCX}
                  lineWidth={lineWidth}
                />
              </div>
            </div>
            <div className='field'>
              <div>Confirm password</div>
              <div className='password-subfield'>
                <input
                  style={{ width: '100%' }}
                  name='Confirm password'
                  type={passVis}
                />
                <EyeIconBox
                  eyeClickHandler={eyeClickHandler}
                  svgPath={svgPath}
                  svgCX={svgCX}
                  lineWidth={lineWidth}
                />
              </div>
            </div>
          </div>
          <div className='field'>
            <input
              className='submit'
              type='submit'
              name='Create account'
              value='Create account'
              disabled={!(email && password)}
            />
          </div>
          <p style={{ fontSize: '10pt' }}>
            Already have an account? <a href='login'>Sign in.</a>
          </p>
        </form>
      </div>
    </body>
  );
};

export default Register;
