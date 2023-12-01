import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import { Auth } from './components/Auth';
import Register from './pages/Register';
import { ProfileMaker } from './components/ProfileMaker';
import { VerifyEmail } from './pages/VerifyEmail';
import { EmailVerification } from './pages/EmailVerification';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Catalog from './pages/Catalog';
import Sell from './pages/Sell';

import './index.css';

import reportWebVitals from './reportWebVitals';

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
        <ProfileMaker />
        <Route path='/please-verify' element={<VerifyEmail />} />
        <Route
          path='/verify-email/:VerificationString'
          element={<EmailVerification />}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/shop' element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
