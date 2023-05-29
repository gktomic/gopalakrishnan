import Bubble from "../elements/Bubble";

export function Technologies() {
    return <div>
        <h1 className="mt-10 mb-5 text-3xl font-medium uppercase text-white py-5 text-center">Technologies</h1>
        <div className="flex flex-row justify-center items-start flex-wrap min-w-full gap-2">
            <Bubble title="HTML" size="32" color="teal" rating="4" />
            <Bubble title="CSS" size="32" color="indigo" rating="4" />
            <Bubble title="JavaScript" size="32" color="indigo" rating="3" />
            <Bubble title="Angular" size="32" color="pink" rating="3" />
            <Bubble title="React" size="32" color="purple" rating="3" />
            <Bubble title="Tailwind" size="32" color="green" rating="3" />
            <Bubble title="Nodejs" size="32" color="blue" rating="2" />
            <Bubble title="Selenium" size="32" color="orange" rating="4" />
            <Bubble title="Java" size="32" color="yellow" rating="4" />
            <Bubble title="C#" size="32" color="red" rating="4" />
            <Bubble title="Python" size="32" color="teal" rating="4" />
            <Bubble title="GitHub" size="32" color="gray" rating="4" />
            <Bubble title="Docker" size="32" color="indigo" rating="3" />
            <Bubble title="Jenkins" size="32" color="pink" rating="3" />
            <Bubble title="Azure Devops" size="32" color="green" rating="4" />
        </div>
    </div>
}