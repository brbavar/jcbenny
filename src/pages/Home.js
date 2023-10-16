import { useRef, forwardRef, useState } from 'react';

const Overlay = forwardRef((props, ref) => {
  return <div id='overlay' ref={ref}></div>;
});

const MenuIcon = (props) => {
  const [xified, setXified] = useState(false);
  const [clickedOnce, setClickedOnce] = useState(false);
  const opacifiables = [props.menuRef, props.overlayRef, props.loginBarRef];

  const toggleOpacity = (elem) => {
    if (elem) {
      elem.current.classList.add(xified ? 'hidden' : 'shown');
      elem.current.classList.remove(xified ? 'shown' : 'hidden');

      var items;
      const isMenu = elem === props.menuRef;
      const isLoginBar = elem === props.loginBarRef;
      if (isMenu || isLoginBar)
        items = elem.current.querySelectorAll(isMenu ? 'a' : '#login-bar > a');

      if (items) {
        if (xified) {
          for (let item of items) item.classList.remove('active');
        } else {
          for (let item of items) item.classList.add('active');
        }
      }
    }
  };

  return (
    <div
      id='menu-icon'
      onClick={() => {
        setXified(!xified);
        if (!clickedOnce) setClickedOnce(true);
        for (let elem of opacifiables) toggleOpacity(elem);
      }}
      className={xified ? 'x-ified' : clickedOnce ? 'de-x-ified' : ''}
    >
      <div style={{ cursor: 'pointer' }}></div>
      <div></div>
      <div style={{ cursor: 'pointer' }}></div>
    </div>
  );
};

const MenuBar = (props) => {
  const overlayRef = useRef(null);
  return (
    <div id='menu-bar'>
      <Overlay ref={overlayRef} />
      <MenuIcon
        menuRef={props.menuRef}
        overlayRef={overlayRef}
        loginBarRef={props.loginBarRef}
      />
    </div>
  );
};

const Menu = forwardRef((props, ref) => {
  return (
    <div id='menu' ref={ref}>
      <div>
        <a href='catalog'>Catalog</a>
      </div>
      <div>
        <a href='pricing'>Pricing</a>
      </div>
    </div>
  );
});

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

const Home = () => {
  const menuRef = useRef(null);
  const loginBarRef = useRef(null);
  return (
    <div>
      <MenuBar menuRef={menuRef} loginBarRef={loginBarRef} />
      <Menu ref={menuRef} />
      <LoginBar ref={loginBarRef} />
    </div>
  );
};

export default Home;
