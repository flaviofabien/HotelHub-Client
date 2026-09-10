import { useState } from 'react'
import Layout from '../Layout'
import TitleSecondHead from '../../../Component/ui/typo/TitlesecondHead'
import ErrorServer from '../../../Component/ui/error/ErrorServer'
import Field from '../../../Component/ui/field/Field'
import ButtonPrimary from '../../../Component/ui/button/ButtonPrimary'
import type { ErrorServerResponse } from '../../../Component/Typescript/ErrorServerResponseType'
import { AddUser } from '../../../Component/api/user'
import type { AddUserType, UserType } from '../../../Component/Typescript/UsersType'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import FieldWithsCopyPassword from '../../../Component/ui/field/FieldwithCopyPassword'
import { BsLock } from 'react-icons/bs'
import { useContextGlobal } from '../../../Component/globalState/useContextGlobal'


export default function AddUsers() {
     const { register ,setValue ,handleSubmit , formState : {errors} } = useForm<AddUserType>()
    const [errorServer,setErrorServer] = useState("")
    const {setAlert} = useContextGlobal()
    const queryClient = useQueryClient()
    const navigate = useNavigate()
   
    const mutation = useMutation({
        mutationFn: (data: UserType) => AddUser(data),

        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["users"],});
            setAlert({status : true , description : "your creating account is succeffuly" , title : "Account"});
            navigate("/admin/users")
        },

        onError: (error : ErrorServerResponse) => {
            setErrorServer(error?.response?.data.message)
        },
    });

    const onSubmit = (data : AddUserType ) => {
        setErrorServer("")
        const UserData : UserType = {
            ...data , 
            role : "admin",
            confirmPassword : data.password
        }
         mutation.mutate(UserData);
    }
  return (
  <Layout >
    <div className='w-full flex justify-center'>
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 rounded-4xl w-120  bg-white shadow-2xl">
            <div className="flex justify-center mb-8">
            </div>
                <TitleSecondHead title="Create new Users" />
                {
                    errorServer && <ErrorServer text={errorServer} />
                }
            <div className="flex flex-col gap-4 mt-8">
                <Field label="FullName" register={register("fullName",{required : "this is required"})} error={errors.fullName?.message}  />
                <Field label="Email" register={register("email", {
                required: "this is required",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address"
                }
                })} error={errors.email?.message}  />
                 <FieldWithsCopyPassword 
                            icons={<BsLock size={24} />} 
                            show={true}
                            type="password"
                            label="password" 
                            register={register("password")}
                            generatePassword={true}
                            setValue={setValue}
                            error={errors.password?.message}/> 
                
                <div className="flex justify-start">
                    <ButtonPrimary label="Sign up" type="submit" />
                </div>
            </div>
        </form> 
    </div>
    </ Layout>  )
}