export  type UserType = {
    id ?: number
    fullName: string
    email: string
    password: string
    confirmPassword: string
    role ?: "admin" | "superAdmin" | "client" 
}

export type AddUserType = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role?: string;
};