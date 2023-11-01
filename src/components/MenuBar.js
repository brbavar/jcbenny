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

export default MenuBar;
