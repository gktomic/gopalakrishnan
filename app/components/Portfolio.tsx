import Card from "../elements/Card";

export function Portfolio() {
    return <div id="portfolioSection">
        <h1 className="mt-10 text-3xl font-medium uppercase text-white py-5 text-center underline underline-offset-[16px] decoration-4 decoration-dotted decoration-teal-500">Portfolio</h1>
        <div className="mt-5 flex flex-row justify-center items-stretch flex-wrap gap-10">
            <Card title="Employee Portal" description="Full stack employee portal application powered by mssql, react, nodejs and expressjs." thumbnail_path="/images/thumbnail_employee-portal.png" codelink="https://github.com/gopalakrishnanpv/sern-employee-portal" />
            <Card title="Portfolio" description="Portfolio application built with next js and tailwind css library hosted in vercel." thumbnail_path="/images/thumbnail_portfolio.png" codelink="https://github.com/gopalakrishnanpv/next-portfolio" demolink="https://portfolio-gopalakrishnan.vercel.app" />
            <Card title="ResearchBOT" description="Windows (WPF) application for researching the datapoints in the log files." thumbnail_path="/images/thumbnail_research-bot.png" codelink="https://github.com/gopalakrishnanpv/csharp-researchbot" />
            <Card title="Autobot" description="Most versatile practice website with various html elements for test automation." thumbnail_path="/images/thumbnail_autobot.png" codelink="https://github.com/gopalakrishnanpv/autobot" demolink="https://auto-bot-demo.vercel.app" />
        </div>
    </div >
}