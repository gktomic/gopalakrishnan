import Tile from "../elements/Tile";

export function Skills() {
    return <div id="skillsSection">
        <h1 className="mt-10 text-3xl font-medium uppercase text-white py-5 text-center underline underline-offset-[16px] decoration-4 decoration-dotted decoration-teal-500">Skills</h1>
        <div className="mt-5 flex flex-row justify-center items-start flex-wrap min-w-full gap-2">
            <Tile title="Web Automation (Selenium)" rating="5" />
            <Tile title="Desktop Automation (WinAppDriver)" rating="4" />
            <Tile title="API Automation (REST)" rating="4" />
            <Tile title="Mobile Automation (Appium)" rating="3" />
            <Tile title="Java" rating="3" />
            <Tile title="C#" rating="4" />
            <Tile title="Python" rating="4" />
            <Tile title="GitHub" rating="5" />
            <Tile title="SQL" rating="3" />
            <Tile title="Azure Devops" rating="4" />
            <Tile title="Docker" rating="2" />
            <Tile title="Jenkins" rating="3" />
            <Tile title="TestNG" rating="4" />
            <Tile title="Maven" rating="4" />
            <Tile title="HTML" rating="4" />
            <Tile title="CSS" rating="4" />
            <Tile title="JavaScript" rating="3" />
            <Tile title="Angular" rating="3" />
            <Tile title="React" rating="3" />
            <Tile title="Tailwind" rating="3" />
            <Tile title="Nodejs" rating="2" />
            <Tile title="Linux" rating="1" />
        </div>
    </div>
}