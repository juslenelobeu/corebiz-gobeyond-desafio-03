import React from 'react'
import './styles.scss'
interface ContactProps {
  whatsapp: string
  github: string
  linkedin: string
  dribbble: string
}

export default function Contact({ whatsapp, github, linkedin, dribbble }: ContactProps) {
  return (
    <section className="contact">
      <a className="contact__link" href={whatsapp} target="_blank" rel="noopener noreferrer" title="Contato pelo WhatsApp">
        <i className={`contact__icon fab fa-whatsapp`}></i>
        <span className="contact__name">WhatsApp</span>
      </a>
      <a className="contact__link" href={github} target="_blank" rel="noopener noreferrer" title="Contato pelo WhatsApp">
        <i className={`contact__icon fab fa-github-alt`}></i>
        <span className="contact__name">Github</span>
      </a>
      <a className="contact__link" href={linkedin} target="_blank" rel="noopener noreferrer" title="Contato pelo WhatsApp">
        <i className={`contact__icon fab fa-linkedin-in`}></i>
        <span className="contact__name">LinkedIn</span>
      </a>
      <a className="contact__link" href={dribbble} target="_blank" rel="noopener noreferrer" title="Contato pelo WhatsApp">
        <i className={`contact__icon fab fa-dribbble`}></i>
        <span className="contact__name">Dribbble</span>
      </a>
    </section>
  )
}
