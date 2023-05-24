
export default function Tile(props: any) {
    return <div className="p-2">
        <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white flex align-items justify-center">
            <div className="flex align-items justify-center flex-col">
                <h3 className="uppercase text-md py-5 text-center bg-gray-100 font-medium text-gray-500">{props.title}</h3>
                <img src={props.url} className="p-10" alt="" />
            </div>
        </div>
    </div>
}