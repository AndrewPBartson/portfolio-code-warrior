import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import {
  faDocker,
  faPython,
  faGitAlt,
  faNodeJs,
  faStackOverflow,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Letters from './Letters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo_A from '../assets/images/logo_A.gif'
import '../scss/home.scss'

const Home = ({ setPage }) => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const iAmArray = ['I', ' ', 'a', 'm']  // 11,12,13,14
  const fNameArray = ['n', 'd', 'r', 'e', 'w', ' ']  // 15,16,17,18,19,20
  const lNameArray = ['B', 'a', 'r', 't', 's', 'o', 'n', ','] // 21,22,23,24,25,26,27,28
  const webArray = ['w', 'e', 'b', ' '] // 29,30,31,32
  const devArray = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
  // 33,34,35,36,37,38,39,40,41,42

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>

            <Letters
              letterClass={letterClass}
              strArray={iAmArray}
              idx={11}
            />
            <br />
            <img src={logo_A} alt="developer" />
            <Letters
              letterClass={letterClass}
              strArray={fNameArray}
              idx={15}
            />
            <span className="word_break">
              <div className="word_break"></div>
            </span>
            <Letters
              letterClass={letterClass}
              strArray={lNameArray}
              idx={21}
            />
            <br />
            <Letters
              letterClass={letterClass}
              strArray={webArray}
              idx={29}
            />
            <span className="word_break">
              <div></div>
            </span>
            <Letters
              letterClass={letterClass}
              strArray={devArray}
              idx={33}
            />
          </h1>
          <h2>
            <span className="breaker">Software Engineer /&nbsp;</span>
            <span className="breaker"> Full Stack Builder</span></h2>
          <Link
            to="./contact"
            className='flat-button'
            onClick={() => setPage("/contact")}
          >
            CONTACT ME
          </Link>
        </div>
        <div className="cube_container">
          <div className="cube_wrapper">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faPython} color="#FFD43B" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faReact} color="#61DBFB" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faDocker} color="#3E6EB2" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faStackOverflow} color="#F47F24" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faNodeJs} color="#3A8338" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
