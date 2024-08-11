import { TEsrbRating } from '../../../store/detail/detail-types'

interface Props {
  render: TEsrbRating
}

export const ExtraInfoAge = ({ render }: Props) => {
  return <p>{render.name}</p>
}
