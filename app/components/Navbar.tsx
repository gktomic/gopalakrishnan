import { FaTerminal } from "react-icons/fa";
import { NavbarLink } from "./NavbarLink";

export function Navbar() {
    return <nav className="w-full py-3 px-10 bg-teal-800 w-full sticky top-0">
        <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
                <div className="flex-shrink-0">
                    <div className="flex items-center justify-center gap-3 text-white">
                        <FaTerminal className="text-5xl" />
                        <a href="#" className="font-medium text-lg">Gopalakrishnan PV</a>
                    </div>

                </div>
            </div>
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    <NavbarLink link="#" text="About"></NavbarLink>
                    <NavbarLink link="#" text="Portfolio"></NavbarLink>
                    <NavbarLink link="#" text="Skills"></NavbarLink>
                    <NavbarLink link="#" text="Achievements"></NavbarLink>
                </div>
            </div>
        </div>
    </nav>
}