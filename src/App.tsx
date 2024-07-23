import { Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { Favorite } from './pages/Favorites'
import { Wanted } from './pages/Wanted'
import { Later } from './pages/Later'
import { NotFound } from './pages/NotFound'
import { Layout } from './components/Layout'

import { MovieDetail } from './pages/MovieDetail'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="favorites" element={<Favorite />} />
          <Route path="favorites/:id" element={<MovieDetail />} />
          <Route path="wanted" element={<Wanted />} />
          <Route path="later" element={<Later />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
