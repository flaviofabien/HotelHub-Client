import axios from "axios"
import { IP } from "../../Constant/Constant"

export const getAllState = async (token : string) => {
    const response = axios.get(IP + "/states/",{
        headers : {
            Authorization : `bearer ${token}`
        }
    })
    return (await response).data.data
}

