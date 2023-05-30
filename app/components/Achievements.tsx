import { FaTrophy } from "react-icons/fa";

export function Achievements() {

    return <div >
        <h1 className="mt-10 text-3xl font-medium uppercase text-white py-5 text-center underline underline-offset-[16px] decoration-4 decoration-dotted decoration-teal-500">Achievements</h1>
        <ul className="mt-5 text-white">
            <li className="flex items-center gap-5 p-2">
                <div className="p-2 border-2 rounded-full border-teal-500">
                    <FaTrophy className="text-teal-500 text-lg" />
                </div>
                Won First Prize in IVS Testathon conducted at the unit level.
            </li>
            <li className="flex items-center gap-5 p-2">
                <div className="p-2 border-2 rounded-full border-teal-500">
                    <FaTrophy className="text-teal-500 text-lg" />
                </div>
                Received Finastra Star Award in the Take Ownership Category.
            </li>
            <li className="flex items-center gap-5 p-2">
                <div className="p-2 border-2 rounded-full border-teal-500">
                    <FaTrophy className="text-teal-500 text-lg" />
                </div>
                Received Shining Connect Star Award in Infosys.
            </li>
            <li className="flex items-center gap-5 p-2">
                <div className="p-2 border-2 rounded-full border-teal-500">
                    <FaTrophy className="text-teal-500 text-lg" />
                </div>
                Received Crown award for the implementation of SULU.
            </li>
            <li className="flex items-center gap-5 p-2">
                <div className="p-2 border-2 rounded-full border-teal-500">
                    <FaTrophy className="text-teal-500 text-lg" />
                </div>
                Won Third Prize in IVS hackathon conducted at the unit level.
            </li>
            <li className="flex items-center gap-5 p-2">
                <div className="p-2 border-2 rounded-full border-teal-500">
                    <FaTrophy className="text-teal-500 text-lg" />
                </div>
                Mentor for Selenium Automation Session held at the organization level in Finastra.
            </li>
            <li className="flex items-center gap-5 p-2">
                <div className="p-2 border-2 rounded-full border-teal-500">
                    <FaTrophy className="text-teal-500 text-lg" />
                </div>
                Developed Research BOT for automating data point research activities.
            </li>
            <li className="flex items-center gap-5 p-2">
                <div className="p-2 border-2 rounded-full border-teal-500">
                    <FaTrophy className="text-teal-500 text-lg" />
                </div>
                Developed BuildBOT for automating daily build updates.
            </li>
        </ul>








    </div>
}