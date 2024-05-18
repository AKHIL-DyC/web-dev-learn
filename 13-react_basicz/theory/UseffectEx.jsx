import { useEffect, useState } from "react"
export function UseffectEx(){
    const [todos,setTodos]=useState([])
    const [id,setid]=useState(1)
    useEffect(
        ()=>{
            fetch("https://sum-server.100xdevs.com/todos").then(
                async (res)=>{
                    const json=await res.json();
                    setTodos(json.todos);
                }
            )
        },[]
    )
   const handlechange =(event)=>{
     const value = event.target.value; // Get the value from the event
     const stringValue = JSON.stringify(value); // Convert value to a string
     setid(stringValue); // Set the string value as id
   }
    return<div>
       {todos.map(todo=><div key={todo.id} style={{backgroundColor:"grey"}}>
        <h3>{todo.title}</h3>
        <h2>{todo.description}</h2>
        </div>)
        }
        <button onClick={()=>{setid(1)}}>1</button>
        <button onClick={()=>{setid(2)}}>2</button>
        <button onClick={()=>{setid(3)}}>3</button>
        <button onClick={()=>{setid(4)}}>4</button>
          <IdTodo id={id}></IdTodo>
    </div>
}
function IdTodo(id){
    const rid=id.id
    const[tid,settid]=useState([]);
    useEffect(()=>{
        fetch("https://sum-server.100xdevs.com/todo?id="+rid).then(async(res)=>{
            const json= await res.json();
            settid(json.todo);
        })
    },[id])
    return<div style={{backgroundColor:"green"}}>
        {tid.title}
        <br/>
        {tid.description}
        </div>

}