import {
  TScreenshotsResponse,
  TStores,
} from '../../../../store/detail/detail-types'
import { ScreenshotsRender } from './ScreenshotsRender'
import { StoresRender } from './StoresRender'

interface Props {
  stores: TStores[]
  screenshots: TScreenshotsResponse['results']
}

export const GameContentRight = ({ stores, screenshots }: Props) => {
  return (
    <div className="game-page--content-right">
      <ScreenshotsRender screenshots={screenshots} />
      <StoresRender stores={stores} />
    </div>
  )
}
