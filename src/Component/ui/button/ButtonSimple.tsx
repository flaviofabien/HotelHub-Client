
type Props = {
    label : string
    onClick ?:React.MouseEventHandler<HTMLButtonElement>
    style ?: 1 | 2 | 3 | undefined
    type ?: "button" | "submit" | "reset"
}

export default function ButtonSimple({label,onClick,style,type}: Props) {
  return (
    <button type={type} onClick={onClick} className= {` bg-(--color-primary) hover:scale-105 cursor-pointer text-white  py-2 px-8 text-lg border-b rounded-lg
    ${style === 2 && 'bg-gray-500 hover:scale-105 cursor-pointer text-black  py-2 px-8 text-lg border-b rounded-lg' } 
    ${style === 3 && 'bg-red-500 hover:scale-105 cursor-pointer text-black  py-2 px-8 text-lg border-b rounded-lg' } 
    `} > {label} </button>
  )
}