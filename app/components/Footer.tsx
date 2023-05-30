import { FaArrowCircleUp } from "react-icons/fa";

export default function Footer() {
    return <div className="w-full bg-teal-800 px-5 py-3 bottom-0 flex items-center justify-between text-white">
        <h1>&copy; Gopalakrishnan</h1>
        <a href="#" className="flex items-center justify-center text-white gap-2 px-4 py-3 bg-teal-700 rounded-md text-sm">
            <FaArrowCircleUp className="text-xl" />
            Contact Me
        </a>
    </div>
}