import React, { useState, useEffect } from 'react';

const Counter = () => {
   const [count,setCount]=useState(0);
   const[initialCount,setinitialCount]=useState(0);
   const[start,setStart]=useState(0);
   const[name,setName]=useState("Tally Counter");
   const[isname,setisname]=useState("");
   const[visible,setvisible]=useState(true);

   const handleReset = () => {
      setCount(initialCount);
   };
   
   
    
 
  return (
   <>
           
            <div>
                 <h3>{name}</h3> 
                 <input type="text"  className="display-box" value={count} disabled/>
                 <button onClick={() => setCount((prevValue)=> ++prevValue)} className="counter-button">+</button>
                 <button onClick={() => setCount((prevValue)=> --prevValue)} className="counter-button">-</button>
                 <button onClick={handleReset} className="reset">Reset</button>
                 <input type="number" placeholder="Enter value" onChange={(e)=>setStart(e.target.value)}/>
                 <button onClick={() => setCount(start)} className="counter-set">Set</button>
                 <input type="text" placeholder="Enter name" onChange={(e)=>setisname(e.target.value)}/>
                 <button onClick={() => setName(isname)} className="counter-set">Set</button>
                   
            </div>
           
        </>
  )
}

export default Counter