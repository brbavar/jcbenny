const jsonifyForm = (form) => {
  const formKeyNodes = form.querySelectorAll(
    '.field > :nth-child(1):not(.submit)'
  );
  const formValNodes = form.querySelectorAll('.field > :nth-child(2)');

  const jsonifiedForm = {};
  for (var i = 0; i < formKeyNodes.length; i++)
    jsonifiedForm[formKeyNodes[i].textContent] = formValNodes[i].value;

  return jsonifiedForm;
};

const onfulfilled = (response) => {
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

const onsubmitHandler = (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = jsonifyForm(form);

  const postReq = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  };

  fetch('https://weak-puce-toad-garb.cyclic.app/', postReq)
    .then(onfulfilled)
    .catch((error) => console.log(error));
};

const Register = () => {
  return (
    <body id='register'>
      <div className='card'>
        <h3>Create an account</h3>
        <form onSubmit={onsubmitHandler}>
          <div className='field'>
            <div>Email</div>
            <input name='Email' type='email' />
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
              <input name='Password' type='password' />
              <svg
                className='eye-icon'
                width='113'
                height='66'
                viewBox='0 0 113 66'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.27609 36.4595C4.97334 35.0498 3.9448 33.8621 3.22114 33C3.9448 32.1379 4.97334 30.9502 6.27609 29.5405C9.07439 26.5125 13.1228 22.4764 18.1184 18.4456C28.1762 10.33 41.7458 2.5 56.5 2.5C71.2542 2.5 84.8238 10.33 94.8816 18.4456C99.8772 22.4764 103.926 26.5125 106.724 29.5405C108.027 30.9502 109.055 32.1379 109.779 33C109.055 33.8621 108.027 35.0498 106.724 36.4595C103.926 39.4875 99.8772 43.5236 94.8816 47.5544C84.8238 55.67 71.2542 63.5 56.5 63.5C41.7458 63.5 28.1762 55.67 18.1184 47.5544C13.1228 43.5236 9.07439 39.4875 6.27609 36.4595Z'
                  stroke='black'
                  stroke-width='5'
                />
                <circle cx='56.5' cy='33.5' r='18.5' fill='black' />
              </svg>
            </div>
            <div className='field'>
              <div>Confirm new password</div>
              <input name='Confirm new password' type='password' />
              <svg
                className='eye-icon'
                width='113'
                height='66'
                viewBox='0 0 113 66'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.27609 36.4595C4.97334 35.0498 3.9448 33.8621 3.22114 33C3.9448 32.1379 4.97334 30.9502 6.27609 29.5405C9.07439 26.5125 13.1228 22.4764 18.1184 18.4456C28.1762 10.33 41.7458 2.5 56.5 2.5C71.2542 2.5 84.8238 10.33 94.8816 18.4456C99.8772 22.4764 103.926 26.5125 106.724 29.5405C108.027 30.9502 109.055 32.1379 109.779 33C109.055 33.8621 108.027 35.0498 106.724 36.4595C103.926 39.4875 99.8772 43.5236 94.8816 47.5544C84.8238 55.67 71.2542 63.5 56.5 63.5C41.7458 63.5 28.1762 55.67 18.1184 47.5544C13.1228 43.5236 9.07439 39.4875 6.27609 36.4595Z'
                  stroke='black'
                  stroke-width='5'
                />
                <circle cx='56.5' cy='33.5' r='18.5' fill='black' />
              </svg>
            </div>
          </div>
          <div className='field'>
            <input
              className='submit'
              type='submit'
              name='Create account'
              value='Create account'
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
