export default function Titulo(props) {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="pl-10 text-2xl">
                {props.children}
            </h1>
            <hr className="border-2 border-purple-500"/>
        </div>
    )
}