import axios from 'axios';

export const getS3Obj = async (getObjEndpoint) => {
  try {
    // const res = await axios.get(
    //   `https://jcbenny-api.fly.dev${getObjEndpoint}`
    // );
    // if (res.data.Count) return res.data.Items; // Does response have a member named 'data'?
    axios.get(`https://jcbenny-api.fly.dev${getObjEndpoint}`);
  } catch (error) {
    console.log(error);
  }
};
