import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Slider from './components/Slider';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      {/* navigation part */}
      <NavigationBar/>
      {/* navigation part */}

      {/* slider - caroussel */}
      <Slider/>
      {/* slider - caroussel */}

      {/* contact form */}
      <ContactForm/>
      {/* contact form */}

      {/* footer */}
      <Footer/>
      {/* footer */}

    </div>
  );
}

export default App;
