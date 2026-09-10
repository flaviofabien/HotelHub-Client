import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import TitleSecondHead from "../typo/TitlesecondHead";
import ButtonSimple from "../button/ButtonSimple";
import { useContextGlobal } from "../../globalState/useContextGlobal";


type Props = {
    title : string
    show : {
        show: boolean;
        id: number;
    }
    setShow :  React.Dispatch<React.SetStateAction<{
        show: boolean;
        id: number;
    }>>
    functionMutation: (id: number, token: string) => Promise<unknown>; 
    navigate : string
}

export default function CardConfirm({navigate,show,setShow,title,functionMutation}: Props) {
    const {user,setAlert} = useContextGlobal()
    const queryClient = useQueryClient();
    const navigation = useNavigate();
    
    const mutation = useMutation(
        {
        mutationFn: (id : number) => functionMutation(id, user.token!),
        onSuccess: () => {
            setAlert({description : "Your rooms is delete successfully" , status : true , title : "Delete " + title.toLocaleLowerCase() })
            queryClient.invalidateQueries();
            navigation(navigate); 
        },
    });

    const HandleDelete = (id : number) => {
        mutation.mutate(id)
        setShow({id : NaN, show : false}) 
    }

    return (
        <div className='h-screen w-full flex justify-center items-center fixed backdrop-blur-sm  top-0 left-0 '>
            <div className="w-100 border-2 border-(--color-primary) rounded-b-4xl p-4 bg-white ">
                <TitleSecondHead title={title}  />
                <p className="mt-4"> Are you sure to delete this  {title.toLocaleLowerCase()} </p>
                <div className="mt-4  pb-4 flex justify-between w-full items-center">
                    <ButtonSimple style={2} onClick={ () =>  HandleDelete(show.id) } label="Yes,I'm sure"   />
                    <ButtonSimple   onClick={ () => setShow({
                        id : NaN, show : false
                    }) } label="No"  />
                </div>
            </div>
        </div>
    )
}