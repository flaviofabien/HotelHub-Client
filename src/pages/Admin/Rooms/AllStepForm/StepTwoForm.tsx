import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { RoomType } from "../../../../Component/Typescript/RoomsType";
import Field from "../../../../Component/ui/field/Field";

type Props = {
  register :  UseFormRegister<RoomType>
  errors :FieldErrors<RoomType>
}

export default function StepTwoForm({register,errors} : Props) {
  return (
    <>
        <div className="mt-8" >
            <Field type="Number" label="Price" register={register("price",{required : "this is required"})} error={errors.price?.message} /> 
            <div className="flex w-full gap-8">
                <Field type="Number" label="Capacity" register={register("capacity",{required : "this is required"})} error={errors.capacity?.message} /> 
                <Field type="Number" label="Number of Bed" register={register("nbBed",{required : "this is required"})} error={errors.nbBed?.message} /> 
            </div>
        </div>
    </>
  )
}
