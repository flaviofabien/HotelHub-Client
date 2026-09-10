type Props = {
     description : string
    title : string
    image : string
}

export default function CardNormal({image,description,title}: Props) {
  return (
    <div className="w-100 lg:w-150 ">
        <img src={image} className="w-150h-96 object-cover" alt="" />
        <div className="text-start mt-6">
            <h3 className=" text-xl font-black">  {title} </h3>
            <p className=" text-sm text-slate-500  mt-4"> {description} </p>
        </div>
    </div>
  )
}