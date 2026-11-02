import React from 'react'
import '../styles/home.css'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { FaPassport } from "react-icons/fa";
import { TbBrandOauth } from "react-icons/tb";
import { FaCookieBite } from "react-icons/fa";
import { FaLinux, FaJenkins } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { BsDatabaseGear } from "react-icons/bs";
import { IoIosGitNetwork } from "react-icons/io";
import { TbBrandRedux } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { MdArchitecture } from "react-icons/md";








const Skills = () => {
  return (
    <div className='container'>
        <div className="sectionTitleContainer">
                        <h2 className="sectionTitle">MAIN SKILLS</h2>
                        <div className="sectionTitleLine"></div>
                    </div>
        
                    <section className='skillsContainerGeneral'>
                        <div className='skillContainer'>
                            <h2>𝙁𝙧𝙤𝙣𝙩𝙀𝙣𝙙 𝙎𝙠𝙞𝙡𝙡𝙨</h2>
                            <div className='iconContainer'>
                                <div className='iconCard'><FaReact size={40} color='#4895ef' /><span>React</span></div>
                                <div className='iconCard'><FaHtml5 size={40} color='#d00000' /><span>HTML5</span></div>
                                <div className='iconCard'><FaCss3Alt size={40} color='#3183e1' /><span>CSS3</span></div>
                                <div className='iconCard'><TbBrandRedux size={40} color='#48258e' /><span>Redux</span></div>
                            </div>
                        </div>
        
                        <div className='skillContainer'>
                            <h2>𝘽𝙖𝙘𝙠𝙀𝙣𝙙 𝙎𝙠𝙞𝙡𝙡𝙨</h2>
                            <div className='iconContainer'>
                                <div className='iconCard'><FaJsSquare size={40} color='#ffb703' /><span>JavaScript</span></div>
                                <div className='iconCard'><SiTypescript size={40} color='#023e8a' /><span>TypeScript</span></div>
                                <div className='iconCard'><SiExpress size={40} color='#1b1405' /><span>Express</span></div>
                                <div className='iconCard'><SiNestjs size={40} color='#c1121f' /><span>NestJS</span></div>
                                <div className='iconCard'><FaNodeJs size={40} color='#003049' /><span>Node.js</span></div>
                                <div className='iconCard'><TbBrandCSharp size={40} color='#68217a' /><span>C#</span></div>
                                <div className='iconCard'><SiDotnet size={40} color='#512bd4' /><span>.NET Core</span></div>
                                <div className='iconCard'><BsDatabaseGear size={40} color='#6c4fbf' /><span>Entity Framework</span></div>
                                <div className='iconCard'><SiPostman size={40} color='#e0634d' /><span>Postman</span></div>
                                <div className='iconCard'><MdArchitecture size={40} color='#6951d2' /><span>Architecture & software design</span></div>
                            </div>
                        </div>
        
                        <div className='skillContainer'>
                            <h2>𝘿𝙖𝙩𝙖𝙗𝙖𝙨𝙚 𝙎𝙠𝙞𝙡𝙡𝙨</h2>
                            <div className='iconContainer'>
                                <div className='iconCard'><DiMongodb size={40} color='#6de683' /><span>MongoDB</span></div>
                                <div className='iconCard'><GrMysql size={40} color='#4c8cd0' /><span>MySQL</span></div>
                                <div className='iconCard'><BiLogoPostgresql size={40} color='#4474e4' /><span>PostgreSQL</span></div>
                                <div className='iconCard'><DiRedis size={40} color='#070707' /><span>Redis</span></div>

                            </div>
                        </div>
        
                        <div className='skillContainer'>
                            <h2>𝘼𝙪𝙩𝙝𝙚𝙣𝙩𝙞𝙘𝙖𝙩𝙞𝙤𝙣</h2>
                            <div className='iconContainer'>
                                <div className='iconCard'><SiJsonwebtokens size={40} color='#7e9fec' /><span>JWT</span></div>
                                <div className='iconCard'><FaPassport size={40} color='#000000' /><span>Passport</span></div>
                                <div className='iconCard'><TbBrandOauth size={40} color='#ea6060' /><span>OAuth</span></div>
                                <div className='iconCard'><FaCookieBite size={40} color='#f4954c' /><span>Cookies</span></div>
                            </div>
                        </div>
                    </section>
    </div>
  )
}

export default Skills