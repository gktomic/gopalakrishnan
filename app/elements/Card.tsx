import { FaCode, FaSearch } from "react-icons/fa";

import Image from "next/image";
import Button from "./Button";

export default function Card(props: any) {
    return <div className="rounded-lg overflow-hidden bg-white max-w-xs ">
        <div className="p-5 w-full">
            <h3 className="font-medium text-md py-2 text-sky-600 uppercase">{props.title}</h3>
            <p className="text-sm text-gray-500">
                {props.description}
            </p>
        </div>
        <div className=" px-5">
            <Image className="w-full p-3 border-2 border-gray-300" src={props.src} alt="" />
        </div>
        <div className="flex align-items justify-center py-5 gap-2">
            <Button
                bgcolor='bg-teal-600'
                icon={<FaSearch />}
                text={'Demo'} />

            <Button
                bgcolor='bg-gray-600'
                icon={<FaCode />}
                text={'View Code'} />
        </div>
    </div>
}