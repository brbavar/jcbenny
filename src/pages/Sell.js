import { useEffect, useRef, useState } from 'react';
import { useUser } from '../lib/useUser';

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

const setItemAvailability = (e, setPotentialBuyers) => {
  const h4 = document.querySelector('h4');
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

  const container = document.querySelector('.container');
  const breaks = document.querySelectorAll('br');
  const btnBox = document.querySelector('.btn-box');
  btnBox.remove();
  container.insertBefore(select, breaks[3]);

  const newBreak = document.createElement('br');
  container.insertBefore(newBreak, breaks[3]);
};

const putItemUpForSale = (e, description, email) => {
  const img = document.querySelector('#sell .img-box > img');
  fetch(
    'https://weak-puce-toad-garb.cyclic.app/private/sell-something/save-pic',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        List: { Description: description, ImgURL: img.src },
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
  const [potentialBuyers, setPotentialBuyers] = useState('');

  return (
    <body id='sell'>
      <MenuBar menuRef={menuRef} />
      <Menu ref={menuRef} />
      {/* <div className='card'> */}
      <div className='container'>
        <h2>What do you have to sell?</h2>
        <br />
        <input
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
        <br />
        <br />
        <div className='btn-box'>
          <button
            className='submit'
            onClick={(e) => sendOpenAIPrompt(e, description, Email)}
          >
            Sell
          </button>
          <button
            style={{ display: 'none' }}
            className='submit'
            onClick={(e) => setItemAvailability(e, setPotentialBuyers)}
          >
            Stick with this
          </button>
          <button
            style={{ display: 'none' }}
            className='submit'
            onClick={(e) => putItemUpForSale(e, description, Email)}
          >
            Stick with this
          </button>
        </div>
        <br />
        <div style={{ display: 'none' }} className='img-box'></div>
      </div>
      {/* </div> */}
    </body>
  );
};

export default Sell;
