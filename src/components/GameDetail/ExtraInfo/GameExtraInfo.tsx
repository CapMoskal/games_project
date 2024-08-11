import { TExtraInfoObj } from '../GameContentLeft'
import { ExtraInfoRender } from './ExtraInfoRender'

interface Props {
  extraInfoObj: TExtraInfoObj
}

export const GameExtraInfo = ({ extraInfoObj }: Props) => {
  return (
    <div className="game-page--extra-con">
      {Object.keys(extraInfoObj).map((key) => (
        <div key={key} className="game-page--extra-card">
          <h3 className="game-page--extra-title">{key}</h3>
          <ExtraInfoRender title={key} render={extraInfoObj[key]} />
        </div>
      ))}
    </div>
  )
}
