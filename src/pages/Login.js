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
