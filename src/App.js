
import React, {useState, useEffect} from 'react';
import Home from './page/home';
import Signup from './page/signup';
import Login from './page/login';
import {Routes, Route} from 'react-router-dom';
 
function App() {
 
  return (
   
      <div>
        <section>                              
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/login" element={<Login/>}/>
            </Routes>                    
        </section>
      </div>
   
  );
}
 
export default App;