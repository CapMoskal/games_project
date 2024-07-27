import { NavLink } from 'react-router-dom'

const setStyle = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'navbar-item active-link' : 'navbar-item'

export const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink className={setStyle} to="/">
        Home
      </NavLink>
      <NavLink className={setStyle} to="favorites">
        Favorites
      </NavLink>
      <NavLink className={setStyle} to="later">
        Watch Later
      </NavLink>
    </div>
  )
}
