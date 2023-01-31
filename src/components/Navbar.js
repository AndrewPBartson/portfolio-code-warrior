import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import {
  faGear,
  faHome,
  faUser,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import logo_A_gif from '../assets/images/logo_A.gif'
import '../scss/navbar.scss'

const Navbar = ({ page, setPage }) => {

  return (
    <div className="nav-bar">
      <Link
        className="logo"
        to="/"
        onClick={() => setPage("/")}
      >
        <img src={logo_A_gif} alt="Logo" />
        <div className="logo_subtitle">Andrew</div>
      </Link>
      <nav>
        <NavLink
          exact="true"
          className={() => "nav-link home-link" + (page === "/" ? " active" : "")}
          to="/"
          onClick={() => setPage("/")}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={() => "nav-link about-link" + (page === "/about" ? " active" : "")}
          to="/about"
          onClick={() => setPage("/about")}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={() => "nav-link projects-link" + (page === "/projects" ? " active" : "")}
          to="/projects"
          onClick={() => setPage("/projects")}
        >
          <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={() => "nav-link contact-link" + (page === "/contact" ? " active" : "")}
          to="/contact"
          onClick={() => setPage("/contact")}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <a
          href="https://www.linkedin.com/in/andrew-bartson"
          target="_blank"
          rel="noreferrer"
          className="nav-link linked-link"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#4d4d4e"
          />
        </a>
        <a
          href="https://github.com/AndrewPBartson"
          target="_blank"
          rel="noreferrer"
          className="nav-link github-link"
        >
          <FontAwesomeIcon
            icon={faGithub}
            color="#4d4d4e"
          />
        </a>
      </nav>
    </div>
  )
}

export default Navbar
