import { useState, type ReactNode } from "react"
import { ContextProvider } from "./ContextGlobal"
import type { AlertType, UserType } from "../Typescript/Context"

type Props = {
  children : ReactNode
}

export default function ContextGlobal({children}: Props) {
  const [alert,setAlertState] = useState(() => JSON.parse(localStorage.getItem('alert')!) || {})
  const [user, setUserState] = useState<UserType>(() => {
    const userData = localStorage.getItem("user");
    const expiration = localStorage.getItem("userExpiration");

    if (userData && expiration && Date.now() < Number(expiration)) {
      return JSON.parse(userData);
    }

    localStorage.removeItem("user");
    localStorage.removeItem("userExpiration");

    return {};
  });
  
  const setAlert = (newData : AlertType) => {
    setAlertState(newData)
    localStorage.setItem("alert" ,  JSON.stringify(newData))
  }

  
  const setUser = (newData: UserType) => {
    setUserState(newData);
    const expiration = Date.now() + 12 * 60 * 60 * 1000;
    localStorage.setItem("userExpiration",expiration.toString());
    localStorage.setItem("user",JSON.stringify(newData));
  };

  const valueAlert = {
    alert , setAlert , user , setUser
  }

  return (
    <ContextProvider.Provider value={valueAlert}> {children} </ContextProvider.Provider>
  )
}