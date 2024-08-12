import {
  TScreenshotsResponse,
  TStores,
} from '../../../../store/detail/detail-types'

interface Props {
  stores: TStores[]
  screenshots: TScreenshotsResponse['results']
}

export const GameContentRight = ({ stores, screenshots }: Props) => {
  return (
    <div className="game-page--content-right">
      <div className="screenshots-con">
        {screenshots.map((elem) => (
          <img
            key={elem.id}
            className="screenshots"
            src={`${elem.image}`}
          />
        ))}
      </div>
    </div>
  )
}
