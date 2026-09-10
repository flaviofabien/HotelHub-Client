import Layout from "./Layout";
import Logo from "../../assets/HotelHub.png";
import Field from "../../Component/ui/field/Field";
import ButtonPrimary from "../../Component/ui/button/ButtonPrimary";
import {useForm} from "react-hook-form"
import {useMutation, useQueryClient} from "@tanstack/react-query"
import { loginUser } from "../../Component/api/user";
import type { UserType } from "../../Component/Typescript/UsersType";
import TitleSecondHead from "../../Component/ui/typo/TitlesecondHead";
import { Link, useNavigate } from "react-router-dom";
import {  useState } from "react";
import ErrorServer from "../../Component/ui/error/ErrorServer";
import type { ErrorServerResponse } from "../../Component/Typescript/ErrorServerResponseType";
import { useContextGlobal } from "../../Component/globalState/useContextGlobal";

export default function Login() {
    const { register , handleSubmit , formState : {errors} } = useForm<UserType>()
    const [errorServer,setErrorServer] = useState("")
    const {setAlert,setUser} = useContextGlobal()
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const mutation = useMutation({
        mutationFn: (data: UserType) => loginUser(data),

        onSuccess: (dataUser  : {data : { token : string ,user : UserType }}  ) => {
            queryClient.invalidateQueries({queryKey: ["users"],});
            console.log(dataUser);
            navigate("/admin/dashboard")
            setAlert({status : true , description : "your connexion is succeffuly" , title : "Connexion"});
            setUser({fullName : dataUser.data.user.fullName , email : dataUser.data.user.email , id : dataUser.data.user.id! , token : dataUser.data.token ,role :dataUser.data.user.role });
        },

        onError: (error : ErrorServerResponse) => {
            setErrorServer(error?.response?.data?.message)
        },
    });

    const onSubmit = (data : UserType ) => {
        setErrorServer("")
        mutation.mutate(data);
    }

     
  return (
      <Layout >
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 rounded-4xl w-120  bg-white shadow-2xl">            
                <div className="flex justify-center mb-8">
                    <img src={Logo} className="w-60 " alt="" />
                </div>
                    <TitleSecondHead title="Login" />
                    <p className="mt-4 text-lg text-gray-400">Start your journey by creating a new account</p>
                    {
                        errorServer && <ErrorServer text={errorServer} />
                    }
                <div className="flex flex-col gap-4 mt-8">
                    <Field label="Email" register={register("email", {
                    required: "this is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                    }
                    })} error={errors.email?.message}  />
                    <Field type="password" label="Password" register={register("password", {
                        required: "this is required",
                        pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#])[A-Za-z\d@$!%*?&.#]{8,}$/,
                        message:
                            "The password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."                        },
                    })} error={errors.password?.message} />
                   
                    <div className="flex justify-start">
                        <ButtonPrimary label="Sign up" type="submit" />
                    </div>
                    <p className="text-center text-lg">Have an account ? <Link to="/register" className="hover:underline" >sign in</Link> </p>
                </div>
            </form> 
        </ Layout>
  )
}