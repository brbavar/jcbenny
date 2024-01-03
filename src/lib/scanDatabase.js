import axios from 'axios';

export const scanDatabase = (scanEndpoint) => {
  axios.get(`https://weak-puce-toad-garb.cyclic.app${scanEndpoint}`).then(
    (res) => {
      if (res.data.Count) return res.data.Items;
    },
    (error) => console.log(error)
  );
};
