import Input from "@/components/Input"

export default function AddTodo() {
    return (
        <div style={{
           border: "2px solid green",
           padding: "1rem"
        }}>
            {/*<Input placeholder="Your todo" /> */}
            <input type="text" placeholder="Your todo" />
            <button>Add your todo</button>
        </div>
    )
}