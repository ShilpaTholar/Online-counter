import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import Counter from './../components/Counter'
 
const Home = () => {
   const navigate = useNavigate();
   const [component,setcomponent]=useState(["new"]);
   

   const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
              navigate("/login")
        }).catch((error) => {
        // An error happened.
        });
    }
      const handleclick = () => {               
       setcomponent([...component,"new"]);
    }
    

    const remove=(i)=>document.getElementById(`id-${i}`).remove();
    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const uid = user.uid;
              console.log("uid", uid)
            } else {
                navigate("/login")
              console.log("user is logged out")
            }
          });
         
    }, [])
 
  return (
   <>
            <nav><button onClick={handleLogout} className="logoutbtn">Logout</button></nav>
                
               <button onClick={handleclick} className="addcounter">Add counter</button>
                <div className="main">
               
               {component.map((item,i)=>
                 <div key={i} id={`id-${i}`} className="counter-container">
                 <button onClick={()=>{remove(i)}} className="removebtn">x</button>
                 <Counter/>
                 
                  </div>
                )}
                 
               
              
             
                
                
              
            </div>
            
        </>
  )
}

export default Home