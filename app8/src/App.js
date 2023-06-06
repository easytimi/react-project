//import logo from './logo.svg';
import React from 'react'
import './App.css';
import NavBar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import FlatDetail from './Components/flatDetail';
import FormDetail from './Components/formDetail';
import Response from './Components/response';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/:id" element={<FlatDetail/>}/>
          <Route path="/form" element={<FormDetail/>}/>
          <Route path="/response" element ={<Response/>}/>
          

      </Routes>
      
     
    </div>
  );
}

export default App;
