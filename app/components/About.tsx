import { FaGithub, FaLinkedin, FaMailBulk, FaTerminal } from "react-icons/fa";
import Button from "../elements/Button";

export function About() {
    return <div className="pt-10 text-center">
        <FaTerminal className="text-8xl text-white w-full" />
        <div className="flex items-center justify-center pt-5">
            <div className="w-max flex items-center justify-center pt-5">
                <h1 className="text-4xl text-white pr-3 font-medium">I&apos;m </h1>
                <h1 className="uppercase animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-3 text-4xl text-white leading-tight">Gopalakrishnan.</h1>
            </div>
        </div>

        <div className="pt-8">
            <p className="text-md text-gray-100">I have 8+ years of experience building websites and designing software. </p>
            <p className="text-md text-gray-100">I love to work on web application using technologies like Angular, React, Tailwind and Bootstrap.</p>
        </div>
        <div className="w-full flex align-items justify-center pt-10 gap-3">
            <a href="https://www.linkedin.com/in/gopalakrishnanpvs/" target={"_blank"}>
                <Button
                    bgcolor='bg-sky-700'
                    icon={<FaLinkedin />}
                    text={'Linked In'} />
            </a>
            <a href="https://github.com/gopalakrishnanpv" target={"_blank"}>
                <Button
                    bgcolor='bg-slate-700'
                    icon={<FaGithub />}
                    text={'GitHub'} />
            </a>
            <a href="https://wa.me/917736346646" target={"_blank"}>
                <Button
                    bgcolor='bg-red-700'
                    icon={<FaMailBulk />}
                    text={'Email'} />
            </a>
        </div>
    </div>
}