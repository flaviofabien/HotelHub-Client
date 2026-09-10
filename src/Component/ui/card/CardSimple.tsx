import type { ReactNode } from "react"
import ButtonPrimary from "../button/ButtonPrimary"

type Props = {
    icons : ReactNode
    title : string
    description : string
    nameButton : string
}

export default function CardSimple({title,icons,description,nameButton}: Props) {
  return (
        <div className='w-80 text-center flex justify-center flex-col items-center'>
            <div className='bg-(--color-primary) text-white p-8 rounded-full'>
             {icons}
            </div>
            <h2 className='text-3xl font-semibold mt-4'> {title} </h2>
            <p className='mt-4 mb-8 text-gray-500'> {description} </p>        
            <ButtonPrimary label={nameButton} />
        </div>  
    )
}