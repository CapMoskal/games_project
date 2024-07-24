// import { MovieList } from '../components/MovieList'
import { RecommendedMovies } from '../components/RecommendedMovies'

import { useMoviesList } from '../hooks/useMoviesList'

export const HomePage = () => {
  const { error, status, list } = useMoviesList()

  return (
    <div className="homepage-con">
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <RecommendedMovies list={list} />
      {/* <MovieList /> */}
    </div>
  )
}
