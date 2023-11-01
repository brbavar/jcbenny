import { forwardRef } from 'react';

const LoginBar = forwardRef((props, ref) => {
  return (
    <div id='login-bar' ref={ref}>
      <a href='login'>
        <button>Sign in</button>
      </a>
      <a href='lorem-ipsum'>
        <button>Lorem ipsum</button>
      </a>
    </div>
  );
});

export default LoginBar;
