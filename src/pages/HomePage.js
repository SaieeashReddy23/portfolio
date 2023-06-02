import { RxHamburgerMenu } from 'react-icons/rx'
import { MdClose } from 'react-icons/md'
import { useEffect, useState } from 'react'
import john from '../assets/images/john.jpg'
import project1 from '../assets/images/project1.jpg'

import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/javascript.png'
import react from '../assets/images/react.png'
import node from '../assets/images/node.png'
import mongodb from '../assets/images/mongodb.png'
import spring from '../assets/images/spring.png'
import csslogo from '../assets/images/csslogo.png'
import SAI from '../assets/images/SAI.png'

import { AiFillLinkedin } from 'react-icons/ai'

import { FaInstagram } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'

const HomePage = () => {
  const [sidebar, setSidebar] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const date = new Date().getFullYear()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="home-page-conainer">
      <div
        className={
          isScrolled
            ? 'navbar-outer-container shadow'
            : 'navbar-outer-container'
        }
      >
        <div className="navbar-container">
          <a href="#" className="logo">
            Saieeash Reddy
          </a>
          <ul className="nav-links">
            <li>About</li>
            <li>Work</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <span className="ham-icon" onClick={() => setSidebar(true)}>
            <RxHamburgerMenu />
          </span>
        </div>
      </div>

      <div className={sidebar ? 'sidebar-container show' : 'sidebar-container'}>
        <span className="close-sidebar" onClick={() => setSidebar(false)}>
          <MdClose />
        </span>
        <ul className="sidebar-links">
          <li>About</li>
          <li>Work</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero">
            <div className="hero-text">
              <div className="line"></div>
              <h2>I'm Sai</h2>
              <p className="hero-subtitle">
                A Passionate Full Stack Software Engineer, proficient in
                leveraging the power of the MERN stack to build innovative and
                robust solutions.
              </p>
            </div>
            <div className="img-container">
              <img src={john} alt="john" className="hero-img" />
            </div>
          </div>
          <div className="hero-skills-container">
            <div className="skills-title">Tech skills </div>

            <ul className="hero-skills">
              <li className="skill-logo">
                <img src={html} alt="html logo" />
              </li>
              <li className="skill-logo">
                <img src={csslogo} alt="css logo" />
              </li>
              <li className="skill-logo">
                <img src={js} alt="js logo" />
              </li>
              <li className="skill-logo">
                <img src={react} alt="html logo" />
              </li>
              <li className="skill-logo">
                <img src={node} alt="html logo" />
              </li>
              <li className="skill-logo">
                <img src={mongodb} alt="html logo" />
              </li>
              <li className="skill-logo">
                <img src={spring} alt="html logo" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="work-outer-container">
        <div className="work-container">
          <div className="work-container-title">Work experience :-</div>

          <div className="work-content">
            <div className="work">
              <div className="work-time">NOW </div>
              <div className="work-text-container">
                <div className="work-title">FrontEnd Engineer</div>
                <div className="work-company">Contract</div>
              </div>
            </div>
            <div className="work">
              <div className="work-time"> 2022 </div>
              <div className="work-text-container">
                <div className="work-title">Software Engineer</div>
                <div className="work-company">
                  {`United Health Group ( Optum )`}
                </div>
              </div>
            </div>
            <div className="work">
              <div className="work-time"> 2021 </div>
              <div className="work-text-container">
                <div className="work-title">Associate System Analyst</div>
                <div className="work-company">Tata Consultancy Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-container">
        <div className="projects-container-title">Projects :-</div>
        <div className="projects-content">
          <div className="project">
            <div className="project-text-container">
              <div className="project-title">Project-1</div>
              <div className="project-description">
                This is project is done using React which is the most used front
                end framework in the industry i am proud to be the front end
                develop
              </div>
            </div>
            <div className="project-img-container">
              <img src={project1} alt="Project-1" className="project-img" />
            </div>
          </div>
          <div className="project">
            <div className="project-img-container">
              <img src={project1} alt="Project-1" className="project-img" />
            </div>
            <div className="project-text-container">
              <div className="project-title">Project-2</div>
              <div className="project-description">
                This is project is done using React which is the most used front
                end framework in the industry i am proud to be the front end
                develop
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-text-container">
              <div className="project-title">Project-3</div>
              <div className="project-description">
                This is project is done using React which is the most used front
                end framework in the industry i am proud to be the front end
                develop
              </div>
            </div>
            <div className="project-img-container">
              <img src={project1} alt="Project-1" className="project-img" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <ul className="footer-soc-icons">
          <li>
            <a href="#">
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
        </ul>
        <div className="footer-text">
          {`© ${date} Saieeash Reddy. All Rights Reserved`}
        </div>
      </div>
    </div>
  )
}
export default HomePage
