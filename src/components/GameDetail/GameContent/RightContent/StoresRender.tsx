import { TStores } from '../../../../store/detail/detail-types'

interface Props {
  stores: TStores[]
}

export const StoresRender = ({ stores }: Props) => {
  return <div className="game-stores-con"></div>
}
