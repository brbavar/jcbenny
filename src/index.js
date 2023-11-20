import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import { Auth } from './components/Auth';
import Register from './pages/Register';
import { VerifyEmail } from './pages/VerifyEmail';
import { EmailVerification } from './pages/EmailVerification';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import Catalog from './pages/Catalog';
import Sell from './pages/Sell';

import './index.css';

import reportWebVitals from './reportWebVitals';

const absolutify = (relativePath) => {
  return `https://main--fascinating-melba-bd8f4d.netlify.app${relativePath}`;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={absolutify('/private')} element={<Auth />}>
          <Route
            path={absolutify('/private/my-profile')}
            element={<MyProfile />}
          />
          <Route
            path={absolutify('/private/sell-something')}
            element={<Sell />}
          />
        </Route>
        <Route path={absolutify('/')} element={<App />} />
        <Route path={absolutify('/register')} element={<Register />} />
        <Route path={absolutify('/please-verify')} element={<VerifyEmail />} />
        <Route
          path={absolutify('/verify-email/:VerificationString')}
          element={<EmailVerification />}
        />
        <Route path={absolutify('/login')} element={<Login />} />
        <Route path={absolutify('/shop')} element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
