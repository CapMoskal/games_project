import { NavLink } from 'react-router-dom'

interface Props {
  setIsDropdownVisible: React.Dispatch<React.SetStateAction<boolean>>
  setQuery: React.Dispatch<React.SetStateAction<string>>
  background_image: string
  game_id: number
  name: string
}

export const SuggestionBlock = ({
  setIsDropdownVisible,
  setQuery,
  background_image,
  game_id,
  name,
}: Props) => (
  <li
    className="suggestions-list--item"
    onClick={() => {
      setIsDropdownVisible(false)
      setQuery('')
    }}
  >
    <img
      src={background_image}
      className="suggestions-list--item-img"
      alt=""
    />
    <NavLink to={`/${game_id}`}>{name}</NavLink>
  </li>
)
