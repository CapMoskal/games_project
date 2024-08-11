import { MetacriticRaiting } from '../../Games/MetacriticRaiting'
import { TExtraInfo } from '../GameContentLeft'
import { ExtraInfoAge } from './ExtraInfoAge'
import { MainExtraInfo } from './MainExtraInfo'

interface Props {
  title: string
  render: TExtraInfo
}

export const ExtraInfoRender = ({ title, render }: Props) => {
  if (title === 'Metascore') {
    return <MetacriticRaiting raiting={render as number} />
  } else if (title === 'Platforms') {
    return <></>
  } else if (title === 'Released date') {
    return <p>{render as string}</p>
  } else if (title === 'Age Raiting') {
    return <ExtraInfoAge render={render} />
  } else {
    return <MainExtraInfo render={render} />
  }
}
