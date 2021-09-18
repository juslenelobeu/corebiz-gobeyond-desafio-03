import React from 'react'
import './styles.scss'
interface ContactProps {
  whatsapp: string
  phone: string
  email: string
}

export default function Contact({ whatsapp, phone, email }: ContactProps) {
  return (
    <section className="contact">
      <a className="contact__link" href={whatsapp} target="_blank" rel="noopener noreferrer" title="Contato pelo WhatsApp">
        <i className={`contact__icon fab fa-2x fa-whatsapp`}></i>
        <span className="contact__name">WhatsApp</span>
      </a>
      <a className="contact__link" href={phone} target="_blank" rel="noopener noreferrer" title="Contato pelo WhatsApp">
        <i className={`contact__icon fas fa-2x fa-phone-alt`}></i>
        <span className="contact__name">Phone</span>
      </a>
      <a className="contact__link" href={email} target="_blank" rel="noopener noreferrer" title="Contato pelo WhatsApp">
        <i className={`contact__icon far fa-2x fa-envelope`}></i>
        <span className="contact__name">E-mail</span>
      </a>
    </section>
  )
}
