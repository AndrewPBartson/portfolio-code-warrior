import { useEffect, useState } from 'react'
import { Paper } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

import Loader from 'react-loaders'
import Letters from './Letters'
import { slideItems } from './slides'
import '../scss/about.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <Letters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="Im_the_greatest">
            <p className="sub_title brighter">
              I'm a Full Stack Web Developer
            </p>
            <p className="sub_title">
              I want to join a team in which:
            </p>
            <ul className="topic_list">
              <li className="idea">
                <p>Excellence is the norm</p>
              </li>
              <li className="idea">
                <p>Soft skills are valued</p>
              </li>
            </ul>
            <div className="favs_box_wrapper">
              <div className="favs_box">
                <p className="favs_title">
                  Favorite technologies
                </p>
                <div className="favs_table">
                  <table>
                    <thead>
                      <th width="60"></th>
                      <th width="73"></th>
                      <th width="77"></th>
                      <th width="96"></th>
                      <th width="65"></th>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='BrightCyan'>React</td>
                        <td className='ElectricLime'>Redux</td>
                        <td className='BrightCyan'>TypeScript</td>
                        <td className='MintGreen'>&#160;Kubernetes</td>
                        <td className='BrightYellow'>Docker</td>
                      </tr>
                      <tr>
                        <td className='BrightYellow'>Node</td>
                        <td className='MintGreen'>Express</td>
                        <td className='LightSkyBlue'>Angular</td>
                        <td className='ElectricLime'>&#160;MongoDB</td>
                        <td className='LightOlive'>Jest</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <p className="sub_title">
              I'm familiar with the overall functioning of the web:
            </p>
            <ul className="topic_list">
              <li className="idea">
                <p>Containers / Microservices</p>
              </li>
              <li className="idea">
                <p>HTTP request response cycle</p>
              </li>
              <li className="idea">
                <p>Promises / Asynchronous functions</p>
              </li>
              <li className="idea">
                <p>JSON web tokens / Authorization headers</p>
              </li>
            </ul>
          </div>
        </div>


        <div className="slide-zone">
          <div>&#160;</div>

          <div className="slider">
            <Carousel>
              {
                slideItems.map((item, i) => <Item key={i} item={item} />)
              }
            </Carousel>
          </div>

          <div>&#160;</div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

function Item(props) {
  return (
    <Paper>
      <img
        className='slideImg'
        width={400}
        height={300}
        title={props.item.caption}
        alt={props.item.name}
        src={props.item.img}
      />
    </Paper>
  )
}

export default About
