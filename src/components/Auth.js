import { redirect, Outlet } from 'react-router-dom';
import { useUser } from '../lib/useUser';

export const Auth = (/*props*/) => {
  const user = useUser();

  if (!user) return redirect('/login');

  return <Outlet />;
  // return <Route {...props} />;
};
