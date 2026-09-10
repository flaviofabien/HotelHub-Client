import Layout from './Layout'
import TitleSecondHead from '../../Component/ui/typo/TitlesecondHead'
import ErrorPage from '../../Component/ui/ErrorPage/ErrorPage'
import LoaderPage from '../../Component/ui/LoaderPage/Loader'
import { getAllUser } from '../../Component/api/user'
import { useQuery } from '@tanstack/react-query'

import { useNavigate } from 'react-router-dom'
import ButtonSimple from '../../Component/ui/button/ButtonSimple'
import { useContextGlobal } from '../../Component/globalState/useContextGlobal'
import type { UserType } from '../../Component/Typescript/Context'

export default function Users() {
  const {user} = useContextGlobal()
  const navigate = useNavigate()

  const {data , isLoading , isError ,refetch} = useQuery( {
    queryKey : ['users',!user.token],
    queryFn : () => getAllUser(user.token) 
  })
  
  if (isLoading) { return <LoaderPage />}
  if(isError) { return <ErrorPage refetch={refetch} /> }
  return (
    <Layout>
         <section className="bg-white w-full p-4">
             <div className="flex justify-between mt-4">
            <TitleSecondHead title="Users" />
                <ButtonSimple  label="Add +" onClick={() => navigate("/admin/users/add")} />            
            </div>
            <div className="flex flex-col gap-8 mt-8 overflow-y-auto">
                <table className=' border p-4'>
                    <thead className=''>
                        <tr className='text-2xl p-2 font-medium'>
                            <td className='px-4 py-2'>FullName</td>
                            <td className='px-4 py-2'>Email</td>
                            <td className='px-4 py-2'>Role</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.filter( (f : UserType)  => f.role !== "superAdmin"  ).map( (items : UserType,i : number) => {
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
        </section>
    </Layout>   
    )
}
