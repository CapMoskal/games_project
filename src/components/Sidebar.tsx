import {
  DatabaseFilled,
  FireFilled,
  GiftFilled,
  InboxOutlined,
} from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

const setStyle = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'sidebar-select-item active-link' : 'sidebar-select-item'

export const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* сделать компонент, который будет 
      отрисовывать каждый sidebar-selec */}
      <div className="sidebar-select">
        <h3 className="sidebar-select--title">Main</h3>
        <NavLink className={setStyle} to="/">
          <FireFilled className="icon-con" />
          Trending
        </NavLink>
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
        <h3 className="sidebar-select--title">Genre</h3>
        <NavLink className={setStyle} to="library">
          <InboxOutlined className="icon-con" />
          Library
        </NavLink>
        <NavLink className={setStyle} to="library">
          <InboxOutlined className="icon-con" />
          Library
        </NavLink>
        <NavLink className={setStyle} to="library">
          <InboxOutlined className="icon-con" />
          Library
        </NavLink>
      </div>
    </div>
  )
}
