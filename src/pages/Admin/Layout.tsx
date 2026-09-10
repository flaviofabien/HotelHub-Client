import { useState, type ReactNode } from "react"
import Logo from "../../assets/HotelHub.png"
import Menu from "../../Component/Menu/AdminMenu"
import { BiMenu, BiRightArrow, BiX } from "react-icons/bi"
import { useContextGlobal } from "../../Component/globalState/useContextGlobal"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"


type Props = {
    children : ReactNode
}

export default function Layout({children} : Props) {
    const {user} = useContextGlobal()
    const [menuHidden,setMenuHidden] = useState(false)
    const {pathname} = useLocation()
  return (
    <>
        <section className=" w-full h-screen max-h-screen flex text-(--color-metalique) "> 
            <div className=" w-80 hidden lg:flex flex-col">
                <img src={Logo} className="mt-2 mx-auto w-40  object-cover" alt="" />
                <div className="pr-8">
                    <Menu />
                </div>
            </div>
            <div className=" lg:hidden flex relative z-100">
                <div className="absolute top-0 left-0 z-100">
                {
                    menuHidden ?
                    <span className="relative left-60" onClick={ () => setMenuHidden(false) }>
                        <BiX size={40} />
                    </span>
                        :  
                    <span className="" onClick={ () => setMenuHidden(true) }>
                        <BiMenu size={40}  /> 
                    </span>
                }
                </div>
                {
                    menuHidden && 
                    <motion.div
                        initial={{x:200 , opacity : 0}}
                        animate={{x:0 , opacity : 1}}
                        className=" w-72  absolute bg-white h-full">
                         <img src={Logo} className="mt-8 mx-auto w-40  object-cover" alt="" />
                        <div className="pr-8">
                            <Menu />
                        </div>
                    </motion.div>
                }
            </div>    
            <div className="w-full justify-center items-start">
                <div className="w-full flex  px-12 lg:flex-row lg:items-start flex-col justify-between  lg:px-8 py-4 ">
                    <div className=" text-(--color-primary)"> <BiRightArrow className="text-(--color-primary) inline-block" /> {pathname} </div>
                    <div className=" lg:mt-0 mt-4 flex gap-4  lg:flex-row flex-row-reverse justify-end">
                        <div className="text-start  lg:text-end">
                            <h2 className="font-medium"> {user.fullName} </h2>
                            <p className="text-xs"> {user.email} </p>
                        </div>
                        <div className="">
                            <img className="rounded-full w-10 h-10 bg-black"  alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-full  p-8  bg-slate-200 overflow-auto   h-full max-h-200  ">
                    {children}
                </div>
            </div>
        </section>
    </>
  )
}