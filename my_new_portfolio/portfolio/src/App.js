import About from './Components/About/About';
import Body from './Components/Body/Body';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';
//import Navbar from 'react-bootstrap/Navbar';



import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Body/>
      <About/>
      <Resume/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
