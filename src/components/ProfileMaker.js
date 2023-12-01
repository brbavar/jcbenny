import { Route, Outlet } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import Profile from '../pages/Profile';
let profileRoutes, setProfileRoutes;

const onfulfilled = (res, nameDups, setNameDups) => {
  if (res.Count) {
    let updatedNameDups = new Map();
    for (let name of nameDups.keys())
      updatedNameDups.set(name, nameDups.get(name));

    for (let item of res.Items) {
      const fullName = `${item['First name']} ${item['Last name']}`;

      if (nameDups.has(fullName))
        updatedNameDups.set(fullName, nameDups.get(fullName) + 1);
      else updatedNameDups.set(fullName, 1);

      setNameDups(updatedNameDups);
    }
  }

  for (let name of nameDups.keys()) {
    let nameInPath = name.toLowerCase();
    for (let i = 0; i < nameInPath.length; i++)
      if (nameInPath[i] === ' ') nameInPath[i] = '-';

    if (nameDups.get(name) > 1) nameInPath += `-${crypto.randomUUID()}`;

    setProfileRoutes([
      ...profileRoutes,
      <Route
        path={`/profile/${nameInPath}`}
        element={<Profile nameOfUser={name} />}
      />,
    ]);
  }
};

const ProfileMaker = () => {
  const [nameDups, setNameDups] = useState(new Map());
  [profileRoutes, setProfileRoutes] = useState([]);

  axios
    .get('https://weak-puce-toad-garb.cyclic.app/names-of-users')
    .then((res) => onfulfilled(res, nameDups, setNameDups));

  return <Outlet />;
};

export { ProfileMaker, profileRoutes };
