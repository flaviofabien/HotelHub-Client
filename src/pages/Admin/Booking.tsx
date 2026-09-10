import TitleSecondHead from '../../Component/ui/typo/TitlesecondHead'
import Layout from './Layout'
import CardPlate from '../../Component/ui/card/CardPlate'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { EditBooks, GetAllBooks } from '../../Component/api/book'
import LoaderPage from '../../Component/ui/LoaderPage/Loader'
import ErrorPage from '../../Component/ui/ErrorPage/ErrorPage'
import { useContextGlobal } from '../../Component/globalState/useContextGlobal'
import type { BookingType } from '../../Component/Typescript/BookType'

type DataSubmit = {
  allData : BookingType
  id : number
}

export default function Booking() {
  const {user,setAlert} = useContextGlobal()

  const {data , isLoading , isError,refetch} = useQuery<BookingType[]>( {
    queryKey : ['rooms',!user.token],
    queryFn : () => GetAllBooks(user.token) 
  })

  const queryClients = useQueryClient() 
  const mutation = useMutation({
    mutationFn : ( { allData,id} : DataSubmit) => EditBooks(allData,id,user.token),
    onSuccess() {
      queryClients.invalidateQueries({queryKey: ["books"],})
      setAlert({description: "your booking is conifrm" , status : true , title : "Confirmation"})
    },
    onError(error){
      console.log(error);
      
    }
  })

  const onSelctChange = (e : React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>,dataSelected : BookingType) => {
    const valueSelelcted = e.target.value
    const dataEditing = {
      ...dataSelected , confirm : valueSelelcted
    } 
    
    mutation.mutate({allData:dataEditing  ,id :dataSelected.id!} )
  }
  
  if (isLoading) { return <LoaderPage />}
  if(isError) { return <ErrorPage refetch={refetch} /> }
  return (
    <Layout>
         <section className="bg-white w-full p-4">
            <TitleSecondHead title="Booking" />

            <div className="flex flex-col gap-8">
              {
                data?.map( (items : BookingType) => {
                  return (<CardPlate onChangekEdit={ (e : React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => onSelctChange(e,items)} data={items} /> )
                } )
              }
              
            </div>    
        </section>
    </Layout> 
  )}