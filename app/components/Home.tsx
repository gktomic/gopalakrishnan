import { About } from "./About";
import { Achievements } from "./Achievements";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";

export function Home() {
    return <div className="h-screen flex flex-col align-items justify-start">
        <div className="w-full fixed top-0 z-50">
            <Navbar />
        </div>
        <div className="mt-20 p-5">
            <About />
            <Skills />
            <Portfolio />
            <Achievements />
        </div>
        <Footer />
    </div>
}