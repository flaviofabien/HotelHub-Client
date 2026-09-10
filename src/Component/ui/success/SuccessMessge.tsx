import { FaCheck } from 'react-icons/fa'
import {motion} from "framer-motion"


type Props = {
    title : string
    description : string
}

export default function SuccessMessge({title,description}: Props) {
  return (
    <motion.div
    initial={{x:800}}
    animate={{x:0}}
    className='border gap-2 z-100 bg-(--color-success) items-center flex rounded-lg border-(--color-success) w-100 p-4'>
        <div className='p-4'>
            <FaCheck size={30} className='text-(--color-sandy-brown)' />
        </div>
        <div className=''>
            <h3 className='text-(--color-sandy-brown) text-2xl'> {title} </h3>
            <p className='text-(--color-koromiko)'> {description} </p>
        </div>
    </motion.div>
  )
}