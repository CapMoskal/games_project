import { NavLink } from 'react-router-dom'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <header className="header">
      <NavLink to="" className="logo">
        GamesWhat?
      </NavLink>
      <NavBar />
    </header>
  )
}
