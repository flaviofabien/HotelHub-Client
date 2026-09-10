import { useEffect, useState } from "react";
import Line from "../../../Component/ui/Line";
import TitleSecondHead from "../../../Component/ui/typo/TitlesecondHead";
import Layout from "../Layout";
import StepFourForm from "./AllStepForm/StepFourForm";
import StepOneForm from "./AllStepForm/StepOneForm";
import StepThreeForm from "./AllStepForm/StepThreeForm";
import StepTwoForm from "./AllStepForm/StepTwoForm";
import { useForm } from "react-hook-form";
import ButtonContinueBack from "../../../Component/ui/button/ButtonContinueBack";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { EditRooms, GetOneRooms } from "../../../Component/api/rooms";
import type { RoomType } from "../../../Component/Typescript/RoomsType";
import LoaderPage from "../../../Component/ui/LoaderPage/Loader";
import ErrorPage from "../../../Component/ui/ErrorPage/ErrorPage";
import { IPLocal } from "../../../Constant/Constant";
import type { ErrorServerResponse } from "../../../Component/Typescript/ErrorServerResponseType";
import { useContextGlobal } from "../../../Component/globalState/useContextGlobal";

export default function EditRoom() {
  const {id} = useParams()
  const {setAlert,user} = useContextGlobal()

  const {data , isLoading , isError} = useQuery<RoomType>( {
    queryKey : ['rooms',id,!user.token] ,
    queryFn : () => GetOneRooms( Number(id),user.token) 
  },)

  const {register,handleSubmit,formState : {errors},setValue} = useForm<RoomType>()

  const [fileURLs, setFileURLs] = useState("");  
  const [file, setFile] = useState<Blob>();
  const imageURL = fileURLs || (data?.image ? `${IPLocal}${data.image}` : undefined);
  
  const [errorFile, setErrorFile] = useState("");

  const [step, setStep] = useState(1);
  const [allData,setAllData] = useState<RoomType>();
  
  const navigate = useNavigate()
  const [errorServer,setErrorServer] = useState("")

  const queryClient = useQueryClient(); 
  const mutation = useMutation(
    {
      mutationFn : (allData : FormData) => EditRooms(allData,Number(id),user.token), 
        onSuccess() {
          queryClient.invalidateQueries( {queryKey : ["rooms"]} )
          setAlert({title : "Edit Rooms" , description : "Your edit rooms is successfully",status : true})
          navigate("/admin/rooms");
        },
        onError(error : ErrorServerResponse) {
          setErrorServer(error?.response?.data.message)
        }
    }
  )
  
   useEffect(() => {
     if (data) {
            setValue("name", data?.name);
            setValue("type", data?.type);
            setValue("number" , data?.number)   
            setValue("price", data?.price);
            setValue("capacity", data?.capacity);
            setValue("nbBed", data?.nbBed);
            setValue("wifi", JSON.parse(data?.wifi) );
            setValue("tv",  JSON.parse(data?.tv) );
            setValue("avaible" , JSON.parse(data?.avaible) )   
            setValue("airConditioning", JSON.parse( data?.airConditioning));
        }
    }, [data, setValue,isLoading]);

    

  const onSubmit = (data : RoomType) => { 
    setErrorServer("")
    
    if( !file &&  !imageURL) {
      setErrorFile("Image is required")
      return null
    }else {
      setErrorFile("")
    }

     setStep(step + 1);
     if(step >= 4 ) {
      setStep(4)
     }
     setAllData({...data,image : file!}); 

      if(step === 4 && allData) {
        const FormDataSubmit = new FormData()
        FormDataSubmit.append("name",allData.name)
        if (file) {FormDataSubmit.append("image",file)}
        
        FormDataSubmit.append("type",allData?.type)
        FormDataSubmit.append("number",String(allData?.number) )
        FormDataSubmit.append("price",String(allData?.price) )
        FormDataSubmit.append("capacity",String(allData?.capacity) )
        FormDataSubmit.append("nbBed",allData?.nbBed)
        FormDataSubmit.append("wifi",allData?.wifi)
        FormDataSubmit.append("airConditioning",allData?.airConditioning)
        FormDataSubmit.append("tv",allData?.tv)
        FormDataSubmit.append("avaible",allData?.avaible)

        mutation.mutate(FormDataSubmit)
      }
  }

    if (isLoading) {
      return <LoaderPage />
    }
    if(isError) {
      return <ErrorPage />
    }

  return (
    <Layout>
      <section className="bg-white w-full p-4">
          <TitleSecondHead title="Edit rooms" />
           <form onSubmit={handleSubmit(onSubmit)} className="my-4 w-full lg:w-200">
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
              <StepOneForm errorFile={errorFile} errors={errors} fileURLs={imageURL} register={register} setFile={setFile} setFileURLs={setFileURLs} />
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
              step === 4 && <StepFourForm fileUrl={imageURL} errorServer={errorServer} image={file!} data={allData!} />
            }
            <div className="mt-8">
              <ButtonContinueBack step={step} setStep={setStep} />
            </div>
            
           </form>
        </section>
    </Layout>
  )
}