import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Letters from './Letters'
import '../scss/projects.scss'
import screenshot from '../assets/images/trip_summary.jpg'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const goToLink = (url) => {
    const newTab = window.open(url, '_blank', 'noopener,noreferrer')
    if (newTab) newTab.opener = null
  }

  return (
    <div className='container projects-page'>
      <div className="content-wrapper">

        <div className="first_content">

          <h1 className="snazzy_title project_title">
            <Letters
              letterClass={letterClass}
              strArray={['B', 'e', 's', 't', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't']}
              idx={15}
            />
          </h1>

          <div className="project_intro">
            <h3>
              <span className="cool_font_1">SuperTrucker</span>
            </h3>
            <p className="sick_font">Trip-planning app with weather forecasts</p>
            <ol className="sick_list">
              <li>&#160;Enter starting point and destination.</li>
              <li>&#160;Get back a route with schedule and expected weather.</li>
            </ol>
            <div className="cool_font_2">Tech Stack</div>
            <table className="stack_table">
              <tbody>
                <tr>
                  <td>Containers</td>
                  <td>Docker <span className="slash">/</span> Kubernetes</td>
                </tr>
                <tr>
                  <td>Front End</td>
                  <td>Angular <span className="slash">/</span> Google Maps</td>
                </tr>
                <tr>
                  <td>Back End</td>
                  <td>Node <span className="slash">/</span> Express <span className="slash">/</span> MongoDb</td>
                </tr>
                <tr>
                  <td>External APIs &#160;&#160;&#160;</td>
                  <td>
                    Google Directions <span className="slash">/ </span>
                    <nobr>US Weather Service</nobr> <span className="slash">/ </span>
                    <nobr>Open Weather Map</nobr>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        <div className="external-links">
          <input type="submit"
            onClick={() => goToLink('https://supertrucker.app')}
            className="flat-button live_btn" value="OPEN LIVE SITE" />
          <input type="submit"
            onClick={() => goToLink('https://github.com/AndrewPBartson/super-trucker#readme')}
            className="flat-button github_btn" value="OPEN GITHUB" />
        </div>

        <div className="kframe">
          <img src={screenshot} alt="Screenshot of Super Trucker trip planning application" className="trip_summary" />
        </div>
        <div className="iframe_wrapper" >
          <div>
            <iframe src="https://supertrucker.app" title="SuperTrucker" className="live_project"></iframe>
          </div>
        </div>
        <Loader type="pacman" />
      </div>
    </div>
  )
}

export default Projects
