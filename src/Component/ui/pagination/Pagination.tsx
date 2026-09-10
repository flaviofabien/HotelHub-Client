type Props = {
  params : {
    limit: number;
    page: number;
    sortBy: string;
    order: string;
    search: string;
},
  setParams : React.Dispatch<React.SetStateAction<{
    limit: number;
    page: number;
    sortBy: string;
    order: string;
    search: string;
}>>
  totalPage : number

}

export default function Pagination({params,setParams,totalPage} : Props) {
  return (
    <div className="w-full">
        <div className="w-full justify-center items-end flex mb-4 mt-8">
            <div className="mx-4  flex flex-row justify-between mt-4 max-w-96 gap-4">
                { params.page === 1 ?  <button  
                className="text-lg bg-white px-2 py-1 text-gray-400 rounded-lg">
                    Prec</button>: 
                <button onClick={() => setParams((prec) => ({ ...prec , page : params.page - 1})  )} 
                className="text-lg bg-black px-2 py-1 text-white rounded-lg">
                    Prec</button>  }
                    {
                            Array.from({ length:totalPage  }, (_, i) => i + 1).map((i : number) => (
                                    <button key={i} onClick={() => setParams((prec) => ({ ...prec , page : i})  ) } className={` p-4 rounded-lg cursor-pointer shadow-md ${i === params.page ? "bg-(--color-primary) text-white"  : "bg-white  text-black"}  `}>  {i} </button>
                            ))
                        }
                
                { params.page === totalPage ?  
                <button  className="text-lg bg-gray-200 px-2  text-white rounded-lg">
                    Suiv</button>: 
                <button onClick={() =>setParams((prec) => ({ ...prec , page : params.page + 1})  )} 
                className="text-lg bg-(--color-primary) px-2 text-white rounded-lg">
                    Suiv</button> }        
            </div>
        </div>
    </div>
  )
}
