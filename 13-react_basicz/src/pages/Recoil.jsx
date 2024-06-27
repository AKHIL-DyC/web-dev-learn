import React, { useContext, useState } from 'react'
import { Countercontext } from '../context';
import pic from '../../public/usecontext.png'
import { RecoilRoot, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, eventSelecter } from '../store/atoms/count';
const Recoil = () => {
  
  return (
    <div>
        <RecoilRoot>
        <Firstchild/> 
        </RecoilRoot>
      <div style={{width:'80vw'}}>
      <img src={pic} alt='image' style={{width:"70vw"}}></img>
      </div>
    </div>
  )
}
function Firstchild(){
    return<div>
      {console.log("firstchild rerendering")}
        <h1>Prop drilling fixed by recoil</h1>
        <h3>The state variable of parent is not passed here ,but the child of this can acces ,we directly teleport it.This provides advantage as compared to contextapi
            <br/><br/>there is no firstchild rerendered like that of contextapi look in console.
        </h3>
        <Countshower></Countshower>
        <Buttons></Buttons>
        
    </div>
}
function Countshower(){
    const counter=useRecoilValue(countAtom);
    const iseven=useRecoilValue(eventSelecter);
  return<div>
    {counter}
    {iseven?<div>odd</div>:<div>even</div>}
  </div>
}
function Buttons(){
  console.log("button rerendering");
  const setcounter=useSetRecoilState(countAtom);
  return<div>
     <button onClick={()=>{setcounter(counter=>counter+1)}}>increase</button>
     <button onClick={()=>{setcounter(counter=>counter-1)}}>decrease</button>
  </div>
 
}
export default Recoil