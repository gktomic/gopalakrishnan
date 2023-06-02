import { FaStar } from "react-icons/fa";

export default function Tile(props: any) {
    const ratings: JSX.Element[] = [];
    for (let i = 1; i <= props.rating; i++) {
        ratings.push(<FaStar className="text-sm text-white stroke stroke-red-700" key={i} />);
    }
    function chooseColor(rating: number) {
        let color = ""
        if (rating == 5) {
            color = 'bg-green-700'
        }
        else if (rating == 4) {
            color = 'bg-teal-700'
        } else if (rating == 3) {
            color = 'bg-yellow-700'
        } else if (rating == 2) {
            color = 'bg-orange-700'
        } else if (rating == 1) {
            color = 'bg-red-700'
        }
        return color;
    }

    return <div className={`rounded-md p-2 mx-1 my-2 ${chooseColor(ratings.length)} w-32 h-32 flex flex-col align-center justify-center text-xl border-2 border-white border-opacity-40`}>
        <h3 className="text-white text-sm py-1 text-center text-white">{props.title}</h3>
        <div className="flex align-items justify-center w-full text-white ">
            {ratings}
        </div>
    </div>
}

