
import React, { useState } from 'react'
import Navbar from '../src/components/Navbar'
import AboutMe from '../src/components/AboutMe'
import Skills from '../src/components/Skills'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import './app.css'

function App() {
    const [activeSection, setActiveSection] = useState('AboutMe')

    const renderSection = () => {
        switch (activeSection) {
            case 'AboutMe':
                return <AboutMe />
            case 'Skills':
                return <Skills />
            case 'Certificates':
                return <Certificates />
            case 'Projects':
                return <Projects />
            case 'ContactMe':
                return <ContactMe />
            default:
                return <AboutMe />
        }
    }

    return (
        <div className="appShell">
            <Navbar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />

            <main className="contentWrapper">
                <div key={activeSection} className="animatedSection">
                    {renderSection()}
                </div>
            </main>
        </div>
    )
}

export default App
