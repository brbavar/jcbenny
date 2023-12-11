import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.js';
import { Auth } from './components/Auth.js';
import Register from './pages/Register.js';
import {
  ProfileMaker,
  profileRoutes /*Promise*/,
} from './components/ProfileMaker.js';
import { VerifyEmail } from './pages/VerifyEmail.js';
import { EmailVerification } from './pages/EmailVerification.js';
import Login from './pages/Login.js';
import Profile from './pages/Profile.js';
import Catalog from './pages/Catalog.js';
import Sell from './pages/Sell.js';

import './index.css';

import reportWebVitals from './reportWebVitals';

// const profileRoutes = (async () => {
//   return await profileRoutesPromise;
// })();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/private' element={<Auth />}>
          {/* <Route path='/private/profile' element={<Profile />} /> */}
          <Route path='/private/sell-something' element={<Sell />} />
        </Route>
        <Route path='/' element={<App />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<ProfileMaker />}>
          {profileRoutes}
        </Route>
        <Route path='/please-verify' element={<VerifyEmail />} />
        <Route
          path='/verify-email/:VerificationString'
          element={<EmailVerification />}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/shop' element={<Catalog />} />
      </Routes>
    </BrowserRouter>
    <button
      onClick={() => {
        console.log(profileRoutes.length);
        for (let route of profileRoutes) console.log(route);
      }}
    ></button>
  </React.StrictMode>
);
// profileRoutesPromise.then((profileRoutes) => {
//   console.log('inside then');
//   root.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/private' element={<Auth />}>
//             {/* <Route path='/private/profile' element={<Profile />} /> */}
//             <Route path='/private/sell-something' element={<Sell />} />
//           </Route>
//           <Route path='/' element={<App />} />
//           <Route path='/register' element={<Register />} />
//           <Route path='/profile' element={<ProfileMaker />}>
//             {profileRoutes}
//           </Route>
//           <Route path='/please-verify' element={<VerifyEmail />} />
//           <Route
//             path='/verify-email/:VerificationString'
//             element={<EmailVerification />}
//           />
//           <Route path='/login' element={<Login />} />
//           <Route path='/shop' element={<Catalog />} />
//         </Routes>
//       </BrowserRouter>
//       <button
//         onClick={() => {
//           console.log(profileRoutes.length);
//           // for (let route of profileRoutes) console.log(route);
//         }}
//       ></button>
//     </React.StrictMode>
//   );
// });

// root.render(
//   <button
//     onClick={() => {
//       console.log(profileRoutes.length);
//       // for (let route of profileRoutes) console.log(route);
//     }}
//   ></button>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
