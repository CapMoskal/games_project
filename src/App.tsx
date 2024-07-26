import { Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { Favorite } from './pages/Favorites'
import { Later } from './pages/Wishlist'
import { NotFound } from './pages/NotFound'
import { Layout } from './components/Layout'

import { MovieDetail } from './pages/GameDetail'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="favorites" element={<Favorite />} />
          <Route path="favorites/:id" element={<MovieDetail />} />
          <Route path="later" element={<Later />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
