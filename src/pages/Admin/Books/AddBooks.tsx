import { useEffect, useState } from 'react'
import Field from '../../../Component/ui/field/Field'
import { useForm, useWatch } from 'react-hook-form'
import Layout from '../Layout'
import TitleSecondHead from '../../../Component/ui/typo/TitlesecondHead'
import { useNavigate, useParams } from 'react-router-dom'
import LoaderPage from '../../../Component/ui/LoaderPage/Loader'
import ErrorPage from '../../../Component/ui/ErrorPage/ErrorPage'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { IPLocal } from '../../../Constant/Constant'
import ButtonSimple from '../../../Component/ui/button/ButtonSimple'
import { AddBookings } from '../../../Component/api/book'
import type { ErrorServerResponse } from '../../../Component/Typescript/ErrorServerResponseType'
import ErrorServer from '../../../Component/ui/error/ErrorServer'
import { GetOneRooms } from '../../../Component/api/rooms'
import { useContextGlobal } from '../../../Component/globalState/useContextGlobal'
import type { BookingFormType } from '../../../Component/Typescript/BookType'
import { CalculateDate } from '../../../Component/utils/CalculateDate'

export default function AddBooks() {
    const {id} = useParams()
    const {user,setAlert} = useContextGlobal()
    const navigate = useNavigate()
    const [errorServer, setErrorServer] = useState("");
    const {register,control,handleSubmit,formState : {errors}} = useForm<BookingFormType>()
    const [numberDate,setNumberDate] = useState<number>()


    const {data , isLoading , isError} = useQuery( {
        queryKey : ['rooms',id,!user.token] ,
        queryFn : () => GetOneRooms( Number(id),user.token) 
    } , )

    const queryClient = useQueryClient(); 
    const mutation = useMutation(
        {
            mutationFn : (allData : BookingFormType) => AddBookings(allData,user.token), 
                onSuccess() {
                queryClient.invalidateQueries({queryKey: ["books"],})
                setAlert({title : "Add Books" , description : "Your edit booking is successfully",status : true})
                navigate("/admin/books");
                },
                onError(error : ErrorServerResponse) {
                    setErrorServer(error?.response?.data.message)
                }
        }
    )
  
    const watchDateEnter = useWatch({
      control,
      name: "dateEnter"
    })

    const watchDateOut = useWatch({
      control,
      name: "dateOut"
    })

    useEffect( () =>  {
        CalculateDate(watchDateEnter,watchDateOut,setNumberDate)
    },[watchDateOut,watchDateEnter])

    const onSubmit = (datasubmiting : BookingFormType ) => {
      const dataSubmit = { 
          ...datasubmiting , 
          idRoom : parseInt(id!),
          idUser : user.id ,
          priceTotal : (data.price) * numberDate! ,
          numberNight : numberDate,
          confirm : "pending"
      }
      
      mutation.mutate(dataSubmit)
    }
    if (isLoading) { return <LoaderPage />}
    if(isError) { return <ErrorPage /> }
    
  return (
    <Layout>
        <form className="mt-4 bg-white w-200 p-8" onSubmit={handleSubmit(onSubmit)}>
            <TitleSecondHead title="Add booking" />
            <div className='mt-8'>
                <img className="w-full border border-(--color-koromiko) h-60 object-cover" src={IPLocal + data.image} alt="" />
                <div className="flex justify-between items-start mt-8">
                    <div>
                        <h3 className= "text-2xl font-bold text-(--color-primary)  ">  <span className="text-(--color-metalique)"> {data.type} </span> Suite </h3>
                        <p className="mt-2 text-sm mb-4"> {data.name}  </p>
                    </div>
                    <h3 className= "px-2 py-1 text-white bg-(--color-primary) text-lg ">  {data.wifi === "true" && "Wifi" } {data.tv === "true" && "TV" } {data.airConditioning === "true" && "Air Conditioning" } {data.avaible === "true" && "Avaible" }</h3>
                    <div>
                        <p className="">Ar {data.price}  </p>
                        <p> {data.number} </p>
                    </div>
                </div>
               
            </div>
            {
                errorServer && <ErrorServer text={errorServer} />
            }
            <div className="flex w-full gap-8 mt-4">
                <Field  type="date" label="Date enter" register={register("dateEnter",{required : "this is required"})} error={errors.dateEnter?.message} /> 
                {
                   watchDateEnter &&  <Field dateMin={watchDateEnter} type="date" label="Date out" register={register("dateOut",{required : "this is required"})} error={errors.dateOut?.message} /> 
                } 
            </div>
            <Field type='number' label="Number personne" register={register("numberPersonne",{required : "this is required"})} error={errors.numberPersonne?.message} /> 
            <div className='my-4'>
                  {numberDate} Day Price : Ar { (data.price) * numberDate!}
            </div>
            <ButtonSimple type='submit' label='Add' />
        </form>
    </Layout>
  )
}