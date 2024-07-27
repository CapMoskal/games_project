interface metacriticRaitingType {
  raiting: number
}

const greenStyle = {
  border: '1px solid green',
  color: 'green',
}
const yellowStyle = {
  border: '1px solid yellow',
  color: 'yellow',
}
const redStyle = {
  border: '1px solid red',
  color: 'red',
}

export const MetacriticRaiting: React.FC<metacriticRaitingType> = ({
  raiting,
}) => {
  if (raiting > 79) {
    return <h4 style={greenStyle}>{raiting}</h4>
  } else if (raiting > 49) {
    return <h4 style={yellowStyle}>{raiting}</h4>
  } else {
    return <h4 style={redStyle}>{raiting}</h4>
  }
}
