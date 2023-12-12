import axios from 'axios';

const nameDups = new Map();

axios.get('https://weak-puce-toad-garb.cyclic.app/names-of-users').then(
  (res) => {
    if (res.data.Count) {
      for (let item of res.data.Items) {
        const fullName = `${item['First name']} ${item['Last name']}`;
        if (nameDups.has(fullName))
          nameDups.set(fullName, nameDups.get(fullName) + 1);
        else nameDups.set(fullName, 1);
      }
    }
  },
  (error) => console.log(error)
);

export { nameDups };
