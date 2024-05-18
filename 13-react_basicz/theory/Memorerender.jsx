import { memo,useState } from "react";

 function Memorerender(){
    const [number,setNumber]=useState(0);
    function random(){
          setNumber(Math.random());
         console.log("working");
        
    }
    return<div>
        <button onClick={
            ()=>{
                 random()
            }
        }>random</button>
        <MemoizedHeader props={number}></MemoizedHeader>
        <MemoizedHeader props="this is not rerendering because of memo"></MemoizedHeader>
    </div>

}
const Header = ({ props }) => {
    return <h3>{props}</h3>;
};

const MemoizedHeader = memo(Header);
    
export default Memorerender