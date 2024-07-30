import { Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { Favorite } from './pages/Favorites'
import { Wishlist } from './pages/Wishlist'
import { NotFound } from './pages/NotFound'
import { GameDetail } from './pages/GameDetail'

import { Layout } from './components/Layout'
import { TrendGames } from './components/TrendGames'
import { Library } from './components/Library'
import { AllGamesList } from './components/AllGamesList'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TrendGames />} />
          <Route path="allGames" element={<AllGamesList />} />
          <Route path="allGames/:id" element={<GameDetail />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="library" element={<Library />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
