import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
