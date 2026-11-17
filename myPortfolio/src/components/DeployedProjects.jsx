import React from 'react'
import '../styles/home.css'
import '../styles/deployed.css'
import '../styles/skills.css'
import '../styles/projects.css'
import { FaArrowRight, FaCube, FaGlobeEurope, FaExclamationTriangle, FaReact, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiDotnet } from 'react-icons/si'

const BIMLINT_URL = 'https://bimlint.com'

const steps = [
    {
        title: '1. Upload',
        text: 'The user uploads the IFC file exported from their design tool (Revit, ArchiCAD, Allplan, BricsCAD...).',
    },
    {
        title: '2. Extract',
        text: 'The system extracts every element, its properties, its location in the building and the relevant geometry.',
    },
    {
        title: '3. Check',
        text: 'A rule pack runs data-quality checks ("every door has a fire rating"), information requirements ("every space has a name and use") and code checks ("accessible doors are wide enough", "the evacuation route is within the limit").',
    },
    {
        title: '4. Review',
        text: 'Issues appear in a list and on the 3D model in the browser: click an issue and the camera flies to the problem element.',
    },
    {
        title: '5. Compare',
        text: 'When the next version is uploaded, BIMLint shows which issues were resolved, which persist and which are new.',
    },
]

const highlights = [
    {
        title: 'Configurable rule engine',
        text: 'Rules are defined as JSON instead of hard-coded, so new checks can be added or adjusted without touching the code.',
    },
    {
        title: 'Background processing',
        text: 'Large models are processed in background jobs, with live progress sent to the browser via SignalR.',
    },
    {
        title: 'Complete SaaS',
        text: 'Authentication, teams, Stripe subscriptions and PDF reports. Dockerized and deployed with CI/CD on GitHub Actions.',
    },
]

const stack = [
    { group: 'Backend', items: ['.NET', 'C#', 'ASP.NET Core', 'EF Core', 'SignalR', 'Hangfire'] },
    { group: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'three.js'] },
    { group: 'Data & DevOps', items: ['PostgreSQL', 'Redis', 'Docker', 'GitHub Actions'] },
]

const tags = ['.NET', 'C#', 'React', 'TypeScript', 'PostgreSQL', 'three.js', 'BIM/IFC', 'SaaS']

// Secondary, frontend-only demos. Kept visually smaller than BIMLint on purpose.
const demos = [
    {
        name: 'Movie Finder App',
        url: 'https://moviex-react.netlify.app/',
        repo: 'https://github.com/BorisEmilov/movieX-react',
        description: 'Find any movie, where to watch it, its trailer and detailed information.',
        tags: ['React', 'API Integration', 'Netlify'],
    },
    {
        name: 'Apple Landing Page',
        url: 'https://vite-iphone3d.netlify.app/',
        repo: 'https://github.com/BorisEmilov/Iphone3D',
        description: 'Apple-style landing page with an interactive 3D phone model.',
        tags: ['React', 'Vite', '3D Models', 'Netlify'],
    },
]

const openSite = () => window.open(BIMLINT_URL, '_blank', 'noopener,noreferrer')

const DeployedProjects = () => {
    return (
        <div className='container'>
            <div className="sectionTitleContainer">
                <h2 className="sectionTitle">DEPLOYED PROJECTS</h2>
                <div className="sectionTitleLine"></div>
            </div>

            <section className="mainProjectSection">
                <div className="mainProjectHeader">
                    <span className="deployedMiniTitle">Live in Production</span>
                    <h2 className="mainProjectTitle">Deployed Projects</h2>
                    <p className="projectsGithubSubtitle">
                        Projects that are deployed and running in production.
                    </p>
                </div>

                <article className="mainProjectCard deployedProjectCard" onClick={openSite}>
                    <div className="githubAccentBar deployedAccentBar"></div>

                    <div className="githubProjectLeft">
                        <div className="githubMainIcon">
                            <FaCube size={32} />
                        </div>

                        <div className="githubProjectTechIcon deployedTechIcon">
                            <SiDotnet size={28} />
                        </div>
                    </div>

                    <div className="githubProjectContent">
                        <div className="githubProjectTop">
                            <h3>BIMLint</h3>
                            <span className="githubProjectStatus deployedStatus">
                                <span className="deployedLiveDot"></span>
                                Live
                            </span>
                        </div>

                        <p className="deployedTagline">
                            A linter for buildings: like ESLint checks your code before a commit, BIMLint checks the model before it is submitted.
                        </p>

                        <p>
                            SaaS that checks BIM models in IFC format (the open BIM standard) for data quality
                            and building-code compliance, and shows the issues directly on the 3D model in the browser.
                        </p>

                        <p className="deployedMeta">
                            Personal project · Full-stack, built solo · Oct 2026 – Present
                        </p>

                        <div className="githubProjectTags">
                            {tags.map((tag) => <span key={tag}>{tag}</span>)}
                        </div>
                    </div>

                    <div className="githubProjectRight">
                        <div className="githubVisitButton deployedVisitButton">
                            <span>Visit Site</span>
                            <FaArrowRight size={14} />
                        </div>
                    </div>
                </article>

                <div className="deployedDetails">
                    <div className="deployedTwoCol">
                        <div className="deployedBlock">
                            <h4 className="deployedBlockTitle">The Problem</h4>
                            <p className="deployedText">
                                Construction is moving from 2D drawings to BIM models, and public procurement in Spain
                                and Europe increasingly requires them. But having a BIM model does not mean the project
                                complies with building codes or that the model is well built. Today it is checked by hand
                                (days of work for a 40-home building), with expensive desktop software that small studios
                                cannot afford, or not at all, and errors show up during permitting or on site, where
                                fixing a staircase or an exit door costs thousands of euros.
                            </p>
                        </div>

                        <div className="deployedBlock">
                            <h4 className="deployedBlockTitle">The Solution</h4>
                            <p className="deployedText">
                                A web tool that reviews the model automatically before it is submitted: no installation,
                                no expensive licenses and no learning curve. The user uploads the model and gets a list
                                of issues located on the 3D view, and can track how they are fixed from one version to the next.
                            </p>
                        </div>
                    </div>

                    <div className="deployedBlock">
                        <h4 className="deployedBlockTitle">How It Works</h4>
                        <div className="deployedHighlights">
                            {steps.map((item) => (
                                <div key={item.title} className="deployedHighlight">
                                    <h5>{item.title}</h5>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="deployedBlock">
                        <h4 className="deployedBlockTitle">Technical Highlights</h4>
                        <div className="deployedHighlights">
                            {highlights.map((item) => (
                                <div key={item.title} className="deployedHighlight">
                                    <h5>{item.title}</h5>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="deployedBlock">
                        <h4 className="deployedBlockTitle">Stack</h4>
                        <div className="deployedStack">
                            {stack.map((row) => (
                                <div key={row.group} className="deployedStackRow">
                                    <span className="deployedStackGroup">{row.group}</span>
                                    <div className="githubProjectTags">
                                        {row.items.map((item) => <span key={item}>{item}</span>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="deployedBlock">
                        <h4 className="deployedBlockTitle">
                            <FaGlobeEurope size={16} /> Country Rule Packs
                        </h4>
                        <p className="deployedText">
                            Rule packs based on Spanish regulations (CTE) plus reference values for other
                            countries in Europe and America.
                        </p>
                    </div>

                    <p className="deployedDisclaimer">
                        <FaExclamationTriangle size={14} />
                        BIMLint is a support tool: it does not certify regulatory compliance or replace a qualified professional.
                    </p>

                    <button type="button" className="deployedCta" onClick={openSite}>
                        Open bimlint.com <FaArrowRight size={14} />
                    </button>
                </div>
            </section>

            <section
                className="projectGroup projectGroup--react deployedDemos"
                aria-labelledby="deployed-demos-title"
            >
                <header className="projectGroupHeader">
                    <div className="projectGroupIcon" aria-hidden="true">
                        <FaReact size={22} />
                    </div>
                    <div>
                        <span className="skillsEyebrow">Frontend · Live Demos</span>
                        <h3 id="deployed-demos-title" className="projectGroupTitle">Other Live Demos</h3>
                    </div>
                </header>
                <p className="deployedDemosNote">
                    Smaller frontend projects deployed on Netlify as public demos.
                </p>

                <div className="projectGrid">
                    {demos.map((demo) => (
                        <article key={demo.name} className="projectItem">
                            <div className="projectItemTop">
                                <h4 className="projectItemTitle">{demo.name}</h4>
                                <span className="projectItemStatus">Live Demo</span>
                            </div>
                            <p className="projectItemDescription">{demo.description}</p>
                            <div className="skillsChipList">
                                {demo.tags.map((tag) => (
                                    <span key={tag} className="skillsChip">{tag}</span>
                                ))}
                            </div>
                            <div className="deployedDemoLinks">
                                <a
                                    className="projectItemLink"
                                    href={demo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Open ${demo.name} live demo`}
                                >
                                    <FaExternalLinkAlt size={12} aria-hidden="true" />
                                    Live Demo
                                </a>
                                <a
                                    className="projectItemLink"
                                    href={demo.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${demo.name} repository on GitHub`}
                                >
                                    <FaGithub size={14} aria-hidden="true" />
                                    Repo
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default DeployedProjects
