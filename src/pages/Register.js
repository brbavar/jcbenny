const Register = () => {
  return (
    <body id='register'>
      <div className='card'>
        <h3>Create an account</h3>
        <form>
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
              formaction='https://weak-puce-toad-garb.cyclic.app/'
              formmethod='post'
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
