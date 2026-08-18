import React from 'react'
import '../styles/home.css'
import { SiPackt } from "react-icons/si";
import { SiScrimba } from "react-icons/si";
import { SiCoursera } from "react-icons/si";
import { FaMeta } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import ualbertaLogo from '../assets/university-of-alberta-logo.svg';



const Certificates = () => {
  return (
    <div className='container'>
        <div className="sectionTitleContainer">
                        <h2 className="sectionTitle">Certificates</h2>
                        <div className="sectionTitleLine"></div>
                    </div>
        
                    <section className='certificatesContainer'>
                        <div className='certificateCard' onClick={() => window.open('https://www.coursera.org/account/accomplishments/specialization/8FSA5U7NHNS2?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta', '_blank', 'noopener,noreferrer')}>
                            <div className='certificateTop'>
                                <img src={ualbertaLogo} alt="University of Alberta" className='certificateLogo' />
                                <span className='certificateBadge'>Certificate</span>
                            </div>
                            <h3>𝘼𝙧𝙘𝙝𝙞𝙩𝙚𝙘𝙩𝙪𝙧𝙚 𝙖𝙣𝙙 𝙎𝙤𝙛𝙩𝙬𝙖𝙧𝙚 𝙙𝙚𝙨𝙞𝙜𝙣</h3>
                            <div className='tagsContainer'>
                                <div className='tag'>Java</div>
                            </div>
                        </div>
                        <div className='certificateCard' onClick={() => window.open('https://www.coursera.org/account/accomplishments/specialization/8FSA5U7NHNS2?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta', '_blank', 'noopener,noreferrer')}>
                            <div className='certificateTop'>
                                <SiCoursera size={52} color='blue'  />
                                <span className='certificateBadge'>Certificate</span>
                            </div>
                            <h3>𝘽𝙖𝙘𝙠𝙚𝙣𝙙 𝙀𝙣𝙜𝙞𝙣𝙚𝙚𝙧𝙞𝙣𝙜 𝙉𝙤𝙙𝙚𝙅𝙎</h3>
                            <div className='tagsContainer'>
                                <div className='tag'>posgreSQL</div>
                                <div className='tag'>prisma</div>
                                <div className='tag'>Typescript</div>
                                <div className='tag'>Architecture</div>
                            </div>
                        </div>
                        <div className='certificateCard' onClick={() => window.open('https://www.coursera.org/account/accomplishments/specialization/ZCF1RYVNOEGT?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta', '_blank', 'noopener,noreferrer')}>
                            <div className='certificateTop'>
                                <SiPackt size={52} color='#faa307' />
                                <span className='certificateBadge'>Certificate</span>
                            </div>
                            <h3>𝙈𝙀𝙍𝙉 𝙎𝙩𝙖𝙘𝙠</h3>
                            <div className='tagsContainer'>
                                <div className='tag'>MongoDB</div>
                                <div className='tag'>Express</div>
                                <div className='tag'>Node</div>
                                <div className='tag'>React</div>
                                <div className='tag'>Redux</div>
                            </div>
                        </div>
        
                        <div className='certificateCard' onClick={() => window.open('https://www.coursera.org/account/accomplishments/verify/UDOJCQ4V8B7P?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course', '_blank', 'noopener,noreferrer')}>
                            <div className='certificateTop'>
                                <SiPackt size={52} color='#faa307' />
                                <span className='certificateBadge'>Certificate</span>
                            </div>
                            <h3>𝙉𝙀𝙎𝙏 𝙅𝙎</h3>
                            <div className='tagsContainer'>
                                <div className='tag'>NestJS</div>
                                <div className='tag'>TypeScript</div>
                                <div className='tag'>MongoDB</div>
                                <div className='tag'>MySQL</div>
                            </div>
                        </div>
        
                        <div className='certificateCard' onClick={() => window.open('https://www.coursera.org/account/accomplishments/certificate/1BZCEOYCC0CR', '_blank', 'noopener,noreferrer')}>
                            <div className='certificateTop'>
                                <SiScrimba size={52} color='#634fe9' />
                                <span className='certificateBadge'>Certificate</span>
                            </div>
                            <h3>𝙏𝙮𝙥𝙚𝙎𝙘𝙧𝙞𝙥𝙩</h3>
                            <div className='tagsContainer'>
                                <div className='tag'>TypeScript</div>
                                <div className='tag'>React</div>
                                <div className='tag'>MongoDB</div>
                                <div className='tag'>Express</div>
                            </div>
                        </div>
        
                        <div className='certificateCard' onClick={() => window.open('https://www.coursera.org/account/accomplishments/verify/EJOCGPMF0C3M?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse', '_blank', 'noopener,noreferrer')}>
                            <div className='certificateTop'>
                                <SiCoursera size={52} color='#2287de' />
                                <span className='certificateBadge'>Certificate</span>
                            </div>
                            <h3>𝘽𝙖𝙘𝙠𝙚𝙣𝙙 𝙬𝙞𝙩𝙝 𝙏𝙮𝙥𝙚𝙎𝙘𝙧𝙞𝙥𝙩</h3>
                            <div className='tagsContainer'>
                                <div className='tag'>TypeScript</div>
                                <div className='tag'>React</div>
                                <div className='tag'>MongoDB</div>
                                <div className='tag'>Express</div>
                            </div>
                        </div>
        
                        <div className='certificateCard' onClick={() => window.open('https://www.coursera.org/account/accomplishments/verify/1FLPYLGIMANC?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse', '_blank', 'noopener,noreferrer')}>
                            <div className='certificateTop'>
                                <SiPackt size={52} color='#faa307' />
                                <span className='certificateBadge'>Certificate</span>
                            </div>
                            <h3>𝙀𝙭𝙥𝙧𝙚𝙨𝙨𝙅𝙎 𝘼𝙪𝙩𝙝𝙚𝙣𝙩𝙞𝙘𝙖𝙩𝙞𝙤𝙣</h3>
                            <div className='tagsContainer'>
                                <div className='tag'>OAuth</div>
                                <div className='tag'>JWT</div>
                                <div className='tag'>Cookies</div>
                                <div className='tag'>Sessions</div>
                                <div className='tag'>Roles</div>
                                <div className='tag'>Passport</div>
                            </div>
                        </div>
        
                        <div className='certificateCard' onClick={() => window.open('https://www.coursera.org/account/accomplishments/specialization/certificate/MS9VML0DTIV7', '_blank', 'noopener,noreferrer')}>
                            <div className='certificateTop'>
                                <FaMeta size={52} color='#5946ef' />
                                <span className='certificateBadge'>Certificate</span>
                            </div>
                            <h3>𝙍𝙚𝙖𝙘𝙩 𝙎𝙥𝙚𝙘𝙞𝙖𝙡𝙞𝙯𝙖𝙩𝙞𝙤𝙣</h3>
                            <div className='tagsContainer'>
                                <div className='tag'>Redux</div>
                                <div className='tag'>Axios</div>
                                <div className='tag'>React</div>
                                <div className='tag'>Web Design</div>
                                <div className='tag'>Hooks</div>
                                <div className='tag'>CSS</div>
                            </div>
                        </div>
                    </section>
    </div>
  )
}

export default Certificates