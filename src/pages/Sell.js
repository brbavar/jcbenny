import { useState } from 'react';
import { useUser } from '../lib/useUser';

const onfulfilled = async (res) => {
  const img = document.createElement('img');
  img.height = 500;
  img.width = 500;
  img.src = await res.text();

  const imgBox = document.querySelector('#sell > .card > .img-box');
  imgBox.appendChild(img);
};

const sendOpenAIPrompt = (e, description, email) => {
  fetch('https://weak-puce-toad-garb.cyclic.app/private/sell-something', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ List: { Description: description }, Email: email }),
  })
    .then((res) => onfulfilled(res))
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
        <div className='img-box'></div>
      </div>
    </body>
  );
};

export default Sell;
