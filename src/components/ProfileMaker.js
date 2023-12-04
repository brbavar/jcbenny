import { Route, Outlet } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import Profile from '../pages/Profile';
let profileRoutes, setProfileRoutes;

const onfulfilled = (res, nameDupArr, profileRouteArr) => {
  const [nameDups, setNameDups] = nameDupArr;
  let [profileRoutes, setProfileRoutes] = profileRouteArr;

  if (res.data.Count) {
    let updatedNameDups = new Map();
    console.log(`nameDups.size = ${nameDups.size}`);
    // if (nameDups.size)
    //   for (let [name] of nameDups) {
    //     //   console.log(`name = ${name}`);
    //     updatedNameDups.set(name, nameDups.get(name));
    //   }

    // console.log(`res.data.Items.length = ${res.data.Items.length}`);
    let i = 1;
    for (let item of res.data.Items) {
      const fullName = `${item['First name']} ${item['Last name']}`;

      console.log(`${i++}: fullName = ${fullName}`);

      if (updatedNameDups.has(fullName))
        updatedNameDups.set(fullName, updatedNameDups.get(fullName) + 1);
      else updatedNameDups.set(fullName, 1);

      setNameDups(updatedNameDups); // This line causes all the issues

      // console.log(`nameDups.size = ${nameDups.size}`);
    }
  }

  // for (let [name] of nameDups) {
  //   // console.log(`name = ${name}`);
  //   let nameInPath = name.toLowerCase();
  //   for (let i = 0; i < nameInPath.length; i++)
  //     if (nameInPath[i] === ' ') nameInPath[i] = '-';

  //   if (nameDups.get(name) > 1) nameInPath += `-${crypto.randomUUID()}`;

  //   setProfileRoutes([
  //     ...profileRoutes,
  //     <Route
  //       path={`/profile/${nameInPath}`}
  //       element={<Profile nameOfUser={name} />}
  //     />,
  //   ]);
  // }
};

const ProfileMaker = () => {
  console.log('top of ProfileMaker');

  const [nameDups, setNameDups] = useState(new Map());
  [profileRoutes, setProfileRoutes] = useState([]);
  const nameDupArr = [nameDups, setNameDups];
  const profileRouteArr = [profileRoutes, setProfileRoutes];

  axios
    .get('https://weak-puce-toad-garb.cyclic.app/names-of-users')
    .then((res) => onfulfilled(res, nameDupArr, profileRouteArr))
    .catch((error) => console.log(error));

  return <Outlet />;
};

export { ProfileMaker, profileRoutes };
