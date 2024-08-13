import { useEffect } from 'react'

export const handleClick = (
  searchContainerRef: React.RefObject<HTMLDivElement>,
  setIsDropdownVisible: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
}
