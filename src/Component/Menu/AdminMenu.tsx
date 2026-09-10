import { Link, useLocation } from "react-router-dom"
import { BiLogOut, BiSolidDashboard } from "react-icons/bi";
import { FaHouseChimney } from "react-icons/fa6";
import { FaAddressBook, FaUser } from "react-icons/fa";
import { useState } from "react";
import CardConfirmLogout from "../ui/card/CardConfirmLogout";
import { useContextGlobal } from "../globalState/useContextGlobal";

export default function MenuAdmin() {
  const {user} = useContextGlobal()
  const [show, setShow] = useState({show: false,id: NaN});      

  const menuAdminData = [
    {
        label : "Dashboard",
        path : "/admin/dashboard",
        icons :  <BiSolidDashboard size={20} />
    },
    {
        label : "Rooms",
        path : "/admin/rooms",
        icons : <FaHouseChimney size={20} />
    },
    {
        label : "Booking",
        path : "/admin/books",
        icons : <FaAddressBook size={20} />
    },
    {
        label : "Users",
        path : "/admin/users",
        icons : <FaUser size={20} />
    },
  ]

  const {pathname} = useLocation();
  return (
    <section className="flex flex-col gap-4 ml-8 mt-8">
        {
            menuAdminData.filter( (f) => {
                if (user.role === "superAdmin") {
                    return ((f.label === "Dashboard") ||  (f.label === "Users")) ;
                }else {
                    return  (f.label === "Dashboard") ||  (f.label === "Rooms") ||  (f.label === "Booking");
                }
            }).map((items,i) => {
                const isActived =  (pathname === items.path) ||  ((pathname).includes(items.path)) 
                return <Link key={i} to={items.path} 
                className={` flex p-1 border border-white hover:border-(--color-metalique) rounded-2xl items-center gap-2 ${isActived && " text-(--color-primary) hover:border-(--color-primary) "} font-light `}
                >
                <span className="bg-slate-200 p-1.5 inline-block rounded-lg">
                    {items.icons} 
                </span>
                <span>
                    {items.label}
                </span>
            </Link> 
            }  )
        }  

        <a onClick={() => setShow({ id: user.id!, show: true })}
            className={`text-(--color-error) flex p-1 border border-white hover:border-(--color-error) rounded-2xl items-center gap-2  font-light `}
            >
            <span className="bg-slate-200 p-1.5  inline-block rounded-lg">
                <BiLogOut size={20} />
            </span>
            <span>
                Logout
            </span>
        </a>
            {          
              show.show &&
               <CardConfirmLogout title="Logout" navigate={`/login`}  setShow={setShow}  />
            }
    </section>
  )
}