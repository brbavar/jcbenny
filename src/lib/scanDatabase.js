import axios from 'axios';

export const scanDatabase = async (scanEndpoint, params = null) => {
  try {
    const res = await axios.get(
      `https://weak-puce-toad-garb.cyclic.app${scanEndpoint}`,
      params
    );
    if (res.data.Count) return res.data.Items;
  } catch (error) {
    console.log(error);
  }
};
