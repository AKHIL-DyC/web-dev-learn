import{atom, selector}from 'recoil'
export const countAtom=atom({
    key:"countatom",
    default:0
})

export const eventSelecter=selector({
    key:"eventselecter",
    get:({get})=>{
        const count=get(countAtom);
        return count%2;
    }
})