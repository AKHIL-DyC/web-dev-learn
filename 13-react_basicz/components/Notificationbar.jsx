import React from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { notificationAtom, totalnotification} from '../src/store/atoms/navbarnotification'
const Notificationbar = () => {
  const notifications=useRecoilValue(notificationAtom)
  const totalcount=useRecoilValue(totalnotification)
  return (
    <div>
      
        <button>Home</button>
        <button>My network({notifications.network})</button>
        <button>Jobs({notifications.jobs})</button>
        <button>Messages({notifications.messaging})</button>
        <button>Mentions({notifications.notifications})</button>
        <button>Me({totalcount})</button>
    </div>
  )
}

export default Notificationbar