import { FaCode, FaSearch } from "react-icons/fa";
import Button from "./Button";

export default function Card(props: any) {
    return <div className="p-5">
        <div className="max-w-sm rounded overflow-hidden bg-white p-6">
            <h3 className="font-medium text-xl py-2 text-gray-500 uppercase">{props.title}</h3>
            <p className="text-gray-700 text-base py-1">
                {props.description}
            </p>
            <img className="w-full p-5" src={props.src} alt="" />
            <div className="flex align-items justify-center pt-2 gap-2">
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
    </div>
}