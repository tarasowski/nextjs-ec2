import Todo from "@/components/Todo"

export default function Todos() {
    return (
        <div style={{
            border: "2px solid blue"
        }}>
            <h1>Das sind meine Todo</h1>
            <ul>
                {/* this should be a compoent */}
                {/* this should be a compoent */}
                {/* this should be a compoent */}
                {/* props: todoName, dueDate, checked=true|false */}
                <Todo 
                todoName="Das ist meine Name" 
                dueDate="29.10.2023"
                checked={true}
                />
                <Todo 
                todoName="Das ist meine Name #2" 
                dueDate="31.10.2023"
                checked={true}
                />
                <Todo 
                todoName="Das ist meine Name #3" 
                dueDate="28.10.2023"
                checked={true}
                />
                <Todo 
                todoName="Das ist meine Name #4" 
                dueDate="10.10.2023"
                checked={true}
                />
            </ul>
        </div>
    )
}