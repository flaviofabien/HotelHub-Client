import type { FieldErrors, UseFormRegister } from "react-hook-form";
import Field from "../../../../Component/ui/field/Field";
import FieldImage from "../../../../Component/ui/field/FieldImage";
import type { RoomType } from "../../../../Component/Typescript/RoomsType";

type Props = {
  register : UseFormRegister<RoomType>
  errors :FieldErrors<RoomType>
  fileURLs ?: string,
  setFileURLs :React.Dispatch<React.SetStateAction<string>>
  setFile : React.Dispatch<React.SetStateAction<Blob | undefined>>
  errorFile : string
}

export default function StepOneForm({register,errors,fileURLs,setFileURLs,setFile,errorFile} : Props) {
  return (
    <>
        <div className="mt-4" >
            <FieldImage 
                fileURLs={fileURLs!} 
                setFileURLs={setFileURLs} 
                setFile={setFile}
                errorFile={errorFile}
            />
            <Field label="Name" register={register("name",{required : "this is required"})} error={errors.name?.message} /> 
            <div className="flex w-full gap-8">
                <Field label="Type" register={register("type",{required : "this is required"})} error={errors.type?.message} /> 
                <Field type="Number" label="Number" register={register("number",{required : "this is required"})} error={errors.number?.message} /> 
            </div>
        </div>
    </>
  )
}
