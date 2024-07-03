function printer<t>(something:t){
    console.log(something);
    return something
}
let inp1=printer<number>(8)
let inp2=printer<string>("fsad")