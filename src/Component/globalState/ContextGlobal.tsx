import { createContext } from "react"
import type { AlertType, UserType } from "../Typescript/Context"

type ContextToastType = {
  alert : AlertType
  setAlert : (alert : AlertType) => void
  user : UserType
  setUser : (alert : UserType) => void
}

export const ContextProvider = createContext<ContextToastType>({
  alert : {
    status : false,
    title : "" ,
    description : ""
  },
  setAlert : () => {},
  user : {
    fullName : "",
    email : "" ,
    token : "",
    id : undefined,
    role : undefined
  },
  setUser : () => {}
}) 


