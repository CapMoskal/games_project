interface metacriticRaitingType {
  raiting: number
}

const greenStyle = {
  borderColor: 'green',
  color: 'green',
}
const yellowStyle = {
  borderColor: 'yellow',
  color: 'yellow',
}
const redStyle = {
  borderColor: 'red',
  color: 'red',
}

export const MetacriticRaiting: React.FC<metacriticRaitingType> = ({
  raiting,
}) => {
  if (!raiting) {
    return <h4></h4>
  } else if (raiting > 74) {
    return (
      <h4 className="metascore" style={greenStyle}>
        {raiting}
      </h4>
    )
  } else if (raiting > 49) {
    return (
      <h4 className="metascore" style={yellowStyle}>
        {raiting}
      </h4>
    )
  } else {
    return (
      <h4 className="metascore" style={redStyle}>
        {raiting}
      </h4>
    )
  }
}
