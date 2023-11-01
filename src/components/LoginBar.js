import { forwardRef } from 'react';

const LoginBar = forwardRef((props, ref) => {
  return (
    <div id='login-bar' ref={ref}>
      <a href='login'>
        <button>Sign in</button>
      </a>
      <a href='start'>
        <button>Start free trial</button>
      </a>
    </div>
  );
});

export default LoginBar;
