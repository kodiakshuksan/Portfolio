import React from "react";
import Body from './Components/Body/Body.js';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
