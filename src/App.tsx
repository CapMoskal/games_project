import { Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Library } from './components/Library'

import { Wishlist } from './pages/Wishlist'
import { NotFound } from './pages/NotFound'
import { GameDetail } from './pages/GameDetail'
import { AllGamesList } from './pages/AllGamesList'
import { LastMonthGames } from './pages/LastMonthGames'
import { LastWeekGames } from './pages/LastWeekGames'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllGamesList />} />
          <Route path="/:id" element={<GameDetail />} />
          <Route path="lastMonth" element={<LastMonthGames />} />
          <Route path="lastWeek" element={<LastWeekGames />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="library" element={<Library />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
