import Tile from "../elements/Tile";

export function Skills() {
    return <div>
        <h1 className="mt-10 text-3xl font-medium uppercase text-white py-5 text-center underline underline-offset-[16px] decoration-4 decoration-dotted decoration-teal-500">Skills</h1>
        <div className="mt-5 flex flex-row justify-center items-start flex-wrap min-w-full gap-2">
            <Tile title="Web Automation (Selenium)" size="32" color="bg-sky-700" rating="4" />
            <Tile title="Desktop Automation (WinAppDriver)" size="32" color="bg-green-700" rating="4" />
            <Tile title="API Automation (REST)" size="32" color="bg-pink-700" rating="4" />
            <Tile title="Mobile Automation (Appium)" size="32" color="bg-purple-700" rating="3" />
            <Tile title="Java" size="32" color="bg-yellow-700" rating="4" />
            <Tile title="C#" size="32" color="bg-red-700" rating="4" />
            <Tile title="Python" size="32" color="bg-teal-700" rating="4" />
            <Tile title="GitHub" size="32" color="bg-gray-700" rating="4" />
            <Tile title="SQL" size="32" color="bg-yellow-700" rating="3" />
            <Tile title="Azure Devops" size="32" color="bg-lime-700" rating="4" />
            <Tile title="Docker" size="32" color="bg-indigo-700" rating="3" />
            <Tile title="Jenkins" size="32" color="bg-fuchsia-700" rating="3" />
            <Tile title="TestNG" size="32" color="bg-red-700" rating="4" />
            <Tile title="Maven" size="32" color="bg-lime-700" rating="4" />
            <Tile title="HTML" size="32" color="bg-yellow-700" rating="4" />
            <Tile title="CSS" size="32" color="bg-indigo-700" rating="4" />
            <Tile title="JavaScript" size="32" color="bg-red-700" rating="3" />
            <Tile title="Angular" size="32" color="bg-pink-700" rating="3" />
            <Tile title="React" size="32" color="bg-purple-700" rating="3" />
            <Tile title="Tailwind" size="32" color="bg-green-700" rating="3" />
            <Tile title="Nodejs" size="32" color="bg-blue-700" rating="2" />
            <Tile title="Linux" size="32" color="bg-fuchsia-700" rating="3" />
        </div>
    </div>
}