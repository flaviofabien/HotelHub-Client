import type { RoomType } from "../../../../Component/Typescript/RoomsType";
import ErrorServer from "../../../../Component/ui/error/ErrorServer";
import Line from "../../../../Component/ui/Line";

type Props = {
  data : RoomType
  image : Blob
  fileUrl ?: string 
  errorServer : string
}

export default function StepFourForm({data,image,errorServer,fileUrl} : Props) { 
  return (
    <>
      <div className="text-lg p-8">
        {
          errorServer && <ErrorServer text={errorServer} />
        }
        <img src={  fileUrl ? fileUrl : URL.createObjectURL(image)} className="w-100 m-auto h-full mt-4" alt="" />
        <div className="flex gap-8 justify-between mt-8">
          <div className="">
            <p>  Name : {data.name} </p>
            <p> Type : {data.type} </p>
            <p> Number : {data.number} </p>
          </div>
          <div className="">
            <p> Price : {data.price} </p>
            <p> Capacity : {data.capacity} </p>
            <p> number of bed : {String(data.nbBed) } </p>
          </div>
          <div>
            <p> Wi-Fi : {String(data.wifi)} </p>
            <p> TV : { String(data.tv) } </p>
            <p> Air conditionning : { String(data.airConditioning) } </p>
            <p> Avaible : { String(data.avaible) } </p>
          </div>

        </div>
        <Line />
      </div>
    </>
  )
}
