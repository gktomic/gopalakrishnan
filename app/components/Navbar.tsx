import { NavbarLink } from "./NavbarLink";

export function Navbar() {
    return <nav className="bg-teal-700 drop-shadow-lg w-full sticky top-0 z-8 border-b-1">
        <div className="py-5 px-10">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-white font-bold text-lg">Gopalakrishnan PV</a>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        <NavbarLink link="#" text="About"></NavbarLink>
                        <NavbarLink link="#" text="Portfolio"></NavbarLink>
                        <NavbarLink link="#" text="Technologies"></NavbarLink>
                        <NavbarLink link="#" text="Achievements"></NavbarLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}