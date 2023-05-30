import { About } from "./About";
import { Achievements } from "./Achievements";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";

export function Home() {
    return <div className="h-screen flex flex-col align-items justify-start">
        <Navbar />
        <div className="p-5 mt-5">
            <About />
            <Skills />
            <Portfolio />
            <Achievements />
        </div>
        <Footer />
    </div>
}