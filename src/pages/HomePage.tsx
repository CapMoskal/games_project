// import { MovieList } from '../components/MovieList'

import { useMoviesList } from '../hooks/useMoviesList'

export const HomePage = () => {
  const { error, status, list } = useMoviesList()
  console.log(error)
  return (
    <div className="homepage-con">
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {/* <MovieList /> */}
    </div>
  )
}
