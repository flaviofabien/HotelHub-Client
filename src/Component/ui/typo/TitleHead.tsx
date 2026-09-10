
type Props = {
    title : string
}

export default function TitleHead({title}: Props) {
  return (
    <h2 className="text-5xl font-extrabold">{title}</h2>
  )
}