import axios from 'axios';

export const scanDatabase = (scanEndpoint) => {
  let scanResults = null;

  axios.get(`https://weak-puce-toad-garb.cyclic.app${scanEndpoint}`).then(
    (res) => {
      if (res.data.Count) scanResults = res.data.Items;
    },
    (error) => console.log(error)
  );

  return scanResults;
};
