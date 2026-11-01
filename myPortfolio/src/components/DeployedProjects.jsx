import React from 'react'
import '../styles/home.css'
import '../styles/deployed.css'
import { FaArrowRight, FaCube, FaGlobeEurope, FaExclamationTriangle } from 'react-icons/fa'
import { SiDotnet } from 'react-icons/si'

const BIMLINT_URL = 'https://bimlint.com'

const stats = [
    { value: '~26k', label: 'Lines of C# (backend + tests)' },
    { value: '~6.3k', label: 'Lines of TypeScript (frontend)' },
    { value: '~210', label: 'Automated tests' },
    { value: '10', label: 'ADRs' },
]

const highlights = [
    {
        title: 'Compiled rule engine',
        text: 'JSON rules compiled to Expression Trees and validated against an interpreter with differential testing (10,000 cases). Regex uses NonBacktracking to guard against ReDoS. 2–3x faster than the interpreter with 0 B allocated per evaluation.',
    },
    {
        title: 'High-throughput ingestion',
        text: 'Streaming PostgreSQL binary COPY loads 50,000 elements in 480 ms vs 3,428 ms with EF Core: ~7x faster with ~40x less memory.',
    },
    {
        title: 'Evacuation routes',
        text: 'Multi-source Dijkstra from all exits at once, over points sampled inside each space.',
    },
    {
        title: 'Robust IFC extractor',
        text: 'Tolerates truncated files, invalid GUIDs, broken references and cycles without crashing the worker.',
    },
    {
        title: 'Version-to-version diffing',
        text: 'Each issue gets a fingerprint (rule + GlobalId), so new versions show resolved, persisting and new issues, and reviewer decisions carry over.',
    },
    {
        title: 'Background processing',
        text: 'Workers with separate queues by memory footprint, a distributed Redis lock and real-time progress over SignalR.',
    },
    {
        title: 'Direct-to-S3 uploads',
        text: 'Presigned URLs and SHA-256 deduplication, with the hash computed in the browser.',
    },
    {
        title: 'Security',
        text: 'Multi-tenant; in-memory JWT plus rotating refresh tokens with reuse detection; immediate revocation; distributed rate limiting on Redis.',
    },
    {
        title: 'Complete SaaS',
        text: 'Free, Professional (€49/mo) and Studio (€149/mo) plans billed with Stripe, teams, share links and an admin panel with rule versioning and audit log.',
    },
]

const stack = [
    {
        group: 'Backend',
        items: ['.NET 10', 'C#', 'ASP.NET Core Minimal APIs', 'EF Core', 'SignalR', 'Hangfire', 'xBIM', 'QuestPDF', 'Stripe'],
    },
    {
        group: 'Data & Infrastructure',
        items: ['PostgreSQL 17 (jsonb + GIN)', 'Redis 7', 'S3-compatible storage (Cloudflare R2)'],
    },
    {
        group: 'Frontend',
        items: ['React 19', 'TypeScript', 'Vite', 'TanStack Query', 'zustand', 'Tailwind CSS 4', 'three.js', 'web-ifc (Web Worker)'],
    },
    {
        group: 'DevOps',
        items: ['Docker (multi-arch)', 'Docker Compose', 'Caddy', 'GitHub Actions (CI + deploy)', 'Hetzner VPS', 'Testcontainers'],
    },
    {
        group: 'Architecture',
        items: ['Clean / hexagonal (6 projects)', 'Decisions documented in ADRs'],
    },
]

const countries = [
    'Spain (CTE DB-SI, DB-SUA, habitability & zoning)',
    'United Kingdom',
    'USA (IBC / ADA)',
    'Germany',
    'France',
    'Portugal',
    'Bulgaria',
    'Mexico',
    'Argentina',
    'Brazil',
    'Chile',
]

const features = [
    'Landing',
    'Sign up & login',
    'Projects & versions',
    '3D viewer with issues',
    'Filterable issue list',
    'Version comparison',
    'Clash detection',
    'Documents',
    'Team',
    'Sharing',
    'PDF reports',
    'Billing',
    'Admin panel',
]

const tags = ['.NET 10', 'C#', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'three.js', 'WebAssembly', 'BIM/IFC', 'SaaS', 'Stripe', 'Docker', 'GitHub Actions']

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
                            Code-compliance review of BIM (IFC) models, right in the browser.
                        </p>

                        <p>
                            SaaS that reads building models in IFC format (ISO 16739, the open BIM standard),
                            extracts their elements and properties, and runs rule packs on data quality,
                            accessibility, evacuation &amp; fire safety, habitability and zoning to detect
                            non-compliance. Issues are shown in a 3D viewer running in the browser with
                            WebAssembly. When a new model version is uploaded it shows which issues were
                            resolved, which persist and which are new, and it generates reproducible PDF reports.
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
                    <div className="deployedStats">
                        {stats.map((stat) => (
                            <div key={stat.label} className="deployedStat">
                                <span className="deployedStatValue">{stat.value}</span>
                                <span className="deployedStatLabel">{stat.label}</span>
                            </div>
                        ))}
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

                    <div className="deployedTwoCol">
                        <div className="deployedBlock">
                            <h4 className="deployedBlockTitle">
                                <FaGlobeEurope size={16} /> Country Rule Packs
                            </h4>
                            <p className="deployedText">
                                Reference values for 12 countries, including the ones below, plus a country-agnostic BIM data-quality pack.
                            </p>
                            <div className="githubProjectTags">
                                {countries.map((c) => <span key={c}>{c}</span>)}
                            </div>
                        </div>

                        <div className="deployedBlock">
                            <h4 className="deployedBlockTitle">Features</h4>
                            <div className="githubProjectTags">
                                {features.map((f) => <span key={f}>{f}</span>)}
                            </div>
                        </div>
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
        </div>
    )
}

export default DeployedProjects
