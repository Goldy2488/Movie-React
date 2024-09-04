import React, { useState } from "react";


let States = () => {
    let [ com, setCom] = useState(10)
    const increase = ()=> {
        // console.log(com)
        com+=1
        setCom(com)
        return com

    }
    const decBy1= ()=>{
        com-=1
        setCom(com)
        return com
    }
  return <div>
    ----- change the com value : {com}
    <div style={{padding:"10px",fontSize:"10px"}}>
        <button onClick={()=>increase()}>Increase</button>
        <button onClick={()=>decBy1()}>Decrease</button>
    </div>
   
  </div>;
};

export default States;

// usestate hook is use to declare the state variable to function 
// components ,ending them to add and update state error the time.
