import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Food from './components/Food';
import Bhature from './components/Bhature';
import Pizza from './components/Pizza';
import Paneer from './components/Paneer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div>
   
   <BrowserRouter>
   <Nav />
   {/* <Contact /> */}
   
   <Routes>
   <Route path="/" element={<Food />} />
   <Route path="/bhature" element={<Bhature />} />
   <Route path="/paneer" element={<Paneer />} />
   <Route path="/pizza" element={<Pizza />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="*" element={<h1>no page </h1>} />

   
   </Routes>

  
   </BrowserRouter>
   
   
   
   
   </div>

    
    {/* <Nav />
    <Food />
    <Bhature />
    <Pizza />
    <Paneer /> */}

   
    </>
  );
}

export default App;
