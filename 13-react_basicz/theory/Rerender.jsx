import { memo, useState } from "react";

 function Memorerender(){
    const [number,setNumber]=useState(0);
    function random(){
          setNumber(Math.random);
         console.log("working");
        
    }
    return<>
        <button onClick={
            ()=>{
                 random()
            }
        }>random</button>
        <h1>{number}</h1>
        <h3>this is rerendering</h3>
    </>
}
export default memo(Memorerender);