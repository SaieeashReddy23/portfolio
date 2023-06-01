import { RxHamburgerMenu } from 'react-icons/rx'
import { MdClose } from 'react-icons/md'
import { useState } from 'react'
import john from '../assets/images/john.jpg'

const HomePage = () => {
  const [sidebar, setSidebar] = useState(false)

  return (
    <div className="home-page-conainer">
      <div className="navbar-container">
        <p>Logo</p>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <span className="ham-icon" onClick={() => setSidebar(true)}>
          <RxHamburgerMenu />
        </span>
      </div>

      <div className={sidebar ? 'sidebar-container show' : 'sidebar-container'}>
        <span className="close-sidebar" onClick={() => setSidebar(false)}>
          <MdClose />
        </span>
        <ul className="sidebar-links">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero">
            <div className="hero-text">
              <h1>Hi, I'm John Doe</h1>
              <h1>Hi, I'm John Doe</h1>
              <h1>Hi, I'm John Doe</h1>
              <h1>Hi, I'm John Doe</h1>
            </div>
            <div className="img-container">
              <img src={john} alt="john image" className="hero-img" />
            </div>
          </div>
          <div className="hero-skills-container">
            <ul className="hero-skills">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>

      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>

      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>

      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>

      <h1>Hello world</h1>
      <h1>Hello world</h1>
    </div>
  )
}
export default HomePage
