import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
import { Auth } from './components/Auth';

import App from './App';
import Register from './pages/Register';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import Catalog from './pages/Catalog';

import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/private' element={<Auth />}>
          <Route path='/private/my-profile' element={<MyProfile />} />
        </Route>
        <Route path='/' element={<App />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
