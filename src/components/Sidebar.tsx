import {
  DatabaseFilled,
  FireFilled,
  GiftFilled,
  InboxOutlined,
  StarFilled,
} from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

const setStyle = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'sidebar-select-item active-link' : 'sidebar-select-item'

export const Sidebar = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const day = today.getDay()

  const myProp = {
    year,
    month,
    day,
  }

  return (
    <div className="sidebar">
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
      <div className="sidebar-select">
        <h3 className="sidebar-select--title">New Releases</h3>
        <NavLink className={setStyle} to="/">
          <FireFilled className="icon-con" />
          Trending
        </NavLink>
        <NavLink className={setStyle} to={'lastMonth'}>
          <StarFilled className="icon-con" />
          Last 30 days
        </NavLink>
      </div>
    </div>
  )
}
