import type { UseFormRegisterReturn, } from "react-hook-form"

type Props = {
  label : string
  register :  UseFormRegisterReturn<string>
  icons ?:React.ReactNode
}

export default function FieldCheckboxWithImage({label,register,icons} : Props) {
  
  return (
    <div className="flex border text-start relative  w-100">
       
      <label className="text-xl font-bold  w-60 flex items-center justify-center" htmlFor={label}>
        <div className="w-full text-center flex flex-col  py-2">
            <span className="text-center">
                {label}
            </span> 
            <span>
                {icons}
            </span>
        </div>
      </label>
      <input id={label} type="checkbox" {...register} className="  mt-1  bg-red-500 -gray-400 rounded-lg h-42.5 w-42.5 pl-2" placeholder={` Enter your ${label.toLocaleLowerCase()}.... `} />
    </div>
  )
}