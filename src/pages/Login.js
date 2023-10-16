const Login = () => {
  return (
    <body id='login'>
      <div className='card'>
        <h3>Sign in</h3>
        <form>
          <div className='field'>
            <div>Email</div>
            <input type='email' />
          </div>
          <div className='field'>
            <div>Password</div>
            <input type='password' />
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
