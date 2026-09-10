 import { useState, type ReactNode } from "react"
import type { UseFormRegisterReturn, UseFormSetValue } from "react-hook-form";
import { BsCopy } from "react-icons/bs";
import { generateSecurePassword } from "../../utils/GeneratePassword";
import type { AddUserType } from "../../Typescript/UsersType";

type Props = {
  icons ?: ReactNode;
  label: string;
  register: UseFormRegisterReturn;
  setValue?: UseFormSetValue<AddUserType>; 
  error?: string;
  show?: boolean;
  type?: string;
  text?: string;
  generatePassword?: boolean;
}

export default function FieldWithsCopyPassword({icons,label,error,register,show,generatePassword,setValue}: Props) {

  const [generate, setGenerate] = useState<string>(() => {
    if (!generatePassword) return "";

    return generateSecurePassword(8);
  });  
  
  const [copied, setCopied] = useState(false); 

  const GenerateFn = () => {
    const pwd = generateSecurePassword(20);
    const pwdForte = "$" + pwd + "z" + "0" + "A"
    setGenerate(pwdForte);
    if (setValue) {
      setValue("password", pwdForte);
    }
  };


  const handleCopy = async () => {
    if (!generate) return;
    try {
      await navigator.clipboard.writeText(generate);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); 
    } catch (err) {
      console.error("Erreur lors de la copie :", err);
    }
  };
  
  return (
    <div className=" flex flex-col text-start relative w-full">
      <label className="text-xl font-bold" htmlFor=""> {label} </label>
          
          <input
            id={label}
            disabled={generatePassword}
            value={generate}
            placeholder={label} 
            {...register}  
          className= {`bg-white mt-1 border border-gray-400 rounded-lg h-12 pl-2`} />
             
      {  (show || generatePassword) &&
      <div className='absolute flex top-2 gap-2 right-0 p-4 mt-4 text-(--color-primary) hover:text-gray-400'>
        {
          generatePassword &&  <span className="hover:scale-110 cursor-pointer" onClick={handleCopy}  title="Copie"> <BsCopy size={30} /></span>
        }
        {
        copied && (
            <span className="absolute top-24 right-0 mt-1 text-lg text-green-500">
              Copié !
            </span>
          )}
                
      </div>

      }
      {
        generatePassword &&  <button  type="button" onClick={GenerateFn} className=" w-full text-white py-2 text-sm bg-(--color-primary)"> Generer mot de passe  </button>   
      }
      { error && <p className=' max-w-64 text-xs text-red-500'>{error} </p>  }
      <div className="hidden"> {icons} </div>
    </div>
  )
}