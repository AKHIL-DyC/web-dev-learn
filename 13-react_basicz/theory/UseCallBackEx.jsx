import React, { memo, useCallback, useState } from 'react'
//callback is same as usememo but for functions
//react chechk by value not refernce 
const UseCallBackEx = () => {
  const[number,setnumber]=useState(1);
  function handleClick(){
    setnumber(number+1);
  }
  function big(){
    console.log("hi this is a heavy function");
  }
  const big2=useCallback(()=>{
    console.log("hi this is also a heavy function but not rerendered");
  },[])
  return (
    <div>
      <button onClick={handleClick}>{number}</button>
      <Fun a={big}></Fun>
      <Real a={big2}></Real>
    </div>
  )
}
const Fun=memo(function({a}){
  return<div>
    {console.log("first one rerendering ")}
    <br/>
    <div>This will rerender because not callbacked check the console{a}</div>
  </div>
})
const Real=memo(function({a}){
return<div>
{console.log("callback function rerendering")}
<br/>
<div>This will not rerender because callbacked {a}</div>
</div>
})
export default UseCallBackEx