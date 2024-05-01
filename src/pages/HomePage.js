import { RxHamburgerMenu } from 'react-icons/rx'
import { MdClose } from 'react-icons/md'
import { useEffect, useRef, useState } from 'react'
import john from '../assets/images/john.jpg'
import sai from '../assets/images/my-image.jpeg'

import ecommerceProject from '../assets/images/ecommerce.png'
import project1 from '../assets/images/project-1.png'
import project2 from '../assets/images/project-2.png'
import project3 from '../assets/images/project-3.png'

import html from '../assets/images/html.png'
import js from '../assets/images/javascript.png'
import react from '../assets/images/react.png'
import node from '../assets/images/node.png'
import mongodb from '../assets/images/mongo.png'
import spring from '../assets/images/spring.png'
import csslogo from '../assets/images/csslogo.png'

import googleLocation from '../assets/images/googleLocation.png'

import { BsLinkedin } from 'react-icons/bs'

import { FaInstagram } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'
import { IoCallSharp } from 'react-icons/io5'
import { HiOutlineMail } from 'react-icons/hi'

const HomePage = () => {
  const [sidebar, setSidebar] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const date = new Date().getFullYear()

  const projectRef = useRef(null)
  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const contactRef = useRef(null)

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

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
          <a href="index.html" className="logo">
            Saieeash Reddy
          </a>
          <ul className="nav-links">
            <li onClick={() => handleScroll(aboutRef)}>About</li>
            <li onClick={() => handleScroll(workRef)}>Work</li>
            <li onClick={() => handleScroll(projectRef)}>Projects</li>
            <li onClick={() => handleScroll(contactRef)}>Contact</li>
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

      <div ref={aboutRef} className="hero-container">
        <div className="hero-content">
          <div className="hero">
            <div className="hero-text">
              <div className="line"></div>
              <h2>I'm Sai</h2>
              <p className="hero-subtitle">
                A Passionate Full Stack Software Engineer, proficient in
                Java(Springboot) and MERN stack based in Hyderabad,India.
                <a
                  href="https://goo.gl/maps/dWSMxq1yzDiVkzEr7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="location-img"
                    src={googleLocation}
                    alt="location"
                  />
                </a>
              </p>
              <ul className="imp-links">
                <li>
                  <a
                    href="https://linkedin.com/in/saieeash-reddy-35120a231"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/SaieeashReddy23"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub />
                  </a>
                </li>
              </ul>
            </div>
            <div className="img-container">
              <img src={sai} alt="Sai" className="hero-img" />
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

      <div ref={workRef} className="work-outer-container">
        <div className="work-container">
          <div className="work-container-title">Work experience :-</div>

          <div className="work-content">
            <div className="work">
              <div className="work-time">weekends </div>
              <div className="work-text-container">
                <div className="work-title"> Frontend projects</div>
                <div className="work-company">Freelance</div>
              </div>
            </div>
            <div className="work">
              <div className="work-time"> 2022 - 2024 </div>
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

      <div ref={projectRef} className="projects-container">
        <div className="projects-container-title">Projects :-</div>
        <div className="projects-content">
          <div className="project">
            <div className="project-text-container">
              <div className="project-title">Ecommerce project</div>
              <div className="project-description">
                Developed a responsive e-commerce platform using React,
                featuring advanced functionalities like real-time search, secure
                user authentication, and integrated payment processing.
              </div>
            </div>
            <div className="project-img-container">
              <a
                href="https://saieeash-react-ecommerce-site.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ecommerceProject}
                  alt="Project-1"
                  className="project-img"
                />
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project-img-container">
              <a
                href="https://sai-backroads-project.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={project2} alt="Project-2" className="project-img" />
              </a>
            </div>
            <div className="project-text-container">
              <div className="project-title">Back Roads Project</div>
              <div className="project-description">
                This Project id done using HTML,CSS and Javascript. This is my
                first project and i am proud to be the front end developer.
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-text-container">
              <div className="project-title">Converse UI</div>
              <div className="project-description">
                This Project id done using HTML,CSS and Javascript. This is my
                first project and i am proud to be the front end developer.
              </div>
            </div>
            <div className="project-img-container">
              <a
                href="https://sai-converse.netlify.app/login"
                target="_blank"
                rel="noreferrer"
              >
                <img src={project3} alt="Project-3" className="project-img" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div ref={contactRef} className="footer-container">
        <ul className="footer-soc-icons">
          <li>
            <a
              href="https://linkedin.com/in/saieeash-reddy-35120a231"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/SaieeashReddy23"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ReddySaieeash"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/saieeashreddy1/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>

        <div className="contact-details">
          <div className="mobile">
            <span>
              <IoCallSharp />
            </span>
            <span> +91 9629624617</span>
          </div>
          <div className="email">
            <span>
              <HiOutlineMail />
            </span>
            <span>saieeashreddy1@gmail.com</span>
          </div>
        </div>
        <div className="footer-text">
          {`© ${date} Saieeash Reddy. All Rights Reserved`}
        </div>
      </div>
    </div>
  )
}
export default HomePage
