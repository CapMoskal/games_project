import { useState } from 'react'

interface Props {
  description: string
}

export const GameAbout = ({ description }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpand = () => setIsExpanded(!isExpanded)

  const maxLength = 450

  const renderDescription = () => {
    if (isExpanded) {
      return description
    }
    return description.slice(0, maxLength) + '...'
  }

  return (
    <div className="game-page--about">
      <h3>About</h3>
      <div
        className="game-page--about-text"
        dangerouslySetInnerHTML={{ __html: renderDescription() }}
      />
      {description.length > maxLength && (
        <button
          className="game-page--about-btn"
          onClick={toggleExpand}
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  )
}
