import type { FieldError, UseFormRegisterReturn } from "react-hook-form"

type Props = {
  label : string
  register :  UseFormRegisterReturn<string>
  error ?: string | FieldError 
}

export default function FieldTextarea({label,register,error} : Props) {
  return (
    <div className="flex flex-col">
      <label className="text-xl font-bold" htmlFor=""> {label} </label>
      <textarea {...register} rows={8} className="mt-2 border pl-2"  placeholder={` Enter your ${label.toLocaleLowerCase()}.... `} />
       {
          error && (
                <p className="text-(--color-error)">
                    {typeof error === "string" ? error : error.message}
                </p>
    )      }
    </div>
  )
}