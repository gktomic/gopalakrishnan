import { FaCode, FaSearch } from "react-icons/fa";

import Image from "next/image";
import Button from "./Button";

export default function Card(props: any) {
    return <div className="rounded-lg overflow-hidden bg-white max-w-md">
        <div className="px-5 py-4 w-full">
            <h3 className="font-medium text-md py-2 text-sky-600 uppercase">{props.title}</h3>
            <p className="text-sm text-gray-500">
                {props.description}
            </p>
        </div>
        <div className=" px-5">
            <Image className="w-full h-full shadow-md shadow-gray-500" src={props.thumbnail} alt="" />
        </div>
        <div className="flex align-center justify-center py-5 gap-2">
            {
                props.demolink && <a href={props.demolink} target="_blank">
                    <Button
                        bgcolor='bg-teal-600'
                        icon={<FaSearch />}
                        text={'Demo'} />
                </a>
            }
            {
                props.codelink && <a href={props.codelink} target="_blank">
                    <Button
                        bgcolor='bg-gray-600'
                        icon={<FaCode />}
                        text={'View Code'} />
                </a>
            }
        </div>
    </div >
}