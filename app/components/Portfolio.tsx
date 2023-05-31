import Card from "../elements/Card";
const employeeportal_thumbnail = require('../assets/thumbnail_employee-portal.png');
const portfolio_thumbnail = require('../assets/thumbnail_portfolio.png');

export function Portfolio() {
    return <div>
        <h1 className="mt-10 text-3xl font-medium uppercase text-white py-5 text-center underline underline-offset-[16px] decoration-4 decoration-dotted decoration-teal-500">Portfolio</h1>
        <div className="mt-5 flex flex-row justify-center items-center flex-wrap gap-10">
            <Card title="Employee Portal" description="Full stack employee portal application powered by mssql, react, nodejs and expressjs.." thumbnail={employeeportal_thumbnail} codelink="https://github.com/gopalakrishnanpv/sern-employee-portal" />
            <Card title="Portfolio" description="Portfolio application built with next js and tailwind css library hosted in vercel." thumbnail={portfolio_thumbnail} codelink="https://github.com/gopalakrishnanpv/next-portfolio" demolink="https://portfolio-gopalakrishnan.vercel.app" />
        </div>
    </div >
}