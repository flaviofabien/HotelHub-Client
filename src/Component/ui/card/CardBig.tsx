
type Props = {
    title : string
    image : string
    description : string
}

export default function CardBig({image,description,title}: Props) {
  return (
    <div className="flex mt-8 gap-8 w-full flex-col lg:flex-row items-center">
        <img src={image} className="w-100 h-full object-cover" alt="" />
        <div className=" text-start">
            <h4 className='text-2xl font-bold'> {title} </h4>
            <p className=' mt-2 mb-4 text-gray-500'> {description} </p>
        </div>
    </div>
  )
}