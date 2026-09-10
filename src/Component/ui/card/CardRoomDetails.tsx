import { BiCheck, BiTv, BiWifi, BiX } from "react-icons/bi";
import { IPLocal } from "../../../Constant/Constant";
import { FaAirFreshener, FaRegEye } from "react-icons/fa";
import {motion} from "framer-motion"
import ButtonSimple from "../button/ButtonSimple";
import { useNavigate } from "react-router-dom";
import { useContextGlobal } from "../../globalState/useContextGlobal";
import type { RoomType } from "../../Typescript/RoomsType";

type Props = {
    data : RoomType
    onclickX : React.MouseEventHandler<HTMLSpanElement> | undefined
}

export default function CardRoomDetails({data,onclickX} : Props) {
        const {user} = useContextGlobal()

    const navigate = useNavigate()
  return (
    <div className="w-full h-full top-0 right-0 lg:left-0 fixed backdrop-blur-md bg-black/10 ">
       <span className="z-100 absolute top-2 right-2 bg-(--color-error) py-2 px-4 text-white cursor-pointer hover:scale-110" onClick={onclickX}>X</span>
       <motion.div initial={{x : 200 , scale : 2 , opacity : 0}} animate={{x : 0 , scale : 1 , opacity : 1}}  className="absolute flex flex-col lg:flex-row justify-between bottom-0 right-0 bg-white w-100 lg:w-350  lg:p-8 p-2 rounded-b-3xl">
        <div className="">
            <img className="  w-88  lg:w-160  lg:h-160 object-cover" src={IPLocal + data.image} alt="" />
        </div>
            
        <div className="w-100 px-2 pt-4 rounded-b-lg border border-(--color-koromiko) ">
            <div>
                <h3 className= "text-2xl font-bold text-(--color-primary)  ">  <span className="text-(--color-metalique)"> {data.nbBed} </span> Suite </h3>
                <p className="mt-2 text-sm mb-4"> {data.type}  </p>     
            </div>
                <div className="mt-8 bg-gray-100 lg:p-2">
                <p className=" text-2xl bg-(--color-primary)/20 text-(--color-primary) px-4 font-light">Ar {data.price}  </p>
                <p className="text-slate-400">Capacity : {data.capacity}  </p>
                <p className="text-slate-400">Number : {data.number}  </p>
            </div>
            <div className="my-4 ">
                <p className="text-2xl   font-light flex gap-2  items-center"> <BiWifi size={40} /> WIFI  <span> {data.wifi === "true" ?  <BiCheck className="bg-green-400 text-3xl text-white  rounded-full" />:< BiX className="bg-red-400 text-3xl text-white  rounded-full" /> }  </span>   </p>
                <p className="text-2xl font-light flex gap-2 items-center "> <FaRegEye size={40} /> AVAIBLE  <span> {data.avaible === "true" ?  <BiCheck className="bg-green-400 text-3xl text-white  rounded-full" />:< BiX className="bg-red-400 text-3xl text-white  rounded-full" /> }  </span>   </p>
                <p className="text-2xl font-light flex gap-2 items-center"> <FaAirFreshener size={40} /> AIR CONDITIONNING   <span> {data.airConditioning === "true" ?  <BiCheck className="bg-green-400 text-3xl text-white  rounded-full" />:< BiX className="bg-red-400 text-3xl text-white  rounded-full" /> }  </span>   </p>
                <p className="text-2xl font-light flex gap-2 items-center"> <BiTv size={40} /> TV   <span> {data.tv === "true" ?  <BiCheck className="bg-green-400 text-3xl text-white  rounded-full" />:< BiX className="bg-red-400 text-3xl text-white  rounded-full" /> }  </span>   </p>
            </div>
            {
                user.role === "client" && data.avaible === "true" &&
                <div>
                    <ButtonSimple onClick={() => navigate(`/admin/books/add/${data.id}`) } label={"Booking"} />
                </div>
            }
        </div>

       </motion.div>
    </div>  
    )
}
