import Link from "next/link"

export default function Button(props) {
    return (
        <Link href={props.href}>
            <button
            styles={{
                backgroundColor: props.color,
                padding: "1rem" // 16px
            }}
            >{props.label}</button>
        </Link>
    )

}
