import { useRef } from 'react';

import MenuBar from '../components/MenuBar';
import Menu from '../components/Menu';
import Quote from '../components/Quote';

const Intro = () => {
  const menuRef = useRef(null);
  return (
    <body id='intro'>
      <MenuBar menuRef={menuRef} />
      <Menu ref={menuRef} />
      <h1>Religify's Mission</h1>
      <p>
        Mainstream philosophy of religion has fallen into disrepute, even among
        its own practitioners. The discipline sorely needs reconstruction and
        reinvigoration—of the sort Willard Van Orman Quine famously spearheaded
        in metaphysics, a field which was in Quine's day lambasted by an
        influential cadre of philosophers and scientists known as the Vienna
        Circle. One of Quine's most germane theses is:
      </p>
      <Quote
        text={
          '[P]hilosophy . . . as an effort to get clearer on things, is not to be distinguished in essential points of purpose and method from good and bad science.'
        }
      />
      <p></p>
    </body>
  );
};

export default Intro;
