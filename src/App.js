import {useState} from 'react'
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Taylor from './components/Taylor';
import NavBarThree from './components/NavBarThree';
import Modal from './components/Modal';
import Acknowledgement from './components/Acknowledgement';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Service from './components/Service';
import BacktoTop from './components/BacktoTop';




function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (


<div>
  
  <BacktoTop />

 <div className="gethelp-postioning">

    <button className="gethelp-button"
            onClick= {()=>setIsOpen(true)}>Get Help Now</button>
       <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
        </Modal>


      </div> 
 

   <div className="wrapper">

 



 

   

  <div className="top"> 
  

      <NavBarThree />

   <Home />

  </div>

      
    
    

  <div className="bottom">
    
    <About/>
    
    
    <Taylor />


     

      <Service />
      <Contact />
    


      <Acknowledgement />
      <Footer />
      

   </div>
</div>



</div>
  
  );
}

export default App;
