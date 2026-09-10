import type { UserType } from "./Context"
import type { RoomType } from "./RoomsType"

export type BookingFormType = {
  dateEnter: string
  dateOut: string
  numberPersonne: number
}

export type BookingType = BookingFormType & {
  id ?: number 
  idRoom: number
  idUser: number
  priceTotal: number
  numberNight: number
  confirm: string
  Room?:RoomType
  User?:UserType
}