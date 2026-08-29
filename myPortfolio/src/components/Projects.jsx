import React from 'react'
import '../styles/home.css'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub, FaArrowRight } from 'react-icons/fa'
import { FaPython, FaServer } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNestjs } from "react-icons/si";


const Projects = () => {
  return (
    <div className='container'>
        <div className="sectionTitleContainer">
                        <h2 className="sectionTitle">PROJECTS</h2>
                        <div className="sectionTitleLine"></div>
                    </div>

                    <section className="mainProjectSection">
                        <div className="mainProjectHeader">
                            <span className="mainProjectMiniTitle">Currently Developing</span>
                            <h2 className="mainProjectTitle">Main Projects</h2>
                            <p className="projectsGithubSubtitle">
                                The projects I'm actively building right now.
                            </p>
                        </div>

                        <article
                            className="mainProjectCard"
                            onClick={() => window.open('https://github.com/BorisEmilov/Capitalia', '_blank', 'noopener,noreferrer')}
                        >
                            <div className="githubAccentBar mainProjectAccentBar"></div>

                            <div className="githubProjectLeft">
                                <div className="githubMainIcon">
                                    <FaGithub size={34} />
                                </div>

                                <div className="githubProjectTechIcon">
                                    <SiNestjs size={26} />
                                </div>
                            </div>

                            <div className="githubProjectContent">
                                <div className="githubProjectTop">
                                    <h3>Capitalia</h3>
                                    <span className="githubProjectStatus mainProjectStatus">In Development</span>
                                </div>

                                <p>
                                    Investment fund, capital and personnel management platform. Capitalia handles
                                    the administration of investment funds, tracking of capital contributions and
                                    returns, and the personnel behind each fund, built on a secure and scalable
                                    backend architecture.
                                </p>

                                <div className="githubProjectTags">
                                    <span>NestJS</span>
                                    <span>Prisma</span>
                                    <span>PostgreSQL</span>
                                    <span>Redis</span>
                                    <span>JWT Auth</span>
                                </div>
                            </div>

                            <div className="githubProjectRight">
                                <div className="githubVisitButton">
                                    <span>View Repo</span>
                                    <FaArrowRight size={14} />
                                </div>
                            </div>
                        </article>

                        <article
                            className="mainProjectCard"
                            onClick={() => window.open('https://github.com/BorisEmilov/TradingAI', '_blank', 'noopener,noreferrer')}
                        >
                            <div className="githubAccentBar mainProjectAccentBar"></div>

                            <div className="githubProjectLeft">
                                <div className="githubMainIcon">
                                    <FaGithub size={34} />
                                </div>

                                <div className="githubProjectTechIcon">
                                    <FaPython size={28} />
                                </div>
                            </div>

                            <div className="githubProjectContent">
                                <div className="githubProjectTop">
                                    <h3>TradingAI</h3>
                                    <span className="githubProjectStatus mainProjectStatus">In Development</span>
                                </div>

                                <p>
                                    Fully autonomous AI trading system that connects directly to MetaTrader 5 (MT5)
                                    and executes trades based on institutional trading strategies, including Smart
                                    Money Concepts (SMC), ICT, and Elliott Wave theory. It performs technical
                                    analysis on live charts and autonomously executes trades based on its own
                                    predictions, with no manual intervention required.
                                </p>

                                <div className="githubProjectTags">
                                    <span>Python</span>
                                    <span>MetaTrader 5</span>
                                    <span>Algorithmic Trading</span>
                                    <span>SMC / ICT</span>
                                    <span>Elliott Wave</span>
                                    <span>Technical Analysis</span>
                                </div>
                            </div>

                            <div className="githubProjectRight">
                                <div className="githubVisitButton">
                                    <span>View Repo</span>
                                    <FaArrowRight size={14} />
                                </div>
                            </div>
                        </article>

                        <article
                            className="mainProjectCard"
                            onClick={() => window.open('https://github.com/BorisEmilov/AITrading_API', '_blank', 'noopener,noreferrer')}
                        >
                            <div className="githubAccentBar mainProjectAccentBar"></div>

                            <div className="githubProjectLeft">
                                <div className="githubMainIcon">
                                    <FaGithub size={34} />
                                </div>

                                <div className="githubProjectTechIcon">
                                    <FaServer size={28} />
                                </div>
                            </div>

                            <div className="githubProjectContent">
                                <div className="githubProjectTop">
                                    <h3>AITrading API</h3>
                                    <span className="githubProjectStatus mainProjectStatus">In Development</span>
                                </div>

                                <p>
                                    Backend integration for TradingAI. Exposes the trading engine's chart analysis,
                                    predictions, and trade execution through an API, handling the connection between
                                    the autonomous trading AI and external services.
                                </p>

                                <div className="githubProjectTags">
                                    <span>Python</span>
                                    <span>API</span>
                                    <span>Backend</span>
                                    <span>Integration</span>
                                </div>
                            </div>

                            <div className="githubProjectRight">
                                <div className="githubVisitButton">
                                    <span>View Repo</span>
                                    <FaArrowRight size={14} />
                                </div>
                            </div>
                        </article>
                    </section>

                    <section className="projectsGithubSection">
                        <div className="projectsGithubHeader">
                            <span className="projectsGithubMiniTitle">Code Repositories</span>
                            <h2 className="projectsGithubTitle">GitHub Projects</h2>
                            <p className="projectsGithubSubtitle">
                                All my GitHub repos
                            </p>
                        </div>
        
                        <div className="projectsGithubList">

                            <article
                                className="githubProjectCard"
                                onClick={() => window.open('https://github.com/BorisEmilov/DataAnalysis', '_blank', 'noopener,noreferrer')}
                            >
                                <div className="githubAccentBar"></div>
        
                                <div className="githubProjectLeft">
                                    <div className="githubMainIcon">
                                        <FaGithub size={34} />
                                    </div>
        
                                    <div className="githubProjectTechIcon">
                                        <IoLogoJavascript size={28} />
                                    </div>
                                </div>
        
                                <div className="githubProjectContent">
                                    <div className="githubProjectTop">
                                        <h3>Excel Data Analysis & Performance Tracking Tool</h3>
                                        <span className="githubProjectStatus">PRIVATE Repo</span>
                                    </div>
        
                                    <p>
                                        A JavaScript-based Excel tool I independently developed while working as a QA on a content moderation project for a multinational company. 
                                        It automates data analysis and performance tracking, 
                                        helping the QA team save hours of manual calculation and reporting work. The repository is private for legal and confidentiality reasons.
                                    </p>
        
                                    <div className="githubProjectTags">
                                        <span>JavaScript</span>
                                        <span>Excell</span>
                                        <span>Data Analisys</span>
                                    </div>
                                </div>
        
                                <div className="githubProjectRight">
                                    <div className="githubVisitButton">
                                        <span>View Repo</span>
                                        <FaArrowRight size={14} />
                                    </div>
                                </div>
                            </article>
        
                            <article
                                className="githubProjectCard"
                                onClick={() => window.open('https://github.com/BorisEmilov/CapstoneProject_MERN', '_blank', 'noopener,noreferrer')}
                            >
                                <div className="githubAccentBar"></div>
        
                                <div className="githubProjectLeft">
                                    <div className="githubMainIcon">
                                        <FaGithub size={34} />
                                    </div>
        
                                    <div className="githubProjectTechIcon">
                                        <FaNodeJs size={28} />
                                    </div>
                                </div>
        
                                <div className="githubProjectContent">
                                    <div className="githubProjectTop">
                                        <h3>MERN Capstone Project</h3>
                                        <span className="githubProjectStatus">Public Repo</span>
                                    </div>
        
                                    <p>
                                        Project made mainly for Backend, 
                                        The frontend is not fully finished as the focus was on Backend tecnologies
                                    </p>
        
                                    <div className="githubProjectTags">
                                        <span>React</span>
                                        <span>Redux</span>
                                        <span>CSS</span>
                                        <span>Responsive</span>
                                        <span>Express</span>
                                        <span>MongoDB</span>
                                    </div>
                                </div>
        
                                <div className="githubProjectRight">
                                    <div className="githubVisitButton">
                                        <span>View Repo</span>
                                        <FaArrowRight size={14} />
                                    </div>
                                </div>
                            </article>
        
                            <article
                                className="githubProjectCard"
                                onClick={() => window.open('https://github.com/BorisEmilov/opsPulse', '_blank', 'noopener,noreferrer')}
                            >
                                <div className="githubAccentBar"></div>
        
                                <div className="githubProjectLeft">
                                    <div className="githubMainIcon">
                                        <FaGithub size={34} />
                                    </div>
        
                                    <div className="githubProjectTechIcon">
                                        <FaNodeJs size={28} />
                                    </div>
                                </div>
        
                                <div className="githubProjectContent">
                                    <div className="githubProjectTop">
                                        <h3>OpsPulse system Dashboard</h3>
                                        <span className="githubProjectStatus">Public Repo</span>
                                    </div>
        
                                    <p>
                                        Dashboard that integrates JWT authentication, integreate work Queues, Jobs, Workers and Admins.
                                    </p>
                                    <p>
                                        This project is orientated to work orders management.
                                    </p>
        
                                    <div className="githubProjectTags">
                                        <span>React</span>
                                        <span>Express</span>
                                        <span>JWT</span>
                                        <span>Authentication</span>
                                        <span>SQLITE3</span>
                                    </div>
                                </div>
        
                                <div className="githubProjectRight">
                                    <div className="githubVisitButton">
                                        <span>View Repo</span>
                                        <FaArrowRight size={14} />
                                    </div>
                                </div>
                            </article>
        
                            <article
                                className="githubProjectCard"
                                onClick={() => window.open('https://github.com/BorisEmilov/WorkOS_backend', '_blank', 'noopener,noreferrer')}
                            >
                                <div className="githubAccentBar"></div>
        
                                <div className="githubProjectLeft">
                                    <div className="githubMainIcon">
                                        <FaGithub size={34} />
                                    </div>
        
                                    <div className="githubProjectTechIcon">
                                        <FaNodeJs size={28} />
                                    </div>
                                </div>
        
                                <div className="githubProjectContent">
                                    <div className="githubProjectTop">
                                        <h3>WorkOS Backend</h3>
                                        <span className="githubProjectStatus">Public Repo</span>
                                    </div>
        
                                    <p>
                                        System to manage work orders based on organizations, projects and tasks
                                    </p>
        
                                    <div className="githubProjectTags">
                                        <span>MongoDB</span>
                                        <span>JWT</span>
                                        <span>Express</span>
                                        <span>BcryptJS</span>
                                        <span>Docker</span>
                                        <span>Helmet</span>
                                        <span>Morgan</span>
                                    </div>
                                </div>
        
                                <div className="githubProjectRight">
                                    <div className="githubVisitButton">
                                        <span>View Repo</span>
                                        <FaArrowRight size={14} />
                                    </div>
                                </div>
                            </article>
        
                             <article
                                className="githubProjectCard"
                                onClick={() => window.open('https://github.com/BorisEmilov/socialMedia_backend', '_blank', 'noopener,noreferrer')}
                            >
                                <div className="githubAccentBar"></div>
        
                                <div className="githubProjectLeft">
                                    <div className="githubMainIcon">
                                        <FaGithub size={34} />
                                    </div>
        
                                    <div className="githubProjectTechIcon">
                                        <FaNodeJs size={28} />
                                    </div>
                                </div>
        
                                <div className="githubProjectContent">
                                    <div className="githubProjectTop">
                                        <h3>Social media Backend</h3>
                                        <span className="githubProjectStatus">Public Repo</span>
                                    </div>
        
                                    <p>
                                        Functionality: register / login / user info/ update user fields / follow - unfollow
                                        users / get followares / get users posts / create posts / delete posts
                                    </p>
        
                                    <div className="githubProjectTags">
                                        <span>MongoDB</span>
                                        <span>JWT</span>
                                        <span>Express</span>
                                        <span>BcryptJS</span>
                                    </div>
                                </div>
        
                                <div className="githubProjectRight">
                                    <div className="githubVisitButton">
                                        <span>View Repo</span>
                                        <FaArrowRight size={14} />
                                    </div>
                                </div>
                            </article>
        
        
                            <article
                                className="githubProjectCard"
                                onClick={() => window.open('https://github.com/BorisEmilov/BurgerRestaurantApp', '_blank', 'noopener,noreferrer')}
                            >
                                <div className="githubAccentBar"></div>
        
                                <div className="githubProjectLeft">
                                    <div className="githubMainIcon">
                                        <FaGithub size={34} />
                                    </div>
        
                                    <div className="githubProjectTechIcon">
                                        <FaReact size={28} />
                                    </div>
                                </div>
        
                                <div className="githubProjectContent">
                                    <div className="githubProjectTop">
                                        <h3>Burger Restaurant APP</h3>
                                        <span className="githubProjectStatus">Public Repo</span>
                                    </div>
        
                                    <p>
                                        Landing page for a Burger Restaurant
                                    </p>
        
                                    <div className="githubProjectTags">
                                        <span>React</span>
                                        <span>web design</span>
                                        <span>frontend</span>
                                    </div>
                                </div>
        
                                <div className="githubProjectRight">
                                    <div className="githubVisitButton">
                                        <span>View Repo</span>
                                        <FaArrowRight size={14} />
                                    </div>
                                </div>
                            </article>
        
                            <article
                                className="githubProjectCard"
                                onClick={() => window.open('https://github.com/BorisEmilov/MyWeather', '_blank', 'noopener,noreferrer')}
                            >
                                <div className="githubAccentBar"></div>
        
                                <div className="githubProjectLeft">
                                    <div className="githubMainIcon">
                                        <FaGithub size={34} />
                                    </div>
        
                                    <div className="githubProjectTechIcon">
                                        <FaReact size={28} />
                                    </div>
                                </div>
        
                                <div className="githubProjectContent">
                                    <div className="githubProjectTop">
                                        <h3>Weather APP</h3>
                                        <span className="githubProjectStatus">Public Repo</span>
                                    </div>
        
                                    <p>
                                        App that displays the weather pronostic based on your location
                                    </p>
        
                                    <div className="githubProjectTags">
                                        <span>React</span>
                                        <span>web design</span>
                                        <span>Geolocation</span>
                                        <span>API fetching</span>
                                    </div>
                                </div>
        
                                <div className="githubProjectRight">
                                    <div className="githubVisitButton">
                                        <span>View Repo</span>
                                        <FaArrowRight size={14} />
                                    </div>
                                </div>
                            </article>
        
                            <article
                                className="githubProjectCard"
                                onClick={() => window.open('https://github.com/BorisEmilov/movieX-react', '_blank', 'noopener,noreferrer')}
                            >
                                <div className="githubAccentBar"></div>
        
                                <div className="githubProjectLeft">
                                    <div className="githubMainIcon">
                                        <FaGithub size={34} />
                                    </div>
        
                                    <div className="githubProjectTechIcon">
                                        <FaReact size={28} />
                                    </div>
                                </div>
        
                                <div className="githubProjectContent">
                                    <div className="githubProjectTop">
                                        <h3>Movie Finder App</h3>
                                        <span className="githubProjectStatus">Public Repo</span>
                                    </div>
        
                                    <p>
                                        App to find any movie, where to see it, trailer, an much more information abouth any movie
                                    </p>
        
                                    <div className="githubProjectTags">
                                        <span>React</span>
                                        <span>web design</span>
                                        <span>Frontend</span>
                                        <span>API fetching</span>
                                    </div>
                                </div>
        
                                <div className="githubProjectRight">
                                    <div className="githubVisitButton">
                                        <span>View Repo</span>
                                        <FaArrowRight size={14} />
                                    </div>
                                </div>
                            </article>
        
                            <article
                                className="githubProjectCard"
                                onClick={() => window.open('https://github.com/BorisEmilov/Iphone3D', '_blank', 'noopener,noreferrer')}
                            >
                                <div className="githubAccentBar"></div>
        
                                <div className="githubProjectLeft">
                                    <div className="githubMainIcon">
                                        <FaGithub size={34} />
                                    </div>
        
                                    <div className="githubProjectTechIcon">
                                        <FaReact size={28} />
                                    </div>
                                </div>
        
                                <div className="githubProjectContent">
                                    <div className="githubProjectTop">
                                        <h3>Apple Landing page</h3>
                                        <span className="githubProjectStatus">Public Repo</span>
                                    </div>
        
                                    <p>
                                        Apple landing page with 3D interactive phone model
                                    </p>
        
                                    <div className="githubProjectTags">
                                        <span>React</span>
                                        <span>web design</span>
                                        <span>Frontend</span>
                                        <span>3D models</span>
                                    </div>
                                </div>
        
                                <div className="githubProjectRight">
                                    <div className="githubVisitButton">
                                        <span>View Repo</span>
                                        <FaArrowRight size={14} />
                                    </div>
                                </div>
                            </article>
        
                        </div>
                    </section>
    </div>
  )
}

export default Projects