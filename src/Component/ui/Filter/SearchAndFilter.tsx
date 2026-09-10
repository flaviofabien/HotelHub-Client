import { BiSearch, BiSolidArrowFromTop, BiSolidArrowToTop } from "react-icons/bi"

type Props = {
   params : {
    limit: number;
    page: number;
    sortBy: string;
    order: string;
    search: string;
   }
  setParams : React.Dispatch<React.SetStateAction<{
      limit: number;
      page: number;
      sortBy: string;
      order: string;
      search: string;
  }>>
  ValueSearch : string
  setValueSearch : (e : string) => void
}

export default function SearchAndFiltter({params,setParams,ValueSearch,setValueSearch}: Props) {
    const toggleOrder = () => {
        const newOrder = params.order === "asc" ? "desc" : "asc";
        setParams((prev)=> ({...prev ,order : newOrder  })  )
    }

    const handleSearch = () => {
        setParams((prev) => ({ ...prev, page: 1, search: ValueSearch })); 
    };
  return (
    <div className=" gap-4 items-start w-full  ">
        <div className="flex">
            <input type="text"  className="border pl-2" onChange={ (e) => setValueSearch(e.target.value) } />
            <button onClick={handleSearch} className="p-2 border hover:bg-(--color-primary) hover:text-white cursor-pointer ">
              <BiSearch size={30} />
            </button>
        </div>
        <div className="flex">
          <button className=' text-slate-500 pt-1  px-4 border' onClick={toggleOrder}>
              Order By {params.order === "desc" ? <BiSolidArrowToTop size={22} className=" inline-block "/> : <BiSolidArrowFromTop size={22} className=" inline-block "/>}
          </button>
          <div>
              <select  className="border px-2 py-1" onChange={ (e) =>  setParams({...params , sortBy : e.target.value}) }>
                <option value="name">Name</option>
                <option value="type">Type</option>
                <option value="price">Price</option>
                <option value="capacity">Capacity</option>
              </select>
          </div>
        </div>
    </div>
  )
}