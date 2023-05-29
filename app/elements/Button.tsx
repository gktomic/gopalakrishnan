export default function Button(props: any) {
    const disabled = props.disabled ? true : false
    return (
        <button type={props.type ?? 'button'}
            className={`${(props.bgcolor && !disabled) ? props.bgcolor : 'bg-gray-300 cursor-default'} ${props.hidden ? 'hidden' : ''} 
            w-auto text-white font-medium text-xs px-5 py-4 flex items-center justify-center gap-2 rounded-sm uppercase rounded-md`}
            onClick={props.action ?? null} disabled={disabled}>
            <span className="text-xl">{props.icon} </span>{props.text}
        </button >
    )
}