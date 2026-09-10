
type Props = {
    title : string
}

export default function TitleSecondHead({title}: Props) {
  return (
    <h2 className="text-2xl font-semibold">{title}</h2>
  )
}