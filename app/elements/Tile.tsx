import { FaStar } from "react-icons/fa";

export default function Tile(props: any) {
    const ratings: JSX.Element[] = [];
    for (let i = 1; i <= props.rating; i++) {
        ratings.push(<FaStar className="text-sm" key={i} />);
    }
    return <div className={`rounded-md p-2 mx-1 my-2 ${props.color} w-32 h-32 flex flex-col align-center justify-center text-xl border-2`}>
        <h3 className="text-white text-sm py-1 text-center text-gray-500">{props.title}</h3>
        <div className="flex align-items justify-center w-full">
            {ratings}
        </div>
    </div>
}

