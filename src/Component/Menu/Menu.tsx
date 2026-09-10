import { Link, useLocation } from "react-router-dom"

export default function Menu() {
  const menuData = [
    {
        label : "HOME",
        path : "/",
    },
    {
        label : "ABOUT",
        path : "/about",
    },
    {
        label : "CONTACT",
        path : "/contact",
    }
  ]

  const {pathname} = useLocation()

  return (
    <section className="flex gap-4 mt-8">
        {
            menuData.map((items,i) => {
                const isActived = pathname === items.path
                return <Link key={i} to={items.path} 
                className={` ${isActived && " text-(--color-primary)"} font-semibold text-xl`}
                > {items.label}  </Link> 
            }  )
        }  
    </section>
  )
}