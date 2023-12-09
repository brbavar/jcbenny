import { Route, Outlet } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import axios from 'axios';

import Profile from '../pages/Profile';
const profileRoutes = [];

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
};

const ProfileMaker = () => {
  console.log('top of ProfileMaker');

  // const [nameDups, setNameDups] = useState(new Map());
  // [profileRoutes, setProfileRoutes] = useState([]);

  // const nameDupArr = [nameDups, setNameDups];
  // const profileRouteArr = [profileRoutes, setProfileRoutes];

  axios.get('https://weak-puce-toad-garb.cyclic.app/names-of-users').then(
    (res) => onfulfilled(res),
    (error) => console.log(error)
  );

  // useEffect(
  //   () =>
  //     axios.get('https://weak-puce-toad-garb.cyclic.app/names-of-users').then(
  //       (res) =>
  //         onfulfilled(
  //           res,
  //           nameDups,
  //           setNameDups,
  //           profileRoutes,
  //           setProfileRoutes /*nameDupArr, profileRouteArr*/
  //         ),
  //       (error) => console.log(error)
  //     ),
  //   []
  // );

  // useEffect(
  //   () =>
  //     fetch('https://weak-puce-toad-garb.cyclic.app/names-of-users', {
  //       method: 'GET',
  //     }).then(
  //       (res) =>
  //         onfulfilled(
  //           res,
  //           nameDups,
  //           setNameDups,
  //           profileRoutes,
  //           setProfileRoutes /*nameDupArr, profileRouteArr*/
  //         ),
  //       (error) => console.log(error)
  //     ),
  //   []
  // );

  return <Outlet />;
};

export { ProfileMaker, profileRoutes };
