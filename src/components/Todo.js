export default function Todo(props) {
    return (
        <li>
            <span>{props.todoName} | </span>
            <span>{props.dueDate} | </span>
            <input type="checkbox" checked={props.checked} />
        </li>
    )
}