import axios from 'axios';

export const scanDatabase = async (scanEndpoint) => {
  try {
    const res = await axios.get(`https://jcbenny-api.fly.dev${scanEndpoint}`);
    // const res = fetch(`https://jcbenny-api.fly.dev${scanEndpoint}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    if (res.data.Count) return res.data.Items;
  } catch (error) {
    console.log(error);
  }
};
