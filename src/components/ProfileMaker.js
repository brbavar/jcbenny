import { Navigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export const ProfileMaker = async () => {
  const namesOfUsers = useState([]);

  const res = await axios.get(
    'https://weak-puce-toad-garb.cyclic.app/names-of-users'
  );
};
