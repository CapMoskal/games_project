import { NavLink } from 'react-router-dom'
import { NavBar } from './NavBar'
import { GameSearch } from './SearchBar/GameSearch'

export const Header = () => {
  return (
    <header className="header">
      <NavLink to="" className="logo">
        GamesWhat?
      </NavLink>
      <GameSearch />
      <NavBar />
    </header>
  )
}
