import { FaStar } from "react-icons/fa";

export default function Bubble(props: any) {
    const ratings: JSX.Element[] = [];
    for (let i = 1; i <= props.rating; i++) {
        ratings.push(<FaStar className="text-sm" key={i} />);
    }
    return <div className={`rounded-full p-2 mx-1 my-2 bg-${props.color}-600 text-gray-100 w-${props.size} h-${props.size} flex flex-col align-items justify-center text-xl`}>
        <h3 className="text-white text-sm py-1 text-center text-gray-500">{props.title}</h3>
        <div className="flex align-items justify-center w-full">
            {ratings}
        </div>
    </div>
}

