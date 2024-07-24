import { Carousel } from 'antd'

import { Movie } from '../types'
import { PROXY_URL } from '../config'

export const RecommendedMovies = ({ list }: { list: Movie[] }) => {
  console.log(list)
  return (
    <Carousel
      arrows
      infinite={true}
      autoplay={true}
      autoplaySpeed={3500}
    >
      {list.map((item) => {
        // добавить отправление запроса для получения картинки
        // потом вставить ее в backgroundImage
        // возможно заработает
        return (
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
        )
      })}
    </Carousel>
  )
}
