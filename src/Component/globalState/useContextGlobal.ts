import { useContext } from "react"
import { ContextProvider } from "./ContextGlobal"

export const useContextGlobal = () => useContext(ContextProvider)