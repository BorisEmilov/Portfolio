import React from 'react'
import '../styles/navbar.css'

const Navbar = ({ activeSection, setActiveSection }) => {
    const links = [
        'AboutMe',
        'Skills',
        'Certificates',
        'Projects',
        'ContactMe'
    ]

    return (
        <header className="navbarWrapper">
            <nav className="navbar">
                <div className="navbarLogo">Portfolio</div>

                <div className="navbarLinks">
                    {links.map((link) => (
                        <button
                            key={link}
                            className={`navButton ${activeSection === link ? 'activeNavButton' : ''}`}
                            onClick={() => setActiveSection(link)}
                        >
                            {link}
                        </button>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar