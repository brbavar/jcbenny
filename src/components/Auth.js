import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../lib/useUser.js';

export const Auth = () => {
  const user = useUser();

  if (!user) return <Navigate to='/login' />;

  console.log(`Made it to end of Auth. user = ${JSON.stringify(user)}`);

  return <Outlet />;
};
