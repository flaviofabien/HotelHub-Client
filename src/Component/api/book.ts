import axios from "axios"
import { IP } from "../../Constant/Constant"
import type { BookingFormType } from "../Typescript/BookType"


export const AddBookings = async (data : BookingFormType,token : string) => {

    const response = axios.post(IP + "/books/",data,{
        headers : {
            Authorization : `bearer ${token}`
        }
    })
    return response
}

export const GetAllBooks = async (token : string) => {

    const response = axios.get(IP + "/books/",{
        headers : {
            Authorization : `bearer ${token}`
        }
    })
    return (await response).data.data
}

export const DeleteBooks = async (id : number ,token : string) => {

    const response = axios.delete(IP + "/book/" + id ,{
        headers : {
            Authorization : `bearer ${token}`
        }
    })
    return (await response).data.data
}

export const EditBooks = async (data : BookingFormType,id : number ,token : string) => {

    const response = axios.put(IP + "/book/" + id ,data,{
        headers : {
            Authorization : `bearer ${token}`
        }
    })
    return (await response).data.data
}
export const GetOneBooks = async (id : number ,token : string) => {

    const response = axios.get(IP + "/book/" + id ,{
        headers : {
            Authorization : `bearer ${token}`
        }
    })
    return (await response).data.data
}
