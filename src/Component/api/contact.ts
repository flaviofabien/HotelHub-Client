import axios from "axios"
import { IP } from "../../Constant/Constant"
import type { ContactType } from "../Typescript/Contact"

export const AddContact = async (data : ContactType) => {
    const response = axios.post(IP + "/contact/",data)
    return response
}