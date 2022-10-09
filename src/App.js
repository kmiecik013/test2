import {useState} from 'react'

import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Taylor from './components/Taylor';
import NavBarThree from './components/NavBarThree';
import Modal from './components/Modal';
import Acknowledgement from './components/Acknowledgement';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Service from './components/Service';


function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <NavBarThree />
      <Home />
    <About />
    <Taylor />

    <div className="gethelp-postioning">

    <button className="gethelp-button"
            onClick= {()=>setIsOpen(true)}>Get Help Now</button>
       <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
        </Modal>
      </div>

      <Service />
      <Contact />

      <Acknowledgement />
      <Footer />
      
    </div>
  );
}

export default App;
