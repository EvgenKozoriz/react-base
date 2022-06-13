import React from 'react';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import './assets/css/style.css'
import Header from './Header';
import Footer from './Footer';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Booking from './Booking';
import HomePage from './HomePage';
import Trip from './Trip';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/booking' element={<Booking/>}/>
            <Route path='/trip/:tripId' element={<Trip/>}/>
            <Route path='*' element={<HomePage/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
