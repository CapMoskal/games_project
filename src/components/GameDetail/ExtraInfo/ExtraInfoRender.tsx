import {
  TDevelopers,
  TEsrbRating,
  TPublishers,
  TTags,
} from '../../../store/detail/detail-types'
import { Genre, Platform } from '../../../types'
import { TExtraInfo } from '../GameContentLeft'

import { MetacriticRaiting } from '../../Games/MetacriticRaiting'
import { ExtraInfoAge } from './ExtraInfoAge'
import { MainExtraInfo } from './MainExtraInfo'
import { PlatformsExtraInfo } from './PlatformsExtraInfo'

interface Props {
  title: string
  render: TExtraInfo
}

type TMainExtraInfo =
  | Genre[]
  | TDevelopers[]
  | TTags[]
  | TPublishers[]

export const ExtraInfoRender = ({ title, render }: Props) => {
  if (title === 'Metascore') {
    return <MetacriticRaiting raiting={render as number} />
  } else if (title === 'Platforms') {
    return <PlatformsExtraInfo platforms={render as Platform[]} />
  } else if (title === 'Released date') {
    return <p className="game-page--extra-text">{render as string}</p>
  } else if (title === 'Age Raiting') {
    return <ExtraInfoAge render={render as TEsrbRating} />
  } else {
    return <MainExtraInfo render={render as TMainExtraInfo} />
  }
}
