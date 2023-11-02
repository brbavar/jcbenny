import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Register from './pages/Register';
import Login from './pages/Login';
import Intro from './pages/Intro';
import Found from './pages/Found';
import Find from './pages/Find';
import Founding from './pages/Founding';
import Finding from './pages/Finding';
import Philosophers from './pages/Philosophers';
import Definition from './pages/Definition';
import Demarcation from './pages/Demarcation';

import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/found-a-religion' element={<Found />} />
        <Route path='/religion-found' element={<Find />} />
        <Route path='/philosophers' element={<Philosophers />} />
        <Route path='/definition' element={<Definition />} />
        <Route path='/demarcation' element={<Demarcation />} />
        <Route path='/religion-founding' element={<Founding />} />
        <Route path='/religion-finding' element={<Finding />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
