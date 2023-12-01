import { Route } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import Profile from '../pages/Profile';

export const ProfileMaker = async () => {
  const [nameDups, setNameDups] = useState(new Map());
  const [profileRoutes, setProfileRoutes] = useState([]);

  const res = await axios.get(
    'https://weak-puce-toad-garb.cyclic.app/names-of-users'
  );

  if (res.Count) {
    let updatedNameDups = new Map();
    for (let name of nameDups.keys())
      updatedNameDups.set(name, nameDups.get(name));

    for (let item of res.Items) {
      const fullName = `${item['First name']} ${item['Last name']}`;

      if (nameDups.has(fullName))
        updatedNameDups.set(fullName, nameDups.get(fullName) + 1);

      setNameDups(updatedNameDups);
    }
  }

  for (let name of nameDups.keys()) {
    let nameInPath = name.toLowerCase();
    for (let i = 0; i < nameInPath.length; i++)
      if (nameInPath[i] === ' ') nameInPath[i] = '-';

    setProfileRoutes([
      ...profileRoutes,
      <Route path={`/${nameInPath}`} element={<Profile nameOfUser={name} />} />,
    ]);
  }

  return profileRoutes;
};
