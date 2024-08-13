import { TStores } from '../../../../store/detail/detail-types'
import { StoreBtn } from './StoreBtn'

interface Props {
  stores: TStores[]
}

export const StoresRender = ({ stores }: Props) => {
  return (
    <div className="game-stores-con">
      <h3 className="game-stores-con--title">Where to buy</h3>
      <div className="game-stores">
        {stores?.map((store) => (
          <StoreBtn
            name={store.store.name}
            domain={store.store.domain}
          />
        ))}
      </div>
    </div>
  )
}
