import React from 'react'
import { FaUniversity, FaDatabase, FaJava, FaNetworkWired, FaCode, FaMicrochip } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
import { TbBrandCSharp } from "react-icons/tb";
import unedLogo from '../assets/unnamed.png'

import '../styles/studies.css'

const Studies = () => {
    return (
        <section className="universitySection">
            <div className="universityCard">
                <div className="universityTop">
                    <div className="universityLogoWrapper">
                        <img src={unedLogo} alt="UNED Spain logo" className="universityLogo" />
                    </div>

                    <div className="universityHeading">
                        <span className="universityBadge">Academic Background</span>
                        <h2>Software Engineering Studies</h2>
                        <h3>UNED — National University of Distance Education, Spain</h3>
                        <p className="universityYears">2022 — 2025</p>
                    </div>
                </div>

                <div className="universityDescription">
                    <p>
                        Pursued university-level studies in <strong>Software Engineering</strong> at
                        <strong> UNED (Spain)</strong> between 2022 and 2025, building a solid academic
                        foundation in software development, computer systems, databases, networking,
                        and core engineering principles.
                    </p>

                    <p>
                        This academic path strengthened analytical thinking, problem-solving,
                        software design fundamentals, and technical adaptability across multiple
                        programming paradigms and system-oriented subjects.
                    </p>

                    <p>
                        The coursework provided practical and theoretical exposure to key areas such as
                        <strong> SQL</strong>, <strong>database systems</strong>, <strong>Java</strong>,
                        <strong> C#</strong>, <strong>data structures</strong>, <strong>computer networks</strong>,
                        <strong> networking concepts</strong>, and <strong>programmable automata / industrial logic</strong>,
                        while also reinforcing foundations in algorithmic thinking, software architecture,
                        and systems analysis.
                    </p>
                </div>

                <div className="universitySkillsBlock">
                    <h4>Core Skills Developed</h4>

                    <div className="universitySkillsGrid">
                        <div className="universitySkillTag"><SiMysql /> SQL</div>
                        <div className="universitySkillTag"><FaDatabase /> Databases</div>
                        <div className="universitySkillTag"><FaJava /> Java</div>
                        <div className="universitySkillTag"><TbBrandCSharp /> C#</div>
                        <div className="universitySkillTag"><FaCode /> Data Structures</div>
                        <div className="universitySkillTag"><FaNetworkWired /> Computer Networks</div>
                        <div className="universitySkillTag"><FaNetworkWired /> Networking</div>
                        <div className="universitySkillTag"><FaMicrochip /> Programmable Automata</div>
                        <div className="universitySkillTag"><FaCode /> Algorithms</div>
                        <div className="universitySkillTag"><FaCode /> Software Fundamentals</div>
                        <div className="universitySkillTag"><FaUniversity /> Systems Analysis</div>
                        <div className="universitySkillTag"><FaUniversity /> Engineering Logic</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Studies;