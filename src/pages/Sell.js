import { useState } from 'react';
import { useUser } from '../lib/useUser';

const onfulfilled = async (res) => {
  const card = document.querySelector('#sell > .card');
  const imgBox = card.querySelector('.img-box');

  const prevImg = imgBox.querySelector('img');
  if (prevImg) prevImg.remove();

  const img = document.createElement('img');
  img.height = 500;
  img.width = 500;
  img.src = await res.text();

  imgBox.appendChild(img);

  let btns = card.querySelectorAll('button');
  const sendPromptBtn = btns[0];
  const saleBtn = btns[1];

  const h2 = card.querySelector('h2');
  if (h2) {
    h2.remove();

    const input = card.querySelector('input');

    const h3 = document.createElement('h3');
    h3.textContent =
      'Does this resemble the item you had in mind? If not, that may work to your advantage, actually. You want to sell this thing, not accurately represent it to shoppers. But if, for any reason, you want to change the picture, feel free to send another text prompt. Even the one you sent previously will generate a new image if resent.';
    card.insertBefore(h3, input);

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

const putItemUpForSale = (e, description, email) => {
  const img = document.querySelector('#sell > .card > .img-box > img');
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
  const user = useUser();
  const { Email } = user;

  const [description, setDescription] = useState('');

  return (
    <body id='sell'>
      <div className='card'>
        <h2>What do you have to sell?</h2>
        <input
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button
          className='submit'
          onClick={(e) => sendOpenAIPrompt(e, description, Email)}
        >
          Sell
        </button>
        <button
          style={{ display: 'none' }}
          className='submit'
          onClick={(e) => putItemUpForSale(e, description, Email)}
        >
          Stick with this
        </button>
        <div className='img-box'></div>
      </div>
    </body>
  );
};

export default Sell;
