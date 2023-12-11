import { Route, Outlet } from 'react-router-dom';
import axios from 'axios';

import Profile from '../pages/Profile.js';
let profileRoutes = [];

const onfulfilled = async (res) => {
  const nameDups = new Map();
  if (res.data.Count) {
    for (let item of res.data.Items) {
      const fullName = `${item['First name']} ${item['Last name']}`;
      if (nameDups.has(fullName))
        nameDups.set(fullName, nameDups.get(fullName) + 1);
      else nameDups.set(fullName, 1);
    }
  }

  // const profileRoutes = [];
  for (let [name] of nameDups) {
    let nameInPath = name.toLowerCase();
    nameInPath = nameInPath.replaceAll(' ', '-');

    if (nameDups.get(name) > 1) nameInPath += `-${crypto.randomUUID()}`;

    console.log(nameInPath);

    profileRoutes.push(
      <Route
        path={`/profile/${nameInPath}`}
        element={<Profile nameOfUser={name} />}
      />
    );
  }

  // return profileRoutes;
};

// let profileRoutesPromise = new Promise(
//   () => console.log('promise resolved'),
//   (error) => console.log(error)
// );

axios.get('https://weak-puce-toad-garb.cyclic.app/names-of-users').then(
  (res) => {
    console.log('inside get');
    onfulfilled(res);
    // profileRoutesPromise = onfulfilled(res);
  },
  (error) => console.log(error)
);

const ProfileMaker = () => {
  // axios.get('https://weak-puce-toad-garb.cyclic.app/names-of-users').then(
  //   (res) => {
  //     console.log('inside get');
  //     profileRoutesPromise = onfulfilled(res);
  //   },
  //   (error) => console.log(error)
  // );

  return <Outlet />;
};

export { ProfileMaker, profileRoutes /*Promise*/ };
