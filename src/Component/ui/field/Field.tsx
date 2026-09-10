import { useState } from "react"
import type { FieldError, UseFormRegisterReturn, } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa"

type Props = {
  label : string
  input ?: string
  register :  UseFormRegisterReturn<string>
  error ?: string | FieldError 
  type ?: string
  dateMin ?: string
}

export default function Field({label,register,error,type,dateMin} : Props) {
  const [passwordType,setPassworType]  = useState("password")
  
  return (
    <div className="flex flex-col text-start relative w-full">
      <label className="text-xl font-bold" htmlFor=""> {label} </label>
      <input min={dateMin} type={type === "password" ? passwordType : type || "text" } {...register} className="bg-white w-full mt-1 border border-gray-400 rounded-lg h-12 pl-2" placeholder={` Enter your ${label.toLocaleLowerCase()}.... `} />
      {
        type && type === "password" &&
        <span className="absolute right-4 translate-y-12">
          {
            passwordType === "password" ? <FaEyeSlash onClick={() => setPassworType("text")} className="" size={20} /> : <FaEye onClick={() => setPassworType("password")}  className="password" size={20} />
          }
          </span>
      }
      {
          error && (
                <p className="text-(--color-error)">
                    {typeof error === "string" ? error : error.message}
                </p>
    )      }
    </div>
  )
}