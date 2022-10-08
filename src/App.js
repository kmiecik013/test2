import {useState} from 'react'

import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Taylor from './components/Taylor';
import NavBarThree from './components/NavBarThree';
import Modal from './components/Modal';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'


function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <NavBarThree />
    <About />
    <Taylor />

    <div className="gethelp-postioning">

    <button className="gethelp-button"
            onClick= {()=>setIsOpen(true)}>Get Help Now</button>
       <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
        </Modal>
      </div>
    </div>
  );
}

export default App;
