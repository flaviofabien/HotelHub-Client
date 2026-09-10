import axios from "axios"
import type { UserType } from "../Typescript/UsersType"
import { IP } from "../../Constant/Constant"


export const AddUser = async (data : UserType) => {
    const response = axios.post(IP + "/users",data)
    return response
}

export const loginUser = async (data : UserType) => {
    const response = axios.post(IP + "/login/",data)
    return response
}

export const getAllUser = async (token : string) => {
    const response = axios.get(IP + "/users/",{
        headers : {
            Authorization : `bearer ${token}`
        }
    })
    return (await response).data.data
}