import {
  DatabaseFilled,
  GiftFilled,
  InboxOutlined,
} from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

const main = {
  title: 'Main',
  selects: [
    {
      to: 'allGames',
      icon: <DatabaseFilled className="icon-con" />,
      selectTitle: 'All games',
    },
    {
      to: 'wishlist',
      icon: <GiftFilled className="icon-con" />,
      selectTitle: 'Wishlist',
    },
    {
      to: 'library',
      icon: <InboxOutlined className="icon-con" />,
      selectTitle: 'My library',
    },
  ],
}

const setStyle = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'sidebar-select-item active-link' : 'sidebar-select-item'

export const SidebarSelect = (select: string) => {
  return (
    <div className="sidebar-select">
      <h3 className="sidebar-select--title">Main</h3>
      <NavLink className={setStyle} to="allGames">
        <DatabaseFilled className="icon-con" />
        All Games
      </NavLink>
      <NavLink className={setStyle} to="wishlist">
        <GiftFilled className="icon-con" />
        Wishlist
      </NavLink>
      <NavLink className={setStyle} to="library">
        <InboxOutlined className="icon-con" />
        My library
      </NavLink>
    </div>
  )
}

// что должна принимать функция ?
// нужно ли хранить здесь или передавать сюда ?
