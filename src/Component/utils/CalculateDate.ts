import type { Dispatch, SetStateAction } from "react"

export const CalculateDate = (watchDateEnter : string ,watchDateOut : string,setNumberDate : Dispatch<SetStateAction<undefined | number >> )  => {
    if (watchDateEnter && watchDateOut) {
        const dateEnterNew = new Date(watchDateEnter)
        const dateOutNew = new Date(watchDateOut)
        const dateEnterNewYears = dateEnterNew.getFullYear() 
        const dateOutNewYears = dateOutNew.getFullYear() 
        const dateEnterNewMounth = dateEnterNew.getMonth() 
        const dateOutNewMounth = dateOutNew.getMonth() 

        if (dateOutNewYears === dateEnterNewYears ) {
            if (dateEnterNewMounth === dateOutNewMounth) {
                const numberDateCalculate =   dateOutNew.getDate() - dateEnterNew.getDate() 
                setNumberDate(numberDateCalculate)
            }else {
                if(dateEnterNew.getDate() < dateOutNew.getDate()){
                    
                    const dateNewMonthCalculate = dateOutNewMounth - dateEnterNewMounth 
                    const numberDateCalculate =   dateOutNew.getDate() - dateEnterNew.getDate() + 30*dateNewMonthCalculate
                    setNumberDate(numberDateCalculate)
                }else{
                    const reste = ( (dateOutNewMounth - dateEnterNewMounth)  )* 30 -  dateEnterNew.getDate() ;
                    const numberDateCalculate = reste + dateOutNew.getDate()  
                    setNumberDate(numberDateCalculate)
                }
            }
        }
        
    }

}