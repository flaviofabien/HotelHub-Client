import {motion} from "framer-motion"

type Props = {
    text : string
}

export default function ErrorServer({text}: Props) {
  return (
    <motion.p
    initial={{scale : 0}}
    animate={{scale : 1}}
    className="w-full text-center p-4 bg-(--color-error)/20 text-(--color-error) border-(--color-error)"> {text} </motion.p>
  )
}