import type { ChangeEventHandler } from "react"
import { IPLocal } from "../../../Constant/Constant"
import { useContextGlobal } from "../../globalState/useContextGlobal"
import type { BookingType } from "../../Typescript/BookType"


type Props = {
  data : BookingType,
  onChangekEdit : ChangeEventHandler<HTMLSelectElement, HTMLSelectElement>
}

export default function CardPlate({data,onChangekEdit}: Props) {
  const {user} = useContextGlobal()
  return (
    <div className="border  w-full shadow-2xl mt-8 rounded-3xl p-8 flex flex-col gap-8  lg:flex-row justify-between">
      <div className="flex gap-4 ">
        <div className="">
            <img className=" border rounded-2xl w-20 border-(--color-koromiko) h-20 object-cover" src={IPLocal + data.Room?.image} alt="" />
        </div>
        <div>
            <h3 className= "text-xl font-bold text-(--color-primary)  ">  <span className="text-(--color-metalique)"> {data.Room?.nbBed} </span> Suite </h3>
            <h3 className= "text-lg font-bold text-(--color-primary)  ">  <span className="text-(--color-metalique)"> {data.Room?.name} </span>  </h3>
            <p className=" text-sm "> {data.Room?.type}  </p>     
        </div>
      </div>
      <div> 
        <p className={` ${data.confirm === "refus" && "text-red-400 bg-red-400/20 rounded-xl p-2 border border-red-500"}  ${data.confirm === "success" && "text-green-400 bg-green-400/20 rounded-xl p-2 border border-green-500"}  ${data.confirm === "pending" && "text-blue-400 bg-blue-400/20 rounded-xl p-2 border border-blue-500"} `}>{data.confirm}</p>
        {
          user?.role !== "client" &&  user?.role !== "superAdmin" &&
          <select onChange={onChangekEdit} className="w-full p-4 border-2">
            <option defaultChecked disabled > Change Confirmation</option>
            <option value="pending" > Pending</option>
            <option value="success">Succees</option>
            <option value="refus">Refus</option>
        </select>
        }
      </div>
      <div> 
        <p>{data?.User?.fullName}</p>
        <div className="lg:text-end  border-t text-2xl font-light">
          <p> Ar {data.priceTotal} </p>  
          <p> {data.numberNight} Day / night</p>  
        </div>
      </div>
    </div>
  )
}