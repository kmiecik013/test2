import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Taylor from './components/Taylor';
import NavBarThree from './components/NavBarThree';


function App() {
  return (
    <div>
      <NavBarThree />
    <About />
    <Taylor />
    </div>
  );
}

export default App;
