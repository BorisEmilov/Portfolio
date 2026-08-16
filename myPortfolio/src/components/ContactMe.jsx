import React, { useState } from 'react'
import '../styles/contact.css'
import { FaEnvelope, FaGithub, FaPaperPlane, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'


const ContactMe = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`)
        const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`)

        window.location.href = `mailto:bobi.emilov1@gmail.com?subject=${subject}&body=${body}`

        setSent(true)
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <div className='container'>
            <div className="sectionTitleContainer">
                <h2 className="sectionTitle">Contact Me</h2>
                <div className="sectionTitleLine"></div>
            </div>

            <section className='contactSection'>
                <div className='contactInfoCard'>
                    <div className="contactAccentBar"></div>

                    <span className='contactBadge'>Get In Touch</span>
                    <h3>Let's build something together</h3>
                    <p>
                        Feel free to reach out for collaborations, opportunities, or just to say hi.
                        I'll get back to you as soon as I can.
                    </p>

                    <div className='contactInfoList'>
                        <a
                            className='contactInfoItem'
                            href='mailto:bobi.emilov1@gmail.com'
                        >
                            <span className='contactInfoIcon'><FaEnvelope size={20} /></span>
                            <div>
                                <span className='contactInfoLabel'>Email</span>
                                <span className='contactInfoValue'>bobi.emilov1@gmail.com</span>
                            </div>
                        </a>

                        <a
                            className='contactInfoItem'
                            href='https://github.com/BorisEmilov'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <span className='contactInfoIcon'><FaGithub size={20} /></span>
                            <div>
                                <span className='contactInfoLabel'>GitHub</span>
                                <span className='contactInfoValue'>github.com/BorisEmilov</span>
                            </div>
                        </a>

                        <a
                            className='contactInfoItem'
                            href='https://www.linkedin.com/in/borislav-georgiev-5497a73aa/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <span className='contactInfoIcon'><FaLinkedin size={20} /></span>
                            <div>
                                <span className='contactInfoLabel'>LinkedIn</span>
                                <span className='contactInfoValue'>LinkedIn.com/Borislav Georgiev</span>
                            </div>
                        </a>

                        <div className='contactInfoItem'>
                            <span className='contactInfoIcon'><FaMapMarkerAlt size={20} /></span>
                            <div>
                                <span className='contactInfoLabel'>Location</span>
                                <span className='contactInfoValue'>Bulgaria, Sofia</span>
                            </div>
                        </div>
                    </div>
                </div>

                <form className='contactFormCard' onSubmit={handleSubmit}>
                    <div className='formGroup'>
                        <label htmlFor='name'>Name</label>
                        <input
                            id='name'
                            name='name'
                            type='text'
                            placeholder='Your name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className='formGroup'>
                        <label htmlFor='email'>Email</label>
                        <input
                            id='email'
                            name='email'
                            type='email'
                            placeholder='your.email@example.com'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className='formGroup'>
                        <label htmlFor='message'>Message</label>
                        <textarea
                            id='message'
                            name='message'
                            placeholder='Tell me about your project or opportunity...'
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type='submit' className='contactSubmitButton'>
                        <span>Send Message</span>
                        <FaPaperPlane size={14} />
                    </button>

                    {sent && (
                        <p className='contactSentNotice'>
                            Your email app should have opened — thanks for reaching out!
                        </p>
                    )}
                </form>
            </section>
        </div>
    )
}

export default ContactMe
