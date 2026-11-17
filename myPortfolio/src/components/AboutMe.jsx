import React from 'react'
import '../styles/home.css'
import Studies from './Studies'
import { FaMapMarkerAlt, FaLaptopCode, FaCircle } from 'react-icons/fa'
import myPic from '../assets/Screenshot from 2026-04-05 21-28-18.png'

const AboutMe = () => {
  return (
    <div className='container'>

      <div className="sectionTitleContainer">
        <h2 className="sectionTitle">About Me</h2>
        <div className="sectionTitleLine"></div>
      </div>

      <section className='infoContainer'>
        <div className='roudPhotoConatiner'>
          <div className='image'>
            <img src={myPic} alt="Borislav Georgiev" className="universityLogo" />
          </div>
        </div>
        <div className='descriptionContainer'>
          <div className='aboutText'>
            <span className='aboutBadge'>Backend-Focused Developer</span>
            <h3>Hi, I'm Borislav Georgiev</h3>

            <p>
              I'm a backend-focused full-stack developer based in Sofia, Bulgaria.
            </p>

            <p>
              My <strong>primary stack is the JavaScript/TypeScript ecosystem</strong>, including
              Node.js, NestJS, Express and React. I also have experience with{' '}
              <strong>C# and .NET</strong> as a secondary backend stack.
            </p>

            <p>
              I work with <strong>PostgreSQL, MySQL and MongoDB</strong>, and I'm also interested in
              building AI-powered applications using{' '}
              <strong>Python, LLMs, RAG and vector databases</strong>.
            </p>

            <p>
              Alongside software development, I have professional QA experience, including building
              JavaScript tools to automate data analysis and reporting. I enjoy solving technical
              problems and building reliable, practical software.
            </p>

            <div className='aboutFactsRow'>
              <div className='aboutFact'>
                <FaMapMarkerAlt size={14} />
                <span>Sofia, Bulgaria</span>
              </div>
              <div className='aboutFact'>
                <FaLaptopCode size={14} />
                <span>Backend • Full-Stack Capable</span>
              </div>
              <div className='aboutFact aboutFactAvailable'>
                <FaCircle size={8} />
                <span>Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Studies />

    </div>
  )
}

export default AboutMe