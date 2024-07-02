import { FaDownload, FaGithub, FaLinkedin, FaMailBulk, FaTerminal } from "react-icons/fa";
import Button from "../elements/Button";

export function About() {
    return <div className="text-center" id="aboutSection">
        <FaTerminal className="text-8xl text-white w-full" />
        <div className="flex flex-col items-center justify-center pt-5">
            <h1 className="text-4xl text-white pr-3 font-medium">I&apos;m Gopalakrishnan.<span className="uppercase animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-3 text-4xl text-white leading-tight"></span></h1>
            <h3 className="text-md mt-2 text-gray-500">Software Engineer Senior - In Test</h3>
            <h3 className="text-md mt-2 text-gray-500">Coimbatore</h3>
        </div>

        <div className="mt-5">
            <p className="text-md text-gray-100">I have 9+ years of industry experience which includes automation testing in Web, Mobile and Desktop applications. </p>
            <p className="mt-3 text-md text-gray-100">During my free time, I work on developing web applications using technologies like Angular, React, Tailwind and Bootstrap.</p>
        </div>
        <div className="w-full flex flex-wrap align-items justify-center pt-10 gap-3">
            <a href="https://www.linkedin.com/in/gktalkz" target={"_blank"}>
                <Button
                    bgcolor='bg-sky-700'
                    icon={<FaLinkedin />}
                    text={'Linked In'} />
            </a>
            <a href="https://github.com/gkcodez" target={"_blank"}>
                <Button
                    bgcolor='bg-slate-700'
                    icon={<FaGithub />}
                    text={'GitHub'} />
            </a>
            <a href="mailto:gopalakrishnan.work@gmail.com" target={"_blank"}>
                <Button
                    bgcolor='bg-pink-600'
                    icon={<FaMailBulk />}
                    text={'Email'} />
            </a>
        </div>

        <div className="w-full flex align-items justify-center pt-5 gap-3">
            <a href="/files/Gopalakrishnan-Resume.pdf"
                download="Gopalakrishnan-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer">
                <Button
                    bgcolor='bg-green-700'
                    icon={<FaDownload />}
                    text={'Download my resume'} />
            </a>
        </div>
    </div>
}