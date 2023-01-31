import { useRef, useEffect, useState } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import Letters from './Letters'
import '../scss/contact.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const form = useRef()

  const contact_id = useRef(Math.floor(Math.random() * 100000 | 0))

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const onSubmit = (e) => {  // send email
    e.preventDefault()
    console.log('form.current', form.current)

    emailjs
      .sendForm('contact_service', 'contact_form_template', form.current, 'HDFqgufvi4tab7QrJ')
      .then(
        () => {
          window.location.reload(false)
          window.stop()
        },
        () => {
          alert('Message failed, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">

          <h1 className="snazzy_title">
            <Letters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          <div className="bullets">
            <p>&#128009; &#160; Software is cool!</p>
            <p>&#128295; &#160; Let's get to work!</p>
            <p>&#128293; &#160; Andrew Bartson</p>
            <p>&#128011; &#160; Craig Alaska 99921</p>
            <p>&#160;&#9993; &#160; &#160;<span className="e-mail" data-user="nostrabpwerdna" data-website="moc.liamg"></span></p>
            <p className='cell_wrap'>&#128640; &#160; &#160;<span className="cell" data-user="384.707" data-website="7785."></span></p>
          </div>

          <div className="code_box_wrapper">
            <pre className="code_box">
              <div className="line">
                <span className="if">if </span>
                <span className="symbol">(</span>
                <span className="string"> share_my_goals </span>
                <span className="symbol"> && </span>
                <span className="string"> want_to_be_happy </span>
                <span className="symbol">) </span>
              </div>
              <div className="line">
                <span className="string">&#123;</span >
              </div>
              <div className="line">
                <span className="bool">  contact</span>
                <span className="symbol">.</span>
                <span className="symbol">me</span>
                <span className="red">()</span>
              </div>
              <div className="line">
                <span className="symbol">&#125;</span>
              </div>
              <div className="line">
                <span className="if">if </span>
                <span className="symbol">(</span>
                <span className="red"> !</span>
                <span className="string">share_my_goals </span>
                <span className="symbol"> || </span>
                <span className="string"> want_something_else</span>
                <span className="symbol"> ) </span>
              </div>
              <div className="line">
                <span className="string">&#123;</span >
              </div>
              <div className="line">
                <span className="string">   everything_fine</span>
                <span className="symbol"> = </span>
                <span className="bool">true</span>
              </div>
              <div className="line">
                <span className="string">   problems </span>
                <span className="symbol"> = </span>
                <span className="bool"> [ ]</span>
              </div>
              <div className="line">
                <span className="symbol">&#125;</span>
              </div>
            </pre>
          </div>

        </div>

        <div className="form-zone">
          <div className="totally">&nbsp;</div>
          <div className="contact-form">
            <div>&nbsp;</div>

            <form ref={form} onSubmit={onSubmit}>
              <input type="hidden" name="contact_id" value={contact_id.current} />
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    type="text"
                    name="user_name"
                    required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    required />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="user_subject"
                    required />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="user_message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>

          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
