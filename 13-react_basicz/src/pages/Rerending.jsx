import React from 'react'
import Couter from '../../components/Couter'
import Rerender from '../../theory/Rerender'
import Wrerender from '../../theory/Wrerender'
import { Todo } from '../../theory/Todo'
import { UseffectEx } from '../../theory/UseffectEx'
import { UseMemoEx } from '../../theory/UseMemoEx'
import UseCallBackEx from '../../theory/UseCallBackEx'

const Rerending = () => {
  return (
    <div>
         <Couter/>
     <br/>
     <Rerender/>
     <Wrerender/>
     <Todo/>
     <UseffectEx/>
     <UseMemoEx/>
     <UseCallBackEx/>

    </div>
  )
}

export default Rerending