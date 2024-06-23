import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
// import { Routes, Route } from "react-router-dom";
import BookingPage from './components/BookingPage/BookingPag';


function HomePage() {
  return (
      <>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
      </>
  );
}

function BookingElement(){
  return (
    <>
    < BookingPage />
    < Footer />
    </>
  )
}

const App = () => {
  return (
  <Router>
    <>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking-form" element={<BookingElement />} />
      </Routes>
    </>
  </Router>
)}; 

export default App;
