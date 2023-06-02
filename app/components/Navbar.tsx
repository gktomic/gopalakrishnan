'use client';
import { FaTerminal } from "react-icons/fa";
import { NavbarLink } from "../elements/NavbarLink";

export function Navbar() {


    function scrollToSkills() {
        scrollTo('#skillsSection')
    }

    function scrollToAbout() {
        scrollTo('#aboutSection')
    }

    function scrollToPortfolio() {
        scrollTo('#portfolioSection')
    }

    function scrollToAchievements() {
        scrollTo('#achievementsSection')
    }

    function scrollTo(querySelector: string) {
        if (typeof window !== 'undefined') {
            const anchor = document.querySelector(querySelector)
            if (anchor) {
                anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
    }

    return <nav className="w-full py-3 px-10 bg-teal-800 w-full">
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
                    <NavbarLink onClick={scrollToAbout} text="About"></NavbarLink>
                    <NavbarLink onClick={scrollToSkills} text="Skills"></NavbarLink>
                    <NavbarLink onClick={scrollToPortfolio} text="Portfolio"></NavbarLink>
                    <NavbarLink onClick={scrollToAchievements} text="Achievements"></NavbarLink>
                </div>
            </div>
        </div>
    </nav>
}