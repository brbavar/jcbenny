import { useState, useEffect } from 'react';
import { useToken } from '../lib/useToken';

import EyeIconBox from '../components/EyeIconBox';
import { eyeOpen, togglePasswordVisibility } from '../lib/password-visibility';

import onsubmitHandler from '../lib/onsubmitHandler';

const Login = () => {
  useEffect(() => {
    document.title = 'Sign in | JCBenny';
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

  let [token, setToken] = useToken();

  const onfulfilled = async (response) => {
    ({ token } = await response.json());
    setToken(token);

    // const nameOfUser = await response.text();
    const nameOfUser = 'Lorem Ipsum';
    console.log(`Promise resolved\nresponse = ${token}`);

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
    const hrefs = ['home', 'private/my-profile', 'private/sell-something'];
    const btns = [];
    const labels = ['Get started', 'View profile', 'Sell something'];
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
    console.log(`Promise rejected\nresponse = ${await response}`);
  };

  return (
    <body id='login'>
      <div className='card'>
        <h3>Sign in</h3>
        <form
          onSubmit={(e) =>
            onsubmitHandler(e, '/', 'GET', onfulfilled, onrejected)
          }
        >
          <div className='field'>
            <div>Email</div>
            <input type='email' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='field'>
            <div>Password</div>
            <div className='password-subfield'>
              <input
                style={{ width: '100%' }}
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
            <input
              className='submit'
              type='submit'
              value='SIGN IN'
              disabled={!(email && password)}
            />
          </div>
          <p style={{ fontSize: '10pt' }}>
            New to JCBenny? <a href='register'>Create an account.</a>
          </p>
        </form>
      </div>
    </body>
  );
};

export default Login;
