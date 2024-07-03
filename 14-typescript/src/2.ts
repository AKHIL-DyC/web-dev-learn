interface User{
    firstname:string,
    lastname:string,
    age:number,
    email?:string//optional
}
function islegal(user:User):boolean{
    if(user.age<18){
        return false
    }
    else{
        return true
    }
}
function greets(user:User){
    if(islegal(user)){
        console.log("hello"+user.firstname);
    }
    else{
        console.log("not legal");
    }
}
greets({
    firstname:"akhil",
    lastname:"i a",
    age:19
})