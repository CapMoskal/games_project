import { Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { Favorite } from './pages/Favorites'
import { Wishlist } from './pages/Wishlist'
import { NotFound } from './pages/NotFound'
import { Layout } from './components/Layout'

import { GameDetail } from './pages/GameDetail'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="favorites" element={<Favorite />} />
          <Route path="favorites/:id" element={<GameDetail />} />
          <Route path="later" element={<Wishlist />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
