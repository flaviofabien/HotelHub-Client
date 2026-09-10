import { BiEdit } from "react-icons/bi"
import ButtonSimple from "../button/ButtonSimple"
import { FaDeleteLeft } from "react-icons/fa6"
import { useContextGlobal } from "../../globalState/useContextGlobal"

type Props = {
    type : string
    wifi : string
    tv : string
    airConditioning : string
    avaible : string
    name : string
    price : number
    image : string
    number : number
    labelButton : string
    onClick ?: React.MouseEventHandler<HTMLButtonElement>
    onClickEditRooms?:React.MouseEventHandler<HTMLButtonElement>
    onClickDeleteRooms?:React.MouseEventHandler<HTMLButtonElement>
}

export default function CardDetails({wifi,tv,avaible,airConditioning,onClick,onClickEditRooms,onClickDeleteRooms,type,name,price,image,number,labelButton}: Props) {
    const {user} = useContextGlobal()
  return (
    <div className="w-96 relative">
        <img className="w-full border border-(--color-koromiko) h-60 object-cover" src={image} alt="" />
        
        <div className="pt-4 rounded-b-lg border border-(--color-koromiko) px-4">
        <h3 className= "px-4 py-2 text-white bg-(--color-primary) text-lg absolute right-4 top-4 ">  {wifi === "true" && "Wifi" } {tv === "true" && "TV" } {airConditioning === "true" && "Air Conditioning" } {avaible === "true" && "Avaible" }</h3>
            <div className="flex justify-between">
                <div>
                    <h3 className= "text-2xl font-bold text-(--color-primary)  ">  <span className="text-(--color-metalique)"> {type} </span> Suite </h3>
                    <p className="mt-2 text-sm mb-4"> {name}  </p>
                </div>
                {
                     user.role !== "client"  && 
                    <div>
                        <span onClick={onClickEditRooms}><BiEdit  size={25} className=" text-(--color-primary)" />
                        </span>
                        <span onClick={onClickDeleteRooms}>
                            <FaDeleteLeft   size={25} className="text-(--color-primary)" />
                        </span>
                    </div>
                }
            </div>
            <div className="flex justify-between border-t border-(--color-koromiko) mt-2 py-4">
                <ButtonSimple onClick={onClick} label={labelButton} />
                <div>
                    <p className="">Ar {price}  </p>
                    <p> {number} </p>
                </div>
            </div>
        </div>

    </div>
  )
}