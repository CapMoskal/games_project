import { NavLink } from 'react-router-dom'
import { ExtraIcon } from './headerExtraInfo/ExtraIcon'
import { GameSearch } from './SearchBar/GameSearch'

export const Header = () => {
  return (
    <header className="header">
      <NavLink to="" className="logo">
        GamesWhat?
      </NavLink>
      <GameSearch />
      <ExtraIcon />
    </header>
  )
}
