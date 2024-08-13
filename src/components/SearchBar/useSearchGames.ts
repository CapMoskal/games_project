import { useEffect } from 'react'
import { Game } from '../../types'
import { API_KEY } from '../../config'

export const useSearchGames = (
  debounceTimeout: NodeJS.Timeout | null,
  query: string,
  setSuggestions: React.Dispatch<React.SetStateAction<Game[]>>,
  setIsDropdownVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setDebounceTimeout: React.Dispatch<
    React.SetStateAction<NodeJS.Timeout | null>
  >
): void => {
  useEffect(() => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout)
    }

    if (query.length > 2) {
      const timeoutId = setTimeout(() => {
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
      }, 500)

      setDebounceTimeout(timeoutId)
    } else {
      setSuggestions([])
      setIsDropdownVisible(false)
    }

    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout)
      }
    }
  }, [query])
}
