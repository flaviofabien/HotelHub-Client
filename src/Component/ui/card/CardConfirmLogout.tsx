import { useNavigate } from "react-router-dom";
import TitleSecondHead from "../typo/TitlesecondHead";
import ButtonSimple from "../button/ButtonSimple";
import { useContextGlobal } from "../../globalState/useContextGlobal";


type Props = {
    title : string

    setShow :  React.Dispatch<React.SetStateAction<{
        show: boolean;
        id: number;
    }>>
    navigate : string
}

export default function CardConfirmLogout({navigate,setShow,title}: Props) {
    const navigation = useNavigate();
    const {setUser,setAlert} = useContextGlobal()

    const HandleDelete = () => {
        setShow({id : NaN, show : false}) 
        setUser({email : "" , fullName : "" , id : undefined , token : "" , role : undefined})
        setAlert({ title : "Logout" , description : "your logout is successfuly" , status : true })
        navigation(navigate)
    }

    return (
        <div className='h-screen w-full z-100 flex justify-center items-center fixed backdrop-blur-sm  top-0 left-0 '>
            <div className="w-100 border-2 border-(--color-primary) rounded-b-4xl p-4 bg-white ">
                <TitleSecondHead title={title}  />
                <p className="mt-4"> Are you sure to Logout   </p>
                <div className="mt-4  pb-4 flex justify-between w-full items-center">
                    <ButtonSimple style={3} onClick={ () =>  HandleDelete() } label="Yes,I'm sure"   />
                    <ButtonSimple   onClick={ () => setShow({
                        id : NaN, show : false
                    }) } label="No"  />
                </div>
            </div>
        </div>
    )
}