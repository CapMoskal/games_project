import { Movie } from '../types'

import 'antd/dist/reset.css'
import './movieList.css'
import { Carousel } from 'antd'
import { PROXY_URL } from '../config'
// import { Card, List } from 'antd'

export const MovieList: React.FC = () => {
  // console.log(list)
  // console.log(error)
  // console.log(status)
  // const contentStyle: React.CSSProperties = {
  //   margin: 0,
  //   height: '160px',
  //   color: '#fff',
  //   lineHeight: '160px',
  //   textAlign: 'center',
  //   background: '#364d79',
  // }
  return (
    <div className="popular-con">
      <h1>Popular movies</h1>

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
