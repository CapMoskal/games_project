import { platformIcons } from '../../../../icons/getPlatformIcon'
import { TStores } from '../../../../store/detail/detail-types'

interface Props {
  stores: TStores[]
}

export const StoresRender = ({ stores }: Props) => {
  return (
    <div className="game-stores-con">
      <h3 className="game-stores-con--title">Where to buy</h3>
      <div className="game-stores">
        {stores?.map((store) => {
          // сделать кнопкой див, в диве будет название магазина и
          // иконка
          // сделать отдельный компонент
          const iconSrc = platformIcons[store.store.name]
          return (
            <>
              <a
                className="game-store-btn"
                key={store.id}
                href={`https://${store.store.domain}`}
                target="_blank"
              >
                {store.store.name}
              </a>
              <img
                src={iconSrc}
                style={{
                  width: 24,
                  height: 24,
                  marginRight: 8,
                }}
              />
            </>
          )
        })}
      </div>
    </div>
  )
}
