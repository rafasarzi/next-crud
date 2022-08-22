interface BotaoProps {
    className?: string
    children: any
    cor?: string
    onClick?: () => void
}

export default function Botao(props:BotaoProps) {

    return (
        <button onClick={props.onClick} className={`
        h-14 bg-gradient-to-l from-green-400 to-green-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}