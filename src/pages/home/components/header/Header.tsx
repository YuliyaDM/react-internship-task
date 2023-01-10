import React from 'react'
import INavsList from '../../../../interfaces/INavsList.interfaces'
import './style/Header.module.scss'

export default function Header (props: { navsList: INavsList[] }) {
  const { navsList } = props

  return (
    <header className="header">
        <nav className="navs">
            {navsList.map((nav: INavsList, index: number) => {
              return (
                <div className="nav" key={index}>
                  <div className="nav__title">{nav.title}</div>
                </div>
              )
            })}
        </nav>
        <section className="author-bio">
            <strong className="author-bio__name">
                Daniel Banquo
            </strong>
            <div className="author-bio__info">
              <div className="author-bio__country">Netherlands</div>
              <div className="author-bio__profession">Designer</div>
            </div>
        </section>
        <section className="button">
            <div className="button__title">Hire Me</div>
        </section>
        <section className="about">
            <div className="about__title">About</div>
            <div className="about__info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, assumenda consequatur est ullam provident nisi voluptas cumque, sapiente deleniti veritatis quibusdam ut atque fuga necessitatibus. Dolores similique doloremque ut aut.
            </div>
        </section>
    </header>
  )
};
