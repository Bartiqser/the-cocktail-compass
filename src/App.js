import "./App.css"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Navbar from './Navbar';
import Home from "./Home";
import Cocktails from "./Cocktails";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cocktails" element={<Cocktails/>}/>
        <Route path="/item/:id" element={<ItemDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
