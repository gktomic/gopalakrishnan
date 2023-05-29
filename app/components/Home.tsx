import { About } from "./About";
import { Achievements } from "./Achievements";
import { Navbar } from "./Navbar";
import { Portfolio } from "./Portfolio";
import { Technologies } from "./Technologies";

export function Home() {
    return <div className="h-screen flex flex-col align-items justify-start">
        <Navbar />
        <div className="p-8">
            <About />
            <Technologies />
            <Portfolio />
            <Achievements />
        </div>
    </div>
}