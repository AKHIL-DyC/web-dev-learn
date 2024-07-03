const a:number=10;
console.log(a);
function greet(a:string){
    console.log("hello"+a);
}
function sum(a:number,b:number):number{
    return a+b;
}
greet("akhil")
let ans:number=sum(1,2);
console.log(ans);
//tsc -b provides a js file for this