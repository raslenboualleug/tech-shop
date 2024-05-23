import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./usercomponet/login"; 
import Register from "./usercomponet/regester";
import ProductList from "./prodcomponent/productList";


const App = () => {
  return (
    <Router>
     <div>
    
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regester" element={<Register/>}/>
        <Route path="/productList" element={<ProductList/>}/>
      </Routes>
      </div> 
    </Router>
  );
 }

export default App;
