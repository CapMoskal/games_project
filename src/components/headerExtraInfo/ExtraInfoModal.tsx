import { NavLink } from 'react-router-dom'
import { modalItems } from './modalItems'

export const ExtraInfoModal = () => {
  return (
    <div className="modal">
      {modalItems.map((item) => (
        <NavLink
          key={item.title}
          className="modal--item"
          to={item.to}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  )
}
