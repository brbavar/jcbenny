import { useState } from 'react';

const sendOpenAIPrompt = (e, description) => {
  fetch('https://weak-puce-toad-garb.cyclic.app/private/sell-something', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ Description: description }),
  }).catch((error) => console.log(error));
};

const Sell = () => {
  const [description, setDescription] = useState('');
  return (
    <body id='sell'>
      <h2>What do you have to sell?</h2>
      <input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        className='submit'
        onClick={(e) => sendOpenAIPrompt(e, description)}
      >
        Sell
      </button>
    </body>
  );
};

export default Sell;
