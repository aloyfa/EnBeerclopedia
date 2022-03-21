import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Beers from './components/Beers';
import Home from './components/Home';
import Services from './components/Services';
import CardFlip from './components/CardFlip'
import Profile from './components/Profile';
import { AuthProvider } from './components/auth';

ReactDOM.render(
  <React.StrictMode>
  <AuthProvider>
    <App />
    <BrowserRouter>
        <Routes>
          <Route path= "/" element= {<Home/>}/>
          <Route path= "/beers" element= {<Beers/>}/>
          <Route path= "/cardflip" element= {<CardFlip/>}/>
          <Route path= "/services" element={<Services/>} />
          <Route path= "/profile" element={<Profile/>} />
        </Routes>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
