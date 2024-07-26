import { useParams } from 'react-router-dom'

export const GameDetail = () => {
  const { id } = useParams()

  return <div>{id}</div>
}
