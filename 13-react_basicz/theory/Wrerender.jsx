import { useState } from "react"

export default function Wrerender(){
    return<>
       
        <Title></Title>
        <h3>this is not rerenderring</h3>
    </>
}
function Title(){
    const[number,setNumber]=useState(0);
    function random(){
        setNumber(Math.random);
    }
    return<>
     <button onClick={random}>random with correct rerenderring</button>
    <h1>{number}</h1>
    </>
}