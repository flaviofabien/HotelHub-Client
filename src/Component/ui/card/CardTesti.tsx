
type Props =  {
    description : string
    title : string
    image : string
}

export default function CardTesti({image,description,title}: Props) {
  return (
    <div className=" flex gap-4  ">
        <img src={image} className="w-30 h-30 object-cover" alt="" />
        <div className=" text-center">
            <h3 className="text-(--color-primary) text-xl font-black">  {title} </h3>
            <p className="mt-2 text-sm text-slate-500  max-w-60"> {description} </p>
        </div>
    </div>
  )
}