import React from 'react'
import '../styles/home.css'
import '../styles/skills.css'
import '../styles/projects.css'
import { FaGithub, FaArrowRight, FaNodeJs, FaPython, FaReact, FaLock, FaExternalLinkAlt } from 'react-icons/fa'
import { SiDotnet } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'

// Projects are grouped with the same categories, numbering and accents
// used in the Skills section, so both pages read as one story.
const categories = [
    {
        index: '01',
        label: 'Primary Specialization',
        title: 'Node.js & TypeScript',
        accent: 'node',
        icon: FaNodeJs,
        featured: true,
        projects: [
            {
                id: 'project-riskdesk',
                name: 'RiskDesk',
                status: 'In Development',
                url: 'https://github.com/BorisEmilov/RiskDesk',
                description:
                    'Fraud and anti-money-laundering (AML) risk platform for casinos and iGaming operators. The domain models players, casino events and risk alerts raised by detectors such as multi-accounting, bonus abuse, payment velocity, structuring and sanctions screening — with severity-based SLAs, an alert review workflow and a full audit trail.',
                tags: ['TypeScript', 'Node.js', 'Express', 'React', 'PostgreSQL', 'Redis'],
            },
            {
                id: 'project-opspulse',
                name: 'OpsPulse System Dashboard',
                status: 'Public Repo',
                url: 'https://github.com/BorisEmilov/opsPulse',
                description:
                    'Work-order management dashboard with JWT authentication, work queues, jobs, workers and admin roles.',
                tags: ['Express', 'React', 'JWT', 'Authentication', 'SQLite'],
            },
            {
                id: 'project-workos',
                name: 'WorkOS Backend',
                status: 'Public Repo',
                url: 'https://github.com/BorisEmilov/WorkOS_backend',
                description: 'Backend to manage work orders organized by organizations, projects and tasks.',
                tags: ['Express', 'MongoDB', 'JWT', 'BcryptJS', 'Docker', 'Helmet', 'Morgan'],
            },
        ],
    },
    {
        index: '02',
        label: 'Secondary Backend Stack',
        title: '.NET & C#',
        accent: 'dotnet',
        icon: SiDotnet,
        projects: [
            {
                id: 'project-bimlint',
                name: 'BIMLint',
                status: 'Live',
                featured: true,
                demo: 'https://bimlint.com',
                demoLabel: 'Visit bimlint.com',
                description:
                    'A linter for buildings: like ESLint checks your code before a commit, BIMLint checks the BIM model before it is submitted. It runs configurable JSON rule packs over IFC files — data quality, information requirements and building-code checks — shows issues on the 3D model in the browser and compares versions. Production SaaS with background processing, live progress via SignalR, teams, Stripe subscriptions and PDF reports.',
                tags: ['C#', '.NET Core', 'ASP.NET Core', 'EF Core', 'SignalR', 'Hangfire', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'three.js', 'Docker'],
            },
        ],
    },
    {
        index: '03',
        label: 'AI & Automation',
        title: 'Python',
        accent: 'python',
        icon: FaPython,
        projects: [
            {
                id: 'project-tradingai',
                name: 'TradingAI',
                status: 'In Development',
                url: 'https://github.com/BorisEmilov/TradingAI',
                description:
                    'Autonomous AI trading system connected to MetaTrader 5. It performs technical analysis on live charts using institutional strategies (Smart Money Concepts, ICT, Elliott Wave) and executes trades based on its own predictions, with no manual intervention.',
                tags: ['Python', 'MetaTrader 5', 'Automation', 'Algorithmic Trading', 'Technical Analysis'],
            },
        ],
    },
    {
        index: '04',
        label: 'Frontend Development',
        title: 'React',
        accent: 'react',
        icon: FaReact,
        projects: [
            {
                id: 'project-movie-finder',
                name: 'Movie Finder App',
                status: 'Public Repo',
                url: 'https://github.com/BorisEmilov/movieX-react',
                demo: 'https://moviex-react.netlify.app/',
                description: 'Find any movie, where to watch it, its trailer and detailed information.',
                tags: ['React', 'API Integration'],
            },
            {
                id: 'project-weather',
                name: 'Weather App',
                status: 'Public Repo',
                url: 'https://github.com/BorisEmilov/MyWeather',
                description: 'Displays the weather forecast based on the user’s location.',
                tags: ['React', 'Geolocation', 'API Integration'],
            },
            {
                id: 'project-apple-landing',
                name: 'Apple Landing Page',
                status: 'Public Repo',
                url: 'https://github.com/BorisEmilov/Iphone3D',
                demo: 'https://vite-iphone3d.netlify.app/',
                description: 'Apple-style landing page with an interactive 3D phone model.',
                tags: ['React', '3D Models', 'Web Design'],
            },
            {
                id: 'project-burger',
                name: 'Burger Restaurant App',
                status: 'Public Repo',
                url: 'https://github.com/BorisEmilov/BurgerRestaurantApp',
                description: 'Landing page for a burger restaurant.',
                tags: ['React', 'Web Design'],
            },
        ],
    },
    {
        index: '05',
        label: 'Professional Tooling',
        title: 'Automation Tools',
        accent: 'tools',
        icon: IoLogoJavascript,
        projects: [
            {
                id: 'project-excel-tool',
                name: 'Excel Data Analysis & Performance Tracking Tool',
                status: 'Private Repo',
                private: true,
                url: 'https://github.com/BorisEmilov/DataAnalysis',
                description:
                    'JavaScript tool I built independently while working as a QA on a content moderation project for a multinational company. It automates data analysis and performance tracking, saving the QA team hours of manual reporting. Private for legal and confidentiality reasons.',
                tags: ['JavaScript', 'Excel', 'Data Analysis', 'Automation'],
            },
        ],
    },
]

const ProjectCard = ({ project, featured }) => (
    <article id={project.id} className={`projectItem ${featured || project.featured ? 'projectItem--featured' : ''}`}>
        <div className="projectItemTop">
            <h4 className="projectItemTitle">{project.name}</h4>
            <span
                className={`projectItemStatus ${
                    project.status === 'In Development' ? 'projectItemStatus--dev' : ''
                }`}
            >
                {project.private && <FaLock size={10} aria-hidden="true" />}
                {project.status}
            </span>
        </div>

        <p className="projectItemDescription">{project.description}</p>

        <div className="skillsChipList">
            {project.tags.map((tag) => (
                <span key={tag} className="skillsChip">
                    {tag}
                </span>
            ))}
        </div>

        <div className="deployedDemoLinks">
            {project.url && (
                <a
                    className="projectItemLink"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} repository on GitHub`}
                >
                    <FaGithub size={15} aria-hidden="true" />
                    View Repo
                    <FaArrowRight size={11} aria-hidden="true" />
                </a>
            )}
            {project.demo && (
                <a
                    className="projectItemLink"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.name} live demo`}
                >
                    <FaExternalLinkAlt size={12} aria-hidden="true" />
                    {project.demoLabel || 'Live Demo'}
                </a>
            )}
        </div>
    </article>
)

const Projects = ({ onNavigate }) => {
    return (
        <div className="container">
            <div className="sectionTitleContainer">
                <h2 className="sectionTitle">PROJECTS</h2>
                <div className="sectionTitleLine"></div>
                <p className="skillsIntro">
                    Organized by the same stacks as my skills, so each technology can be traced to real code —
                    starting with my main focus, <strong>Node.js backend development</strong>.
                </p>
            </div>

            <div className="skillsLayout">
                {categories.map((cat) => {
                    const CatIcon = cat.icon
                    return (
                        <section
                            key={cat.index}
                            className={`projectGroup projectGroup--${cat.accent} ${
                                cat.featured ? 'projectGroup--featured' : ''
                            }`}
                            aria-labelledby={`project-group-${cat.index}`}
                        >
                            <header className="projectGroupHeader">
                                <div className="projectGroupIcon" aria-hidden="true">
                                    <CatIcon size={cat.featured ? 30 : 22} />
                                </div>
                                <div>
                                    <span className={`skillsEyebrow ${cat.featured ? 'skillsEyebrowPrimary' : ''}`}>
                                        {cat.index} · {cat.label}
                                    </span>
                                    <h3 id={`project-group-${cat.index}`} className="projectGroupTitle">
                                        {cat.title}
                                    </h3>
                                </div>
                                {cat.projects.length > 0 && (
                                    <span className="projectGroupCount">
                                        {cat.projects.length} {cat.projects.length === 1 ? 'project' : 'projects'}
                                    </span>
                                )}
                            </header>

                            {cat.projects.length > 0 && (
                                <div className={`projectGrid ${cat.projects.length === 1 ? 'projectGrid--single' : ''}`}>
                                    {cat.projects.map((project) => (
                                        <ProjectCard key={project.id} project={project} featured={cat.featured} />
                                    ))}
                                </div>
                            )}

                            {cat.related && (
                                <div className="skillsUsedIn">
                                    <span className="skillsUsedInLabel">Also built with this stack</span>
                                    <button
                                        type="button"
                                        className="skillsProjectLink"
                                        onClick={() => {
                                            onNavigate?.(cat.related.section)
                                            window.scrollTo({ top: 0, behavior: 'smooth' })
                                        }}
                                        aria-label={`${cat.related.name}: view in Deployed Projects`}
                                    >
                                        {cat.related.name}
                                        <span className="skillsProjectNote">· {cat.related.note}</span>
                                        <FaArrowRight size={10} aria-hidden="true" />
                                    </button>
                                </div>
                            )}
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
