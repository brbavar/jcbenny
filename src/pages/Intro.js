import { useRef } from 'react';

import MenuBar from '../components/MenuBar';
import Menu from '../components/Menu';
import Quote from '../components/Quote';

const Intro = () => {
  const menuRef = useRef(null);
  return (
    <div id='intro'>
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
      <p>[Insert brief explanation]</p>
      <p>
        23 years after Quine penned this line, Larry Laudan's celebrated
        philosophy of science article, "The Demise of the Demarcation Problem,"
        was published. The article argued that, much as there is no sharp
        boundary between philosophy and science, there is no sharp boundary
        between science and pseudoscience—or non-science. One might think that
        all these blurred lines would muddle matters, but in actuality their
        discovery shed considerable light on both philosophy and science.
        Philosophers, including philosophers of religion, began to take their
        cues from scientists—and to good effect. And philosophers of science
        developed a deeper appreciation for the virtues of theories and
        practices whose status as scientific was questionable at best, as well
        as the vices of those that were undeniably scientific. Similar
        innovations, I claim, are imminent in philosophy of religion. Just as
        metaphysicians now recognize that philosophy and science serve similar
        purposes in similar ways, philosophers of religion will have no choice
        but to acknowledge that religion functions much like other institutions,
        philosophies, lifestyles, etc., such as therapy, nationalism, and
        Marxism. In a word, religion is not special. Consequently, it can
        manifest in a plethora of forms, and the more one knows about the forms
        it takes, the more aware one is of how counterproductive it is to study
        one to the exclusion of the others. Once this insight is taken to its
        logical conclusion, a new agenda for philosophy of religion will
        practically set itself.
      </p>
      <p>
        But in what ways, and for what reasons, has philosophy of religion gone
        astray? For starters, as I have alluded to, its focus is extremely
        parochial and ethnocentric. And even setting aside the worry that
        philosophy of religion has an unhealthy obsession with the
        Abrahamic/Judeo-Christian God, particularly with whether he exists, we
        can see that its approach to inquiry about God is fundamentally
        wrongheaded. For both theistic and nontheistic philosophers of religion
        generally take for granted that God is a perfect being. As Anselm put
        it, God is that than which none greater can be conceived. But this
        definition of God as the greatest possible being has always been
        unfounded.
      </p>
    </div>
  );
};

export default Intro;
