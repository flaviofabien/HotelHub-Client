export type AlertType = {
    status : boolean,
    title : string,
    description : string
  }

export type UserType = {
    fullName : string,
    email : string ,
    token : string,
    id ?: number,
    role ?: "admin" | "superAdmin" | "client" | undefined
  }
