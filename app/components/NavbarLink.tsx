export function NavbarLink(props: any) {
    return <li className="list-none cursor-pointer group text-white transition-all duration-300 ease-in-out">
        <span className="pb-3 bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-300 ease-out">
            {props.text}
        </span>
    </li>
}