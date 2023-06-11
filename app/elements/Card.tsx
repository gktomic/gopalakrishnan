import { FaCode, FaSearch } from "react-icons/fa";

import Image from "next/image";
import Button from "./Button";

export default function Card(props: any) {
    return <div className="flex flex-col justify-between align-center rounded-lg overflow-hidden bg-white max-w-lg">
        <div className="px-5 py-4 w-full">
            <h3 className="font-medium text-md py-2 text-sky-600 uppercase">{props.title}</h3>
            <p className="text-sm text-gray-500">
                {props.description}
            </p>
        </div>
        {
            props.thumbnail_path && <div className="px-5 flex-1">
                <Image className="w-full h-full shadow-md shadow-gray-500 w-full h-full" width="750" height="500" src={props.thumbnail_path} alt="" />
            </div>
        }

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