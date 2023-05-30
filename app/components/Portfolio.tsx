import Card from "../elements/Card";
const EmployeePortal = require('../images/employee-portal.png');

export function Portfolio() {
    return <div>
        <h1 className="mt-10 text-3xl font-medium uppercase text-white py-5 text-center underline underline-offset-[16px] decoration-4 decoration-dotted decoration-teal-500">Portfolio</h1>
        <div className="mt-5 flex flex-row justify-center items-center flex-wrap gap-6">
            <Card title="Employee Portal" description="Full stack employee portal application tested with multi line description." src={EmployeePortal} />
            <Card title="AD Analytics" description="Analytics tool for azure devops written in react js." src={EmployeePortal} />
        </div>
    </div >
}