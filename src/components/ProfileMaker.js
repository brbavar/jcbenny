import { Route, Outlet } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import Profile from '../pages/Profile';
let profileRoutes, setProfileRoutes;

const onfulfilled = (
  res,
  nameDups,
  setNameDups,
  profileRoutes,
  setProfileRoutes /*nameDupArr, profileRouteArr*/
) => {
  // const [nameDups, setNameDups] = nameDupArr;
  // let [profileRoutes, setProfileRoutes] = profileRouteArr;

  if (res.data.Count) {
    let updatedNameDups = new Map();
    console.log(`nameDups.size = ${nameDups.size}`);
    if (nameDups.size)
      for (let [name] of nameDups) {
        //   console.log(`name = ${name}`);
        updatedNameDups.set(name, nameDups.get(name));
      }

    // console.log(`res.data.Items.length = ${res.data.Items.length}`);
    let i = 1;
    for (let item of res.data.Items) {
      const fullName = `${item['First name']} ${item['Last name']}`;

      console.log(`${i++}: fullName = ${fullName}`);

      if (nameDups.has(fullName)) {
        console.log('nameDups.has(fullName) returns true');
        console.log(`nameDups.get(fullName) = ${nameDups.get(fullName)}`);
        updatedNameDups.set(fullName, nameDups.get(fullName) + 1);
        console.log(
          `updatedNameDups.get(fullName) = ${updatedNameDups.get(fullName)}`
        );
      } else updatedNameDups.set(fullName, 1);

      // setNameDups(updatedNameDups); // This line causes all the issues

      // console.log(`nameDups.size = ${nameDups.size}`);
    }

    // console.log('AT END OF onfulfilled');
    // for (let [name] of updatedNameDups) {
    //   console.log(`name = ${name}`);
    //   console.log(`updatedNameDups.get(name) = ${updatedNameDups.get(name)}`);
    // }

    // for (let [name] of updatedNameDups)
    //   nameDups.set(name, updatedNameDups.get(name));
    setNameDups(updatedNameDups);
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
  // const nameDupArr = [nameDups, setNameDups];
  // const profileRouteArr = [profileRoutes, setProfileRoutes];

  axios.get('https://weak-puce-toad-garb.cyclic.app/names-of-users').then(
    (res) =>
      onfulfilled(
        res,
        nameDups,
        setNameDups,
        profileRoutes,
        setProfileRoutes /*nameDupArr, profileRouteArr*/
      ),
    (error) => console.log(error)
  );

  return <Outlet />;
};

export { ProfileMaker, profileRoutes };
