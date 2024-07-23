import { Movie } from '../types'

import { useMoviesList } from '../hooks/useMoviesList'

import 'antd/dist/reset.css'
import './movieList.css'
import { Carousel } from 'antd'
import { PROXY_URL } from '../config'
// import { Card, List } from 'antd'

export const MovieList: React.FC = () => {
  const { error, status, list } = useMoviesList()

  // console.log(list)
  // console.log(error)
  // console.log(status)
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  }
  return (
    <div>
      {/* {status === 'loading' && <p>Loading...</p>}
      {error && <p>Error: {error}</p>} */}

      {/* <Carousel
        arrows
        infinite={true}
        autoplay={true}
        autoplaySpeed={3500}
      >
        {list.map((item) => (
          <div key={item.id}>
            <h1
              style={{
                margin: 0,
                height: '160px',
                color: '#fff',
                lineHeight: '160px',
                textAlign: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/w200${item.poster_path})`,
              }}
            >
              {item.title}
            </h1>
          </div>
        ))}
      </Carousel> */}

      {/* <List
        grid={{ gutter: 16, column: 6 }}
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>Card content</Card>
          </List.Item>
        )}
      /> */}

      {/* <div className="mpopular-movies-container">
        <h1>Popular movies</h1>
        {status === 'received' && (
          <div className="movie-list-container">
            {list.map((movie: Movie) => (
              <div key={movie.id} className="movie-item">
                {
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                }
                <h3>{movie.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div> */}
    </div>
  )
}
