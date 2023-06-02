import { FaTrophy } from "react-icons/fa"

export function Achievement(props: any) {
    return <li className="flex items-center gap-5 p-2">
        <div className="p-2 border-2 rounded-full border-teal-500">
            <FaTrophy className="text-teal-500 text-lg" />
        </div>
        {props.description}
    </li>
}