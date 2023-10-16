"use client"
import Todo from "@/components/Todo"
import { useState } from "react"

export default function Todos() {
    const [todos, setTodos] = useState([
        {id: 1, todoName: "My frist todo", dueDate:"29.10.2023", checked: true},
        {id: 2, todoName: "My second todo", dueDate:"31.10.2023", checked: true},
        {id: 3, todoName: "My last todo", dueDate:"03.11.2023", checked: true},
    ])

    const [inputValue, setInputValue] = useState("")
    const [inputDate, setInputDate] = useState("29.10.2023")

    const handleInput = (e) => {
        const value = e.target.value
        setInputValue(value)
    }
    const handleDate = e => {
        const value = e.target.value
        setInputDate(value)
    }

    const handleOnClick = () => {
        // here comes the business logic
        setTodos([
            ...todos,
            {id: todos.length +1, todoName: inputValue, dueDate: inputDate, checked: false}
        ])
    }
    
    return (
        <div style={{
            border: "2px solid blue"
        }}>
            <h1>Das sind meine Todo</h1>
            <input onInput={handleInput} type="text" placeholder="Enter your todo" />
            <input onChange={handleDate} type="date" />
            <button onClick={handleOnClick}>Add Todo</button>
            <ul>
                {todos.map(todo => {
                    return (
                        <Todo 
                        todoName={todo.todoName}
                        dueDate={todo.dueDate}
                        checked={todo.checked}
                        />
                    )
                })}
            </ul>
        </div>
    )
}