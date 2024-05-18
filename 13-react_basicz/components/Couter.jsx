import React from 'react'
import { useState } from 'react'

export default function Couter(){
    const[count,setCount]=React.useState(0);
    function onClickhandler(){
        setCount(count+1);
    }
  return (
    <button onClick={onClickhandler}>Count is {count}</button>
  )
}

