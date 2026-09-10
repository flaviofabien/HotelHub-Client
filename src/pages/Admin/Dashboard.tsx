import Layout from './Layout'
import { useQuery } from '@tanstack/react-query';
import LoaderPage from '../../Component/ui/LoaderPage/Loader';
import ErrorPage from '../../Component/ui/ErrorPage/ErrorPage';
import TitleSecondHead from '../../Component/ui/typo/TitlesecondHead';
import { getAllState } from '../../Component/api/state';
import { useContextGlobal } from '../../Component/globalState/useContextGlobal';
import type { UserType } from '../../Component/Typescript/Context';
import type { RoomType } from '../../Component/Typescript/RoomsType';
import type { BookingType } from '../../Component/Typescript/BookType';

export default function Dashboard() {
  const {user} = useContextGlobal()
  
    const {data , isLoading , isError} = useQuery( {
      queryKey : ['state',!user.token],
      queryFn : () => getAllState(user.token) 
    })

    console.log(data);
    
    
    if (isLoading) { return <LoaderPage />}
    if(isError) { return <ErrorPage /> }
  return (
    <Layout>
        <section className="bg-white w-full p-4 flex flex-col gap-8">
          <TitleSecondHead title="Dashboard" />
          {
            user.role === "superAdmin" &&
            <div className='  flex justify-between gap-4 items-start flex-col lg:flex-row'>
              <div className='border p-4 rounded-2xl shadow-xl '>
                  <TitleSecondHead title="Number all Users" />
                  <p className='text-5xl '> {data.users.filter( (f : UserType)  => f.role !== "superAdmin").length} </p>
              </div>
              <div className='border p-4 rounded-2xl shadow-xl '>
                  <TitleSecondHead title="Number all Clients" />
                  <p className='text-5xl '> {data.users.filter( (f : UserType)  => f.role === "client").length} </p>
              </div>
              <div className='border p-4 rounded-2xl shadow-xl '>
                  <TitleSecondHead title="Number all Admin" />
                  <p className='text-5xl '> {data.users.filter( (f : UserType)  => f.role === "admin").length} </p>
              </div>
            </div>
          }

          {
            user.role === "admin" &&
            <div className='  flex justify-between gap-4 items-start flex-col lg:flex-row'>
              <div className='border p-4 rounded-2xl shadow-xl '>
                  <TitleSecondHead title="Number Total Rooms" />
                  <p className='text-5xl '> {data.rooms.filter( (f : RoomType)  => f.idUser === user.id).length} </p>
              </div>
              <div className='border p-4 rounded-2xl shadow-xl '>
                  <TitleSecondHead title="Number all Clients Booking your" />
                  <p className='text-5xl '> {data.Booking.filter( (f : BookingType)  => f?.Room?.idUser === user.id).length} </p>
              </div>
              <div className='border p-4 rounded-2xl shadow-xl '>
                  <TitleSecondHead title="Number Rooms Booking successfully" />
                  <p className='text-5xl '> {data.Booking.filter( (f : BookingType)  => f.confirm === "success").length} </p>
              </div>
            </div>
          }

          {
            user.role === "client" &&
            <div className='  flex justify-between gap-4 items-start flex-col lg:flex-row'>
              <div className='border p-4 rounded-2xl shadow-xl '>
                  <TitleSecondHead title="Number All Rooms" />
                  <p className='text-5xl '> {data?.rooms?.length} </p>
              </div>
              <div className='border p-4 rounded-2xl shadow-xl '>
                  <TitleSecondHead title="Number Rooms Avaible" />
                  <p className='text-5xl '> {data?.rooms?.filter( (f : RoomType)  => f.avaible === "true").length} </p>
              </div>
              <div className='border p-4 rounded-2xl shadow-xl '>
                  <TitleSecondHead title="Number Rooms Not Avaiable" />
                  <p className='text-5xl '> {data?.rooms?.filter( (f : RoomType)  => f.avaible === "false").length} </p>
              </div>
            </div>
          }

          {
            user.role !== "client" &&
          <div className=''>
              <div className="flex justify-between mt-4">
                <TitleSecondHead title="Users" />
            </div>
            <div className="flex flex-col gap-8 mt-8 overflow-y-auto">
              <table className=' border p-4  bg-white'>
                  <thead className=''>
                      <tr className='text-2xl p-2 font-medium'>
                          <td className='px-4 py-2'>FullName</td>
                          <td className='px-4 py-2'>Email</td>
                          <td className='px-4 py-2'>Role</td>
                      </tr>
                  </thead>
                  <tbody>
                      {data.users?.filter( (f : UserType)  => {
                          if (user.role === "superAdmin") {
                            return f.role !== "superAdmin" 
                          }else if (user.role === "admin") {
                            return  (f.role === "client") 
                          }else {
                            return null
                          }
                      }  ).map( (items : UserType,i : number) => {
                      return (
                              <tr className={`border text-lg font-light ${i % 2 === 1 ? "bg-zinc-100" : "" }`} >
                                  <td className='px-4 py-2'> {items.fullName} </td>
                                  <td className='px-4 py-2'> {items.email} </td>
                                  <td className='px-4 py-2'> {items.role} </td>
                              </tr>
                          )
                      } )}
                  </tbody>
              </table>            
            </div>    
          </div>
          }

        </section>
    </Layout>
  )
}