import ButtonPrimary from '../button/ButtonPrimary'

type Props = {
    secondTitle : string
    title : string
    description : string
    nameButton : string
}

export default function CardTextOn({title,description,nameButton,secondTitle}: Props) {
  return (
    <div>
        <h3 className='text-5xl font-extrabold text-(--color-primary)'> {title} </h3>
        <h4 className='text-4xl font-bold'> {secondTitle} </h4>
        <p className='max-w-60 mt-4 mb-4 text-gray-500'> {description} </p>
        <ButtonPrimary label={nameButton} />
    </div>
  )
}