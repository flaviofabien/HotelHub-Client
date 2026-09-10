import axios from "axios"
import { IP } from "../../Constant/Constant"


export const AddRooms = async (data : FormData,token : string) => {

    const response = axios.post(IP + "/rooms/",data,{
        headers : {
            Authorization : `bearer ${token}`
        }
    })
    return response
}

export const GetAllRooms = async (token : string,    page : number | undefined,limit : number |undefined , search : string | undefined , order : string | undefined ,sortBy : string | undefined
) => {
    const response = axios.get(IP + "/rooms/",{
        params : { page,limit,search,order,sortBy },
        headers : {
            Authorization : `bearer ${token}`
        },

    })
    return (await response).data
}

export const DeleteRooms = async (id : number ,token : string) => {

    const response = axios.delete(IP + "/room/" + id ,{
        headers : {
            Authorization : `bearer ${token}`
        }
    })
    return (await response).data.data
}

export const EditRooms = async (data : FormData,id : number ,token : string) => {

    const response = axios.put(IP + "/room/" + id ,data,{
        headers : {
            Authorization : `bearer ${token}`
        }
    })
    return (await response).data.data
}
export const GetOneRooms = async (id : number ,token : string) => {

    const response = axios.get(IP + "/room/" + id ,{
        headers : {
            Authorization : `bearer ${token}`
        }
    })
    return (await response).data.data
}
