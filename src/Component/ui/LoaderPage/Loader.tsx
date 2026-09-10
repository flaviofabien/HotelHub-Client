import { BiLoader } from "react-icons/bi";


export default function LoaderPage() {
  return (
    <div className="w-full h-screen fixed flex justify-center items-center">
      <BiLoader className="animate-spin text-(--color-primary)" size={300}  />
    </div>
  )
}