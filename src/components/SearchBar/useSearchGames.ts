import { useEffect } from 'react'
import { Game } from '../../types'
import { API_KEY } from '../../config'

export const useSearchGames = (
  query: string,
  setSuggestions: React.Dispatch<React.SetStateAction<Game[]>>,
  setIsDropdownVisible: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  useEffect(() => {
    if (query.length > 0) {
      fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&search=${query}`
      )
        .then((response) => response.json())
        .then((data) => {
          setSuggestions(data.results)
          setIsDropdownVisible(true)
        })
        .catch((error) =>
          console.error('Error fetching data:', error)
        )
    } else {
      setIsDropdownVisible(false)
    }
  }, [query])
}
