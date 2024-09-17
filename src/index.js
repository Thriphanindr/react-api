import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Login from './Auth/Login';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Signup from './Auth/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' Component={Signup}/>
      <Route path='/login' Component={Login}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();