import React, { useContext, useState } from 'react'
import { Countercontext } from '../context';
import pic from '../../public/usecontext.png'
const propdrilling = () => {
    const [counter,setcounter]=useState(0);
  return (
    <div>
      <Countercontext.Provider value={{counter,setcounter}}>
      <Firstchild/>
      </Countercontext.Provider>
      <div style={{width:'80vw'}}>
      <img src={pic} alt='image' style={{width:"70vw"}}></img>
      </div>
    </div>
  )
}
function Firstchild(){
    return<div>
      {console.log("firstchild rerendering")}
        <h1>Prop drilling fixed by context api</h1>
        <h3>The state variable of parent is not passed here ,but the child of this can acces ,we directly teleport it.
          this only provides a  syntactical cleaness,no performance advantage. <br/><br/>look at the console this text is first child its being reloaded every time
        </h3>
        <Countshower></Countshower>
        <Buttons></Buttons>
        
    </div>
}
function Countshower(){
  const {counter} =useContext(Countercontext);
  return<div>
    {counter}
  </div>
}
function Buttons(){
  const {counter,setcounter}=useContext(Countercontext)
  
  return<div>
     <button onClick={()=>{setcounter(counter+1)}}>increase</button>
     <button onClick={()=>{setcounter(counter-1)}}>decrease</button>
  </div>
 
}
export default propdrilling