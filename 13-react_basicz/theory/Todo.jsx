import { useState } from "react";

export function Todo() {
    const [todos, setTodos] = useState([
        {id:10, title: "go to gym", description: "at 9pm" },
        {id:4, title: "go to college", description: "at 9pm" },
        { id:9,title: "go to play", description: "at 9pm" }
    ]);

    const addTodo = () => {
        setTodos([
            ...todos,
            { title: "newtodo", description: "random" }
        ]);
    };
function Wrapper({input}){
    return<div style={{border:"2px solid"}}>
        {input}
    </div>
}
    return (
        <div>
            <button onClick={addTodo}>Add Todo</button>
            <Wrapper input={todos.map((todo, index) => (
                <div key={index}>
                    <div>{todo.title}</div>
                    <div>{todo.description}</div>
                </div>
            ))}
            />
        </div>
    );
}
