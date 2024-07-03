type idarg=number|string
function idprinter(id:idarg){
    console.log(id);
}
idprinter(1);
idprinter("32");
type person={
    age:string,
    name:string
}
interface employee{
    position:string
}
type manager=person&employee
//class can be implemented from interface which types cannot,
//type can only be made union and or