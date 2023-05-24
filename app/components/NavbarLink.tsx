
export function NavbarLink(props: any) {
    return <a className="group text-white transition-all duration-300 ease-in-out" href={props.link}>
        <span className="pb-2 bg-left-bottom bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
            {props.text}
        </span>
    </a>
}