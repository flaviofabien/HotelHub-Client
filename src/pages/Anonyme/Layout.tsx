import type { ReactNode } from "react"
import ImageHub from '../../assets/HotelHub.png'
import Menu from "../../Component/Menu/Menu"
import Line from "../../Component/ui/Line"
import Footer from "../../Component/footer/Footer"
import { Link } from "react-router-dom"

type Props = {
    children : ReactNode
}

function Layout( { children } : Props) {
  return (
    <>
      <section className="  w-full justify-center flex flex-col items-center  ">
        <div className="max-w-275  w-full justify-center items-center flex flex-col">
          <section className="w-full justify-center flex mt-8 ">
            <img className='w-96 h-full object-cover' src={ImageHub} alt="" />  
          </section>
          <div  className="flex lg:justify-between w-full lg:flex-row flex-col items-center">
            <div className=" px-28">
            </div>
            <Menu />
            <div className="mt-6 flex gap-4 ">
              <Link className="rounded-lg border   px-4 py-2" to="/register" > Sign in </Link>
              <Link className="rounded-lg bg-black text-white px-4 py-2" to="/login" >Sign up</Link>
            </div>
          </div>
          <Line />
          {children}
          <Footer />
        </div>
      </section>
    </>
  )
}
export default Layout