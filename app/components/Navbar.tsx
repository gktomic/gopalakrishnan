import { NavbarLink } from "./NavbarLink";

export function Navbar() {
    return <nav className="bg-gray-800">
        <div className="max-w-7xl p-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-white font-bold text-lg">Gopalakrishnan PV</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavbarLink link="#" text="About"></NavbarLink>
                            <NavbarLink link="#" text="Portfolio"></NavbarLink>
                            <NavbarLink link="#" text="Technologies"></NavbarLink>
                            <NavbarLink link="#" text="Contact"></NavbarLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}