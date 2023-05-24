import { About } from "./About";
import { Contact } from "./Contact";
import { Navbar } from "./Navbar";
import { Portfolio } from "./Portfolio";
import { Technologies } from "./Technologies";

export function Home() {
    return <div className="h-screen">
        <Navbar />
        <About />
        <Technologies />
        <Portfolio />
        <Contact />
    </div>
}