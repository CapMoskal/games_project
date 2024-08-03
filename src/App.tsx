import { Routes, Route } from 'react-router-dom'

import { Wishlist } from './pages/Wishlist'
import { NotFound } from './pages/NotFound'
import { GameDetail } from './pages/GameDetail'

import { Layout } from './components/Layout'
import { TrendGames } from './pages/TrendGames'
import { Library } from './components/Library'
import { AllGamesList } from './pages/AllGamesList'
import { LastMonthGames } from './pages/LastMonthGames'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TrendGames />} />
          <Route path="lastMonth" element={<LastMonthGames />} />
          <Route path="allGames" element={<AllGamesList />} />
          <Route path="allGames/:id" element={<GameDetail />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="library" element={<Library />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
