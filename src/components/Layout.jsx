import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import AmbientBackground from './AmbientBackground'

function Layout() {
  return (
    <div className="app">
      <AmbientBackground />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
