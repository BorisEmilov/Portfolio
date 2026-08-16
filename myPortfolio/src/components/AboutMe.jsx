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
              I'm a backend-focused developer based in Sofia, Bulgaria, with a software
              engineering background from <strong>UNED (Spain)</strong>. Server-side
              development is where I specialize and enjoy working the most, but I'm
              comfortable across the whole stack and can take a project from a
              React interface down to the database when needed.
            </p>

            <p>
              My core strength is backend architecture: <strong>Node.js</strong>, <strong>Express</strong> and
              <strong> NestJS</strong> for the server side, <strong>MongoDB</strong>,
              <strong> MySQL</strong> and <strong>PostgreSQL</strong> for data, and
              authentication systems built with <strong>JWT</strong>, <strong>OAuth</strong> and
              <strong> Passport</strong>. I also work with <strong>Docker</strong> and
              <strong> Kubernetes</strong> to package and ship what I build — and when a
              project calls for it, I build the <strong>React</strong> frontend to go with it too.
            </p>

            <p>
              Alongside development, I've worked as a QA on a content moderation
              project for a multinational company, where I built a JavaScript tool
              to automate data analysis and reporting — an experience that keeps me
              attentive to detail and quality in everything I code.
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