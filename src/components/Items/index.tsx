import React, { useState } from 'react'
import './styles.scss'

interface AppProps {
  content: any
}

export default function Items({ content }: AppProps) {
  const [item, setItem] = useState(0);
  return (
    <>
      <div className="tab">
        {
          content.map(({ tab }: any, index: number) => (
            <button className={`tab__item ${index === item ? 'tab__item--active' : ''}`} key={index} onClick={() => setItem(index)}>
              {index === 0 ? <i className="tab__icon fab fa-dribbble"></i> : <i className="tab__icon fab fa-github-alt"></i>}
              <span className="tab__name">{tab}</span>
            </button>
          ))
        }
      </div>
      <div className="tab__content">
        {
          content[item].items.map(({ image, link, title }: any, index: number) => (
            <a href={link} target="_blank" rel="noopener noreferrer" className="tab__content-card" style={{ backgroundImage: `url(${image})` }}>
              <h3 key={index} className="tab__content-title">{title}</h3>
            </a>
          ))
        }
      </div>
    </>
  );
}
