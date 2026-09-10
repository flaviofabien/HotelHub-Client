import ButtonSimple from "../../Component/ui/button/ButtonSimple";
import CardDetails from "../../Component/ui/card/CardDetails";
import TitleSecondHead from "../../Component/ui/typo/TitlesecondHead";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { DeleteRooms, GetAllRooms } from "../../Component/api/rooms";

import LoaderPage from "../../Component/ui/LoaderPage/Loader";
import ErrorPage from "../../Component/ui/ErrorPage/ErrorPage";
import type { RoomType } from "../../Component/Typescript/RoomsType";
import {  IPLocal } from "../../Constant/Constant";
import { useState } from "react";
import CardConfirm from "../../Component/ui/card/CardConfirm";
import CardRoomDetails from "../../Component/ui/card/CardRoomDetails";
import SearchAndFiltter from "../../Component/ui/Filter/SearchAndFilter";
import Pagination from "../../Component/ui/pagination/Pagination";
import { useContextGlobal } from "../../Component/globalState/useContextGlobal";

type ShowRoms = {
    show: boolean;
    id: number;
    data?: RoomType ;
}

export default function Rooms() {
  const [ValueSearch,setValueSearch]  = useState("")
  const [params, setParams] = useState({
    limit: 3,
    page: 1,
    sortBy:  "name",
    order: "desc",
    search: ""
  });

  const {user} = useContextGlobal()
  const [show, setShow] = useState({show: false,id: NaN});  
  const [showRoms, setShowRooms] = useState<ShowRoms>({show: false,id: NaN,data : undefined});  
  const navigate = useNavigate()  

  const {data , isLoading , isError ,refetch} = useQuery( {
    queryKey : ['rooms',!user.token,params.page,params.limit,params.search,params.order,params.sortBy],
    queryFn : () => GetAllRooms(user.token,params.page!,params.limit!,params.search!,params.order!,params.sortBy!) 
  })
  
  if (isLoading) { return <LoaderPage />}
  if(isError) { return <ErrorPage refetch={refetch}  /> }
  
  return (
    <Layout>
        <section className="bg-white w-full p-4 ">
          <div className="flex justify-between mt-4 items-start w-full ">
            <div className="">
              <TitleSecondHead title="Rooms" />
              <SearchAndFiltter ValueSearch={ValueSearch} params={params} setParams={setParams} setValueSearch={setValueSearch} />
            </div>
            <ButtonSimple  label="Add +" onClick={() => navigate("/admin/rooms/add")} />            
          </div>
          
          <div className="flex gap-8 mt-6 flex-wrap">
            {
              data?.data.filter((f : RoomType) => {
                if (user.role === "admin") {
                    return f.idUser === user.id
                }else {
                  return f
                }
              }  ).map( (items : RoomType) => {
                return (<CardDetails
                onClickEditRooms={() => navigate("/admin/rooms/edit/" + items.id ) }
                   onClick={() => setShowRooms({ data : items, id: items.id!, show: true })} 
                   onClickDeleteRooms={() => setShow({ id: items.id!, show: true })}  
                   number={items.number}  airConditioning={items.airConditioning} avaible={items.avaible} tv={items.tv} wifi={items.wifi} key={items.id} type={items.type} name={items.name} image={IPLocal + items.image} price={items.price} labelButton="View All" /> )
              } )
            }

            {
              show.show &&
               <CardConfirm navigate={`/admin/rooms`} functionMutation={DeleteRooms} show={show} setShow={setShow} title={"Rooms"} />
            }

            {
             showRoms.show && <CardRoomDetails data={showRoms.data!} onclickX={ () => setShowRooms({...showRoms , show : false}) } />
            }

            <Pagination params={params} setParams={setParams} totalPage={data?.totalPages} />

          </div>    
        </section>
    </Layout>
  )
}