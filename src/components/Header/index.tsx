import React from 'react'
import './styles.scss'

interface UserProps {
  name: string
  description: string
  avatar: string
  background: string
}

export default function Header({ name, description, avatar, background }: UserProps) {
  return (
    <header className="header header__background" style={{ backgroundImage: `url(${background})` }}>
      <img className="header__avatar" src={avatar} alt="" />
      <h1 className="header__name">{name}</h1>
      <h2 className="header__description">{description}</h2>
    </header>
  )
}
