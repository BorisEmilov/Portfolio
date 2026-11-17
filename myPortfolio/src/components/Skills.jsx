import React from 'react'
import '../styles/home.css'
import '../styles/skills.css'
import { SiDotnet, SiNestjs, SiExpress, SiTypescript, SiFastapi, SiGithubactions, SiPostman } from 'react-icons/si'
import { TbBrandCSharp, TbApi, TbShieldLock, TbStack2, TbSql, TbPlugConnected } from 'react-icons/tb'
import { FaNodeJs, FaPython, FaReact, FaJsSquare, FaDocker, FaGitAlt, FaGithub, FaArrowRight } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiMongodb, DiRedis } from 'react-icons/di'
import { BsDatabaseGear } from 'react-icons/bs'
import { LuBrainCircuit, LuWorkflow } from 'react-icons/lu'

// Each "usedIn" entry points to a real project shown in the portfolio,
// so a recruiter can jump from a skill to the place where it is applied.
const primary = {
    index: '01',
    label: 'Primary Specialization',
    title: 'Backend Development',
    stack: 'Node.js Ecosystem',
    description:
        'My main focus: designing and building server-side applications with Node.js and TypeScript — REST APIs with NestJS and Express, data access, authentication and backend architecture.',
    core: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'NestJS', icon: SiNestjs },
        { name: 'Express', icon: SiExpress },
    ],
    competencies: [
        { name: 'REST APIs', icon: TbApi },
        { name: 'SQL', icon: TbSql },
        { name: 'Authentication & Authorization', icon: TbShieldLock },
        { name: 'Backend Architecture', icon: TbStack2 },
    ],
    usedIn: [
        { name: 'OpsPulse', section: 'Projects', target: 'project-opspulse' },
        { name: 'WorkOS Backend', section: 'Projects', target: 'project-workos' },
    ],
}

const secondary = [
    {
        index: '02',
        label: 'Secondary Backend Stack',
        title: '.NET & C#',
        accent: 'dotnet',
        icon: SiDotnet,
        description: 'Backend applications with ASP.NET Core — APIs, EF Core data access and layered architecture.',
        items: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'Web APIs', 'Layered Architecture'],
        itemIcons: { 'C#': TbBrandCSharp, '.NET': SiDotnet, 'ASP.NET Core': SiDotnet, 'Entity Framework Core': BsDatabaseGear },
        usedIn: [
            { name: 'BIMLint', note: 'production SaaS', section: 'DeployedProjects' },
            { name: 'RiskDesk', section: 'Projects', target: 'project-riskdesk' },
        ],
    },
    {
        index: '03',
        label: 'AI & Automation',
        title: 'Python',
        accent: 'python',
        icon: FaPython,
        description: 'AI integrations, LLM-powered features and automation workflows.',
        items: ['Python', 'FastAPI', 'LLM Integration', 'AI APIs', 'AI-powered Applications', 'Automation'],
        itemIcons: { Python: FaPython, FastAPI: SiFastapi, 'LLM Integration': LuBrainCircuit, Automation: LuWorkflow },
        usedIn: [{ name: 'TradingAI', section: 'Projects', target: 'project-tradingai' }],
    },
    {
        index: '04',
        label: 'Frontend Development',
        title: 'React & TypeScript',
        accent: 'react',
        icon: FaReact,
        description: 'Frontends that consume my own APIs, enabling full-stack delivery.',
        items: ['React', 'TypeScript', 'JavaScript', 'API Integration', 'Frontend Development'],
        itemIcons: { React: FaReact, TypeScript: SiTypescript, JavaScript: FaJsSquare, 'API Integration': TbPlugConnected },
        usedIn: [
            { name: 'BIMLint', section: 'DeployedProjects' },
            { name: 'RiskDesk', section: 'Projects', target: 'project-riskdesk' },
            { name: 'OpsPulse', section: 'Projects', target: 'project-opspulse' },
        ],
    },
]

const tools = {
    index: '05',
    label: 'Databases & Development Tools',
    items: [
        { name: 'PostgreSQL', icon: BiLogoPostgresql },
        { name: 'MongoDB', icon: DiMongodb },
        { name: 'Redis', icon: DiRedis },
        { name: 'Docker', icon: FaDocker },
        { name: 'Git', icon: FaGitAlt },
        { name: 'GitHub', icon: FaGithub },
        { name: 'GitHub Actions', icon: SiGithubactions },
        { name: 'Postman', icon: SiPostman },
    ],
}

// After switching section, scroll to the specific project card and briefly highlight it.
const goToProject = (targetId) => {
    if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
    }
    setTimeout(() => {
        const el = document.getElementById(targetId)
        if (!el) return
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        el.classList.remove('projectItem--flash')
        void el.offsetWidth
        el.classList.add('projectItem--flash')
    }, 120)
}

const UsedIn = ({ projects, onNavigate }) => (
    <div className="skillsUsedIn">
        <span className="skillsUsedInLabel">Applied in</span>
        <div className="skillsUsedInList">
            {projects.map((p) => (
                <button
                    key={p.name}
                    type="button"
                    className="skillsProjectLink"
                    onClick={() => {
                        onNavigate?.(p.section)
                        goToProject(p.target)
                    }}
                    aria-label={`${p.name}: view in ${p.section === 'DeployedProjects' ? 'Deployed Projects' : 'Projects'}`}
                >
                    {p.name}
                    {p.note && <span className="skillsProjectNote">· {p.note}</span>}
                    <FaArrowRight size={10} aria-hidden="true" />
                </button>
            ))}
        </div>
    </div>
)

const Skills = ({ onNavigate }) => {
    return (
        <div className="container">
            <div className="sectionTitleContainer">
                <h2 className="sectionTitle">TECHNICAL SKILLS</h2>
                <div className="sectionTitleLine"></div>
                <p className="skillsIntro">
                    Backend engineer focused on the <strong>Node.js</strong> ecosystem and{' '}
                    <strong>TypeScript</strong>, with additional experience building applications with{' '}
                    <strong>C# / .NET</strong>, <strong>React</strong> and <strong>Python</strong>-based AI integrations.
                </p>
            </div>

            <div className="skillsLayout">
                {/* 01 — Primary specialization */}
                <article className="skillsPrimary">
                    <div className="skillsPrimaryHeader">
                        <div className="skillsPrimaryBadgeIcon" aria-hidden="true">
                            <FaNodeJs size={44} />
                        </div>
                        <div>
                            <span className="skillsEyebrow skillsEyebrowPrimary">
                                {primary.index} · {primary.label}
                            </span>
                            <h3 className="skillsPrimaryTitle">
                                {primary.title} <span>— {primary.stack}</span>
                            </h3>
                        </div>
                    </div>

                    <p className="skillsPrimaryDescription">{primary.description}</p>

                    <div className="skillsCoreGrid">
                        {primary.core.map((item) => (
                            <div key={item.name} className="skillsCoreItem">
                                <item.icon size={30} aria-hidden="true" />
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="skillsCompetencies">
                        {primary.competencies.map((item) => (
                            <span key={item.name} className="skillsChip skillsChipPrimary">
                                <item.icon size={15} aria-hidden="true" />
                                {item.name}
                            </span>
                        ))}
                    </div>

                    <UsedIn projects={primary.usedIn} onNavigate={onNavigate} />
                </article>

                {/* 02–04 — Complementary stacks */}
                <div className="skillsSecondaryGrid">
                    {secondary.map((group) => {
                        const GroupIcon = group.icon
                        return (
                            <article key={group.index} className={`skillsCard skillsCard--${group.accent}`}>
                                <div className="skillsCardHeader">
                                    <div className="skillsCardIcon" aria-hidden="true">
                                        <GroupIcon size={24} />
                                    </div>
                                    <div>
                                        <span className="skillsEyebrow">
                                            {group.index} · {group.label}
                                        </span>
                                        <h3 className="skillsCardTitle">{group.title}</h3>
                                    </div>
                                </div>

                                <p className="skillsCardDescription">{group.description}</p>

                                <div className="skillsChipList">
                                    {group.items.map((item) => {
                                        const ItemIcon = group.itemIcons[item]
                                        return (
                                            <span key={item} className="skillsChip">
                                                {ItemIcon && <ItemIcon size={13} aria-hidden="true" />}
                                                {item}
                                            </span>
                                        )
                                    })}
                                </div>

                                <UsedIn projects={group.usedIn} onNavigate={onNavigate} />
                            </article>
                        )
                    })}
                </div>

                {/* 05 — Databases & tools */}
                <section className="skillsTools" aria-label={tools.label}>
                    <span className="skillsEyebrow">
                        {tools.index} · {tools.label}
                    </span>
                    <div className="skillsToolsList">
                        {tools.items.map((item) => (
                            <span key={item.name} className="skillsTool">
                                <item.icon size={16} aria-hidden="true" />
                                {item.name}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Skills
