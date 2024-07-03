import{atom, selector}from'recoil'
import axios from 'axios'
export const notificationAtom=atom({
    key:"notificationAtom",
    default:selector({
        key:"fetcher",
        get:async()=>{
            const res=await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
})

export const totalnotification=selector({
    key:"totalnotification",
    get:({get})=>{
        const totalnotification=get(notificationAtom)
       /* const networkcount=get(notificationAtom.networkcount)
        const jobcount=get(notificationAtom.jobcount)
        const messagecount=get(notificationAtom.messagecount)
        const mentioncount=get(notificationAtom.mentioncount)
        */
        return totalnotification.network+totalnotification.jobs+totalnotification.messaging+totalnotification.notifications;
    }
})