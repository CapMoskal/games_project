import { useState, useRef } from 'react'

import { Game } from '../../types'

import { handleClick } from './handleClick'
import { useSearchGames } from './useSearchGames'
import { SuggestionBlock } from './SuggestionBlock'

export const GameSearch = () => {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<Game[]>([])
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const searchContainerRef = useRef<HTMLDivElement>(null)

  handleClick(searchContainerRef, setIsDropdownVisible)

  useSearchGames(query, setSuggestions, setIsDropdownVisible)

  return (
    <div className="search-container" ref={searchContainerRef}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for games..."
      />
      {isDropdownVisible && suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((game) => (
            <SuggestionBlock
              setIsDropdownVisible={setIsDropdownVisible}
              setQuery={setQuery}
              background_image={game.background_image}
              game_id={game.id}
              name={game.name}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
