
import { useContextGlobal } from '../../../Component/globalState/useContextGlobal'
import ButtonSimple from '../../../Component/ui/button/ButtonSimple'


type Props = {
    title : string
    description : string
    price : number
    image : string
    star : number
    labelButton : string
    onClick : React.MouseEventHandler<HTMLButtonElement>
}
export default function Room({title,onClick,description,price,image,star,labelButton}: Props) {
   const {user} = useContextGlobal() 
    return (
     <div className=" relative ">
            <img className="w-full h-60 object-cover" src={image} alt="" />
            
            <div className="pt-4 rounded-b-lg border border-(--color-koromiko) px-4">
                <h3 className= "px-4 py-2 text-white bg-(--color-primary) text-lg  right-4 top-4 "> {title} WIFI TV</h3>
                <h3 className= "text-2xl font-bold text-(--color-primary)  ">  <span className="text-(--color-metalique)"> {title} </span> Suite </h3>
                <p className="mt-2 text-sm mb-4"> {description}  </p>
                <div className="flex justify-between border-t border-(--color-koromiko) mt-2 py-4">
                    <p className="">Ar {price}  </p>
                    <p> {star} </p>
                </div>
            </div> 
            {
                user.role === "client" && 
                <div className="mt-4 border-(--color-koromiko)">
                    <ButtonSimple onClick={onClick} label={labelButton} />
                </div>
            }
        </div>
  )
}