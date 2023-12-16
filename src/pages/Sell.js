import { useEffect, useRef, useState } from 'react';
import { useUser } from '../lib/useUser';
import { nameDups } from '../lib/getNameDups';

import MenuBar from '../components/MenuBar';
import Menu from '../components/Menu';

const onfulfilled = async (res) => {
  const container = document.querySelector('#sell > .container');
  let imgBox = container.querySelector('.img-box');

  if (imgBox.style.display === 'none') {
    imgBox.style.display = 'block';
    imgBox.animate(
      [{ transform: 'scale(0)' }, { transform: 'scale(1)' }],
      3000
    );
  }

  const prevImg = imgBox.querySelector('img');
  if (prevImg) prevImg.remove();

  const img = document.createElement('img');
  img.style.height = 'auto';
  img.style.maxWidth = '100%';
  img.src = await res.text();

  imgBox.appendChild(img);

  let btns = container.querySelectorAll('button');
  const sendPromptBtn = btns[0];
  const saleBtn = btns[1];

  const h2 = container.querySelector('h2');
  if (h2) {
    h2.remove();

    const breaks = container.querySelectorAll('br');

    const h4 = document.createElement('h4');
    h4.textContent =
      'Does this resemble the item you had in mind? If not, that may work to your advantage, actually. You want to sell this thing, not accurately represent it to shoppers. But if, for any reason, you want to change the picture, feel free to send another text prompt. Even the one you sent previously will generate a new image if resent.';
    container.insertBefore(h4, breaks[0]);

    sendPromptBtn.textContent = 'Try again';
    saleBtn.style.display = 'block';
  }
};

const sendOpenAIPrompt = (e, description, email) => {
  fetch(
    'https://weak-puce-toad-garb.cyclic.app/private/sell-something/make-pic',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        List: { Description: description },
        Email: email,
      }),
    }
  )
    .then((res) => onfulfilled(res))
    .catch((error) => console.log(error));
};

const makeNameCheckboxes = (container) => {
  const breaks = container.querySelectorAll('br');
  const form = document.createElement('form');
  form.classList.add('checkboxes');
  container.insertBefore(form, breaks[1]);

  for (let [name] of nameDups) {
    const input = document.createElement('input');
    input.type = 'checkbox';

    let nameInIDFormat = name.toLowerCase();
    nameInIDFormat = nameInIDFormat.replaceAll(' ', '-');
    input.id = nameInIDFormat;

    const label = document.createElement('label');
    label.textContent = name;
    label.htmlFor = input.id;

    const newBreak = document.createElement('br');
    [newBreak, input, label].forEach((node) => form.appendChild(node));

    if (nameDups[name] > 1) input.id += ''; // Append to id if there are dups of name
  }
  
  const input = document.createElement('input');
  input.type = 'submit';
};

const handleOfferToSomeoneSpecial = () => {
  const container = document.querySelector('.container');

  const h4 = container.querySelector('h4');
  h4.textContent =
    "Oooo, who's this special someone? Or should I say special someones, plural?";

  const imgBox = container.querySelector('.img-box');
  if (imgBox) {
    imgBox.style.transform = 'scale(0)';
    imgBox.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(0)' }],
      1500
    );

    setTimeout(() => {
      imgBox.remove();

      makeNameCheckboxes(container);
    }, 1500);
  } else makeNameCheckboxes(container);
};

const handleOfferToAnyone = () => {
  const checkboxes = document.querySelector('.checkboxes');
  if (checkboxes) checkboxes.remove();

  const h4 = document.querySelector('h4');
  h4.textContent =
    "Haven't met that special someone yet, eh? Whatever, let's see who'll buy this thing.";
};

const handleSelection = (e) => {
  const offerToSomeoneSpecial = e.target.children[1];

  if (offerToSomeoneSpecial.selected) handleOfferToSomeoneSpecial();
  else handleOfferToAnyone();

  const container = document.querySelector('.container');

  const br = document.createElement('br');
  const btnBox = container.querySelector('.btn-box');
  container.insertBefore(br, btnBox);

  const sellBtn = container.querySelector('button');
  sellBtn.style.display = 'block';
};

const askItemAvailability = () => {
  const container = document.querySelector('.container');

  const h4 = container.querySelector('h4');
  h4.textContent = 'To whom would you like to offer this?';

  const select = document.createElement('select');
  const options = [
    document.createElement('option'),
    document.createElement('option'),
  ];
  options[0].textContent = 'Anyone willing to buy it';
  options[0].selected = true;
  options[1].textContent = 'Someone special';
  options.forEach((option) => select.appendChild(option));
  select.onchange = (e) => handleSelection(e);

  const descriptionField = document.getElementById('description-field');
  descriptionField.remove();

  const breaks = document.querySelectorAll('br');
  const btns = container.querySelectorAll('button');
  btns[0].remove();
  btns[1].remove();
  container.insertBefore(select, breaks[2]);

  const newBreak = document.createElement('br');
  container.insertBefore(newBreak, breaks[2]);
  for (let i = 0; i < 3; i++) breaks[i].remove();
};

const putItemUpForSale = (e, description, potentialBuyers, email) => {
  const img = document.querySelector('#sell .img-box > img');
  fetch(
    'https://weak-puce-toad-garb.cyclic.app/private/sell-something/save-pic',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        List: {
          Description: description,
          PotentialBuyers: potentialBuyers,
          ImgURL: img.src,
        },
        Email: email,
      }),
    }
  )
    .then((res) => {
      res.text().then((text) => {
        console.log(text);
      });
    })
    .catch((error) => console.log(error));
};

const Sell = () => {
  useEffect(() => {
    document.title = 'Sell something | JCBenny';
  });
  const menuRef = useRef(null);

  const user = useUser();
  const { Email } = user;

  const [description, setDescription] = useState('Item description');
  const [changed, setChanged] = useState(false);
  const [reverted, setReverted] = useState(false);
  const [potentialBuyers, setPotentialBuyers] = useState([]);

  return (
    <body id='sell'>
      <MenuBar menuRef={menuRef} />
      <Menu ref={menuRef} />
      <div className='container'>
        <h2>What do you have to sell?</h2>
        <input
          id='description-field'
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            setChanged(true);
          }}
          onClick={(e) => {
            if (!changed || reverted) {
              setDescription('');
              e.target.style.color = 'rgb(235, 235, 179)';
              setReverted(false);
            }
          }}
          onBlur={(e) => {
            if (e.target.value === '') {
              setDescription('Item description');
              e.target.style.color = 'rgba(235, 235, 179, 0.3)';
              setReverted(true);
            }
          }}
        />
        <div className='btn-box'>
          <button
            className='submit'
            onClick={(e) => sendOpenAIPrompt(e, description, Email)}
          >
            Make ad
          </button>
          <button
            style={{ display: 'none' }}
            className='submit'
            onClick={askItemAvailability}
          >
            Stick with this
          </button>
          <button
            style={{ display: 'none' }}
            className='submit'
            onClick={(e) =>
              putItemUpForSale(e, description, potentialBuyers, Email)
            }
          >
            Sell
          </button>
        </div>
        <div style={{ display: 'none' }} className='img-box'></div>
      </div>
    </body>
  );
};

export default Sell;
