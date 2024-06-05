import { useMemo, useState } from "react"

export function UseMemoEx(){

    const [number,setNumber]=useState(0);
    //const[sum,setsum]=useState(0);here sum is dependent on number so defining another state is not recommended
    const ans=useMemo(()=>{
      let tempans=number+(number * (number - 1)) / 2;
      return tempans;
    },[number])
    const[count,setcount]=useState(0)
    function handlechange(event){
        const newnumber=parseInt(event.target.value);
        setNumber(newnumber)
       // const ans =newnumber+(newnumber * (newnumber - 1)) / 2;
    }
  return (
    <div>
        <input type="text" placeholder="enter number" onChange={handlechange} value={number}></input>
        <button onClick={()=>{
            setNumber(0);
        }}>clear</button>
        <br>
        </br>
        <br/>
        <div>{"the sum of 1 to "+number+" is "+ ans}</div>
        <button onClick={()=>{
          setcount(count+1);
        }}>{count}</button>
    </div>
  )
}
