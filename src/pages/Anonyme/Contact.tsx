import { useForm } from "react-hook-form";
import ButtonPrimary from "../../Component/ui/button/ButtonPrimary";
import FieldTextarea from "../../Component/ui/field/FieeldTextarea";
import Field from "../../Component/ui/field/Field";
import TitleHead from "../../Component/ui/typo/TitleHead";
import Layout from "./Layout";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddContact } from "../../Component/api/contact";
import { useContextGlobal } from "../../Component/globalState/useContextGlobal";
import { useNavigate } from "react-router-dom";
import type { ErrorServerResponse } from "../../Component/Typescript/ErrorServerResponseType";
import { useState } from "react";
import ErrorServer from "../../Component/ui/error/ErrorServer";
import type { ContactType } from "../../Component/Typescript/Contact";

export default function Contact() {
  const { register , handleSubmit , formState : {errors} } = useForm<ContactType>()
  const queryClient = useQueryClient()
  const [errorServer,setErrorServer] = useState("")
  const {setAlert} = useContextGlobal()
  const navigate = useNavigate()

  const mutation = useMutation({
      mutationFn: (data: ContactType) => AddContact(data),
      
      onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ["contact"],});
          setAlert({status : true , description : "your message is submit succeffuly" , title : "Message"});
          navigate("/home")
      },

      onError: (error : ErrorServerResponse) => {
          setErrorServer(error?.response?.data.message)
      },
  });

  
  const onSubmit = (data :  ContactType) => {
    setErrorServer("")
    
    mutation.mutate(data);
  }
  return (
    <>
        <Layout >
            <section className="flex gap-8 my-20 text-start justify-start  w-full flex-col lg:flex-row items-center">
                <div className="w-full ">
                  <TitleHead title='CONTACT INFO.' />
                    <div className="w-100 h-100 bg-black mt-8 flex justify-center items-center">
                        <p className="text-6xl text-white">Carte</p>
                    </div>
                    <pre className="max-w-96 mt-8">
                        The Company Name . ltc <br /> 
                        9863 - 9867 Mill Road <br />
                        Cambridge, MG09 99TH. <br />
                        <br />
                        Telephone: +261 34 28 791 74 <br />
                        Email: <span className="text-(--color-primary)">fabien4240flavio@gmail.com</span> <br />
                    </pre>
                </div>
                <div className="w-full ">
                  <TitleHead title='GET ONE TOUCH.' />
                     {
                          errorServer && <ErrorServer text={errorServer} />
                      }
                  <form className="mt-8" onSubmit={handleSubmit(onSubmit)} >
                    <Field label="Name" register={register("name",{required : "this is required"})} error={errors.name?.message} />
                    <Field label="Email" register={register("email",{required : "this is required"})} error={errors.email?.message} />
                    <Field label="Phone" register={register("phone",{required : "this is required"})} error={errors.phone?.message} />
                    <FieldTextarea label="Message" register={register("message",{required : "this is required"})} error={errors.message?.message} />
                    <div className="mt-8 flex justify-end gap-4">
                        <ButtonPrimary label="Clear" />
                        <ButtonPrimary label="Submit" />
                    </div>
                  </form>
                </div>
            </section>
        </Layout >
    </>
  )
}