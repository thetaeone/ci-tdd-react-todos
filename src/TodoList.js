import React from "react";
import TodoItem from "./TodoItem";
const Todolist =({todos})=>{

    return(
        <ul>
            {todos.map(todo =>(
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    )
}
export default Todolist