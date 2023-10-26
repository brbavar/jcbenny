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

const onsubmitHandler = (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = jsonifyForm(form);
  // const formData = new FormData(form);

  const postReq = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    // body: formData,
  };

  // console.log(`form contents: ${JSON.stringify(form)}`);

  fetch('https://weak-puce-toad-garb.cyclic.app/', postReq).catch((error) =>
    console.log(error)
  );
  // fetch('https://weak-puce-toad-garb.cyclic.app/', postReq)
  //   .then((window.location.href = '/registered'))
  //   .catch((error) => console.log(error));
};

const Register = () => {
  return (
    <body id='register'>
      <div className='card'>
        <h3>Create an account</h3>
        <form
          // action='https://weak-puce-toad-garb.cyclic.app/'
          onSubmit={onsubmitHandler}
        >
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
            </div>
            <div className='field'>
              <div>Confirm new password</div>
              <input name='Confirm new password' type='password' />
            </div>
          </div>
          <div className='field'>
            <input
              className='submit'
              type='submit'
              // formAction='https://weak-puce-toad-garb.cyclic.app/'
              // formMethod='post'
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
