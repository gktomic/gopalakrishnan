import { About } from "./About";
import { Contact } from "./Contact";
import { Navbar } from "./Navbar";
import { Portfolio } from "./Portfolio";
import { Technologies } from "./Technologies";

export function Home() {
    return <div className="h-screen flex flex-col align-items justify-start">
        <Navbar />
        <div className="p-10">
            <About />
            <Technologies />
            <Portfolio />
            <Contact />
        </div>
    </div>
}