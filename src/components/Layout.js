import { Outlet } from 'react-router-dom'
import '../scss/layout.scss'
import Navbar from './Navbar'

const Layout = ({ page, setPage }) => {
  return (
    <div className="App">
      <Navbar page={page} setPage={setPage} />
      <div className="page">
        <span className="tags top-tags">
          <span className="outer-tag">&lt;html&gt;</span>
          <br />
          <span className="inner-tag">&lt;body&gt;</span>
        </span>
        <Outlet />
        <span className="tags bottom-tags">
          <span className="inner-tag">&lt;/body&gt;</span>
          <br />
          <span className="outer-tag">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
