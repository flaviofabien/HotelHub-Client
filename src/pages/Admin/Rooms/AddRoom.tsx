import { useState } from "react";
import Line from "../../../Component/ui/Line";
import TitleSecondHead from "../../../Component/ui/typo/TitlesecondHead";
import Layout from "../Layout";
import StepFourForm from "./AllStepForm/StepFourForm";
import StepOneForm from "./AllStepForm/StepOneForm";
import StepThreeForm from "./AllStepForm/StepThreeForm";
import StepTwoForm from "./AllStepForm/StepTwoForm";
import { useForm } from "react-hook-form";
import ButtonContinueBack from "../../../Component/ui/button/ButtonContinueBack";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AddRooms } from "../../../Component/api/rooms";
import type { RoomType } from "../../../Component/Typescript/RoomsType";
import { useContextGlobal } from "../../../Component/globalState/useContextGlobal";
import type { ErrorServerResponse } from "../../../Component/Typescript/ErrorServerResponseType";

export default function AddRoom() {
  const {register,handleSubmit,formState : {errors}} = useForm<RoomType>()
  const [fileURLs, setFileURLs] = useState("");
  const [file, setFile] = useState<Blob>();
  const [errorFile, setErrorFile] = useState("");
  const [step, setStep] = useState(1);
  const  [allData,setAllData] = useState<RoomType>();
  const navigate = useNavigate()
  const {setAlert,user} = useContextGlobal()
  const [errorServer,setErrorServer] = useState("")

  const queryClient = useQueryClient(); 
  const mutation = useMutation(
      {
        mutationFn : (allData : FormData) => AddRooms(allData,user.token), 
          onSuccess() {
            queryClient.invalidateQueries( {queryKey : ["rooms"]} )
            setAlert({title : "Rooms" , description : "Your rooms is create successfully",status : true})
            navigate("/admin/rooms");
          },
          onError(error : ErrorServerResponse) {
            setErrorServer(error?.response?.data.message)
          }
      }
    )

  const onsubmit = (data : RoomType) => { 
    setErrorServer("")

    if( !file ) {
      setErrorFile("Image is required")
      return null
    }else {
      setErrorFile("")
    }
     setStep(step + 1);
     if(step >= 4 ) {
      setStep(4)
     }
     setAllData({...data,image : file}); 

      if(step === 4 && allData) {
        const FormDataSubmit = new FormData()
        FormDataSubmit.append("name",allData?.name)
          if (file) {
            FormDataSubmit.append("image",file)
          }

          FormDataSubmit.append("idUser",String(user.id) )
          FormDataSubmit.append("type",allData?.type)
          FormDataSubmit.append("number",String( allData?.number))
          FormDataSubmit.append("price",String(allData?.price))
          FormDataSubmit.append("capacity",String(allData?.capacity))
          FormDataSubmit.append("nbBed",allData?.nbBed)
          FormDataSubmit.append("wifi",allData?.wifi)
          FormDataSubmit.append("airConditioning",allData?.airConditioning)
          FormDataSubmit.append("tv",allData?.tv)
          FormDataSubmit.append("avaible",allData?.avaible)

          mutation.mutate(FormDataSubmit)
      }
  }

  return (
    <Layout>
      <section className="bg-white w-full p-4">
          <TitleSecondHead title="Add rooms" />
           <form onSubmit={handleSubmit(onsubmit)} className="my-4 w-full lg:w-200">
              <div className=" flex gap-8 justify-between flex-wrap">
                <div className="flex items-center  gap-2">
                  <span className={`py-3 px-5 rounded-full  ${step === 1 ? "bg-(--color-primary) text-white" : "bg-slate-100 "}  `}  >1</span>
                  <h3 className="text-lg font-light ">
                    Info Generale
                  </h3>
                </div>
                <div className="flex items-center  gap-2">
                  <span className={`py-3 px-5 rounded-full  ${step === 2 ? "bg-(--color-primary) text-white" : "bg-slate-100 "}  `} >2</span>
                  <h3 className="text-lg font-light ">
                    Capacity and price
                  </h3>
                </div>
                <div className="flex items-center  gap-2">
                  <span className={`py-3 px-5 rounded-full  ${step === 3 ? "bg-(--color-primary) text-white" : "bg-slate-100 "}  `}>3</span>
                  <h3 className="text-lg font-light ">
                    Tooling
                  </h3>
                </div>
                <div className="flex items-center  gap-2">
                  <span className={`py-3 px-5 rounded-full  ${step === 4 ? "bg-(--color-primary) text-white" : "bg-slate-100 "}  `} >4</span>
                  <h3 className="text-lg font-light ">
                    Confirmation
                  </h3>
                </div>
              </div>
            <Line />
            {
              step === 1 && 
              <StepOneForm errorFile={errorFile} errors={errors} fileURLs={fileURLs} register={register} setFile={setFile} setFileURLs={setFileURLs} />
            }
            {
               step === 2 && 
              <StepTwoForm register={register} errors={errors}  />
            }
            {
              step === 3 && 
              <StepThreeForm register={register}  />
            }
            {
              step === 4 && <StepFourForm fileUrl={fileURLs!} errorServer={errorServer} image={file!} data={allData!} />
            }
            <div className="mt-8">
              <ButtonContinueBack step={step} setStep={setStep} />
            </div>
            
           </form>
        </section>
    </Layout>
  )
}