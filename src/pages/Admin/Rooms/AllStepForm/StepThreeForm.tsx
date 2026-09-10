import { FaTv, FaWifi } from "react-icons/fa";
import FieldCheckboxWithImage from "../../../../Component/ui/field/FieldCheckboxWithImage";
import { FaAirbnb, FaRegEye } from "react-icons/fa6";
import type { UseFormRegister } from "react-hook-form";
import type { RoomType } from "../../../../Component/Typescript/RoomsType";

type Props = {
  register : UseFormRegister<RoomType>
}

export default function StepThreeForm({register} : Props) {
  return (
    <>
       <div className="mt-8" >
        <div className="flex gap-8 lg:flex-row flex-col">
          <FieldCheckboxWithImage icons={ <FaWifi className=" inline-block text-(--color-primary)" size={120} /> }  label="Wi-Fi" register={register("wifi")} /> 
          <FieldCheckboxWithImage icons={ <FaAirbnb className=" inline-block text-(--color-primary)" size={120} /> }  label="airConditioning" register={register("airConditioning")}/> 
        </div>
        <div className="flex gap-8 mt-8 lg:flex-row flex-col">
          <FieldCheckboxWithImage  icons={ <FaTv className=" inline-block text-(--color-primary)" size={120} /> }  label="TV" register={register("tv")}  /> 
          <FieldCheckboxWithImage  icons={ <FaRegEye className=" inline-block text-(--color-primary)" size={120} /> }  label="Avaible" register={register("avaible")}  /> 
        </div>
      </div>
    </>
  )
}
