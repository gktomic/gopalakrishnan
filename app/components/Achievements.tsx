import { Achievement } from "../elements/Achievement";

export function Achievements() {

    return <div id="achievementsSection">
        <h1 className="mt-10 text-3xl font-medium uppercase text-white text-center underline underline-offset-[16px] decoration-4 decoration-dotted decoration-teal-500">Achievements</h1>
        <ul className="mt-5 text-white">
            <Achievement description="Developed full stack Employee Portal application for managing employee records." />
            <Achievement description="Won First Prize in IVS Testathon conducted at the unit level." />
            <Achievement description="Received Finastra Star Award in the Take Ownership Category." />
            <Achievement description="Received Shining Connect Star Award in Infosys." />
            <Achievement description="Received Crown award for the implementation of SULU." />
            <Achievement description="Won Third Prize in IVS hackathon conducted at the unit level." />
            <Achievement description="Mentor for Selenium Automation Session held at the organization level in Finastra." />
            <Achievement description="Developed Research BOT for automating data point research activities." />
            <Achievement description="Developed BuildBOT for automating daily build updates." />
        </ul>








    </div>
}