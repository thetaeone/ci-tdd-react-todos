import React from "react";
import TodoItem from "./TodoItem";
const Todolist =({todos, onToggle, onRemove})=>{

    return(
        <ul>
            {todos.map(todo =>(
                <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} />
            ))}
        </ul>
    )
}
export default Todolist