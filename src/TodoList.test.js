import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todolist from "./TodoList";

describe('<TodoList />',()=>{
    const sampleTodos =[
        {
            id: 1,
            text: 'TDD 배우기',
            done: false,
        },
        {
            id: 2,
            text: 'react-testing-library',
            done: true,
        }
    ];
    it('has two todos',() =>{
        const {getByText}=render(<Todolist todos={sampleTodos} />);
        getByText(sampleTodos[0].text);
        getByText(sampleTodos[1].text);
    })
})