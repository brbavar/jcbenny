import { useRef /*, forwardRef, useState*/ } from 'react';

const Register = () => {
  const formRef = useRef(null);

  const submitForm = () => {
    const registrationForm = formRef.current;
    const form = jsonifyForm(registrationForm);

    const postReq = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    };

    fetch('https://weak-puce-toad-garb.cyclic.app/', postReq).catch((error) =>
      console.log(error)
    );
    // pantryClient.basket
    //   .update('accounts', form, options)
    //   .then((response) => console.log(response));
  };

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

  return (
    <body id='register'>
      <div className='card'>
        <h3>Create an account</h3>
        <form ref={formRef}>
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
              name='Create account'
              type='submit'
              value='Create account'
              //   formaction='https://weak-puce-toad-garb.cyclic.app/'
              //   formmethod='post'
              onClick={submitForm}
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
