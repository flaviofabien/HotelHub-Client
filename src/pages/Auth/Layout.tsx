import { type ReactNode } from "react"
import ImageBg from "../../assets/background.png"

type Props = {
    children : ReactNode
}

export default function Layout({children} : Props) {
  return (
    <>
        <section className=" w-full h-screen flex bg-gray-200 ">     
            <img src={ImageBg} className=" w-1/2 h-screen object-cover lg:flex hidden" alt="" />
            <div className="flex lg:w-1/2 w-full h-full justify-center items-center">
              {children}
            </div>
        </section>
    </>
  )
}