import React from "react";


const TodoItem =({todo}) =>{
    const {id, text, done}= todo;
    return(
        <div>
            <li>
                <span style={{
                    textDecoration:done ? 'line-through':'none'
                }}>{text}</span>
                <button>삭제</button>
            </li>
        </div>
    )
}
export default TodoItem