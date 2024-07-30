import { NavLink } from 'react-router-dom'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <header className="header">
      <NavLink to="" className="logo">
        GamesWhat?
      </NavLink>
      <form action="">
        <input type="text" />
        <button>search</button>
      </form>
      <NavBar />
    </header>
  )
}
