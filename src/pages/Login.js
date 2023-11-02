import { useState, useEffect } from 'react';

import EyeIconBox from '../components/EyeIconBox';
import { eyeOpen, togglePasswordVisibility } from '../lib/password-visibility';

import { onsubmitHandler } from '../lib/form-handling';

const onfulfilled = async (response) => {
  const nameOfUser = await response.text();
  console.log(`Promise resolved\nresponse = ${nameOfUser}`);

  const loginBody = document.querySelector('#login');
  loginBody.querySelectorAll('*').forEach((elem) => elem.remove());
  loginBody.style.flexDirection = 'column';

  const headerBox = document.createElement('div');
  loginBody.appendChild(headerBox);

  // const br = document.createElement('br');
  // loginBody.appendChild(br);

  const h1 = document.createElement('h1');
  h1.textContent = `HEY THERE, ${nameOfUser.toUpperCase()}!`;
  h1.style.fontFamily = 'Arial';
  h1.style.color = 'white';
  headerBox.appendChild(h1);

  const btnBox = document.createElement('div');
  btnBox.style.display = 'flex';
  btnBox.style.flexDirection = 'column';
  btnBox.style.gap = '1ex';
  loginBody.appendChild(btnBox);

  const links = [];
  const hrefs = ['intro', 'found-a-religion', 'religion-found'];
  const btns = [];
  const labels = ['Get started', 'Found a religion', 'Identify a religion'];
  for (let i = 0; i < 3; i++) {
    links[i] = document.createElement('a');
    links[i].href = hrefs[i];
    btnBox.appendChild(links[i]);

    btns[i] = document.createElement('button');
    btns[i].textContent = labels[i];
    links[i].appendChild(btns[i]);
  }
};

const onrejected = async (response) => {
  console.log(`Promise rejected\nresponse = ${await response.json()}`);
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
          onSubmit={(e) => onsubmitHandler(e, '/', 'GET', onfulfilled, onrejected)}
        >
          <div className='field'>
            <div>Email</div>
            <input type='email' />
          </div>
          <div className='field'>
            <div>Password</div>
            <div className='password-subfield'>
              <input style={{ width: '100%' }} type={passVis} />
              <EyeIconBox
                eyeClickHandler={eyeClickHandler}
                svgPath={svgPath}
                svgCX={svgCX}
                lineWidth={lineWidth}
              />
            </div>
          </div>
          <div className='field'>
            <input className='submit' type='submit' value='SIGN IN' />
          </div>
          <p style={{ fontSize: '10pt' }}>
            New to Religify? <a href='register'>Create an account.</a>
          </p>
        </form>
      </div>
    </body>
  );
};

export default Login;
