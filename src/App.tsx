import { Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout'

import { Library } from './pages/Main/Library'
import { Wishlist } from './pages/Main/Wishlist'
import { NotFound } from './pages/NotFound'
import { GameDetail } from './pages/GameDetail'
import { AllGamesList } from './pages/Main/AllGamesList'
import { LastMonthGames } from './pages/NewReleases/LastMonthGames'
import { LastWeekGames } from './pages/NewReleases/LastWeekGames'
import { NextWeekGames } from './pages/NewReleases/NextWeekGames'
import { FaqPage } from './pages/ExtraPages/FaqPage'
import { JokeF } from './pages/ExtraPages/JokeF'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllGamesList />} />
          <Route path="/:id" element={<GameDetail />} />

          <Route path="lastMonth" element={<LastMonthGames />} />
          <Route path="lastWeek" element={<LastWeekGames />} />
          <Route path="nextWeek" element={<NextWeekGames />} />

          <Route path="wishlist" element={<Wishlist />} />
          <Route path="library" element={<Library />} />

          <Route path="faq" element={<FaqPage />} />
          <Route path="joke" element={<JokeF />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
