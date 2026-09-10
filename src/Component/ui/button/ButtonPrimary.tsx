
type Props = {
    label : string
    type ?: "button" | "submit"
}

export default function ButtonPrimary({label,type}: Props) {
  return (
    <button type={type} className='bg-linear-to-b from-white to-gray-200 py-4 px-12 text-lg border-b rounded-full'> {label} </button>
  )
}