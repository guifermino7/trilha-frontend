import React from "react";
import './styles/App.css';

import { Counter } from "./components/Counter/Counter";
import { Aboutme } from "./components/Aboutme/Aboutme";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/Skills";
import { Knowledge } from "./components/Knowledge/Knowledge";
import { Projects } from "./components/Projects/Projects";

import logoImg from "./assets/images/portal-rick-and-morty.gif";
import htmlImg from "./assets/images/html-logo.png";
import cssImg from "./assets/images/css-logo.png";
import javascriptImg from "./assets/images/javascript-logo.png";
import reactImg from "./assets/images/react-logo.png";
import mysqlImg from "./assets/images/mysql-logo.png";
import pythonImg from "./assets/images/python-logo.png";

import marioGame from "./assets/images/mario-icon.png";
import pokeball from "./assets/images/pokeball-icon.png";
import landingPageImg from "./assets/images/landing-page-logo.png";

class App extends React.Component {
  constructor() {
    super();

    this.state = { showKnowledge: false }
    this.state = { showMenuBar: false }
  }

  render() {
    return (
      <div className="site">
        <header>
                <nav id="navbar">
                    <div className="nav-brand">
                        <img src={logoImg} alt="Portal do Rick and Morty" className="portal logo"/>

                        <h1>Software <span>Engineer</span> GuiFermino7</h1>
                    </div>

                    <input id="checkbox" className="checkbox" type="checkbox"/>
                    <label className="label-menu" htmlFor="checkbox"><span className="menu-icon"></span>
                    </label>

                    <aside className="menu">
                        <ul className="nav-list" onClick={() => { this.setState({ showMenuBar: false }) }}>
                            <li><a href="/">Home</a></li>
                            <li><button onClick={() => { this.setState({ showKnowledge: true })}}>Meu conhecimento</button></li>
                            <li><a href="https://www.linkedin.com/in/guilhermefermino/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                            <li><a href="https://github.com/guifermino7" target="_blank" rel="noreferrer">GitHub</a></li>
                        </ul>
                    </aside>
                </nav>
        </header>
  
        <section className="intro" style={{display: this.state.showKnowledge ? "none" : "flex"}}>
            { this.state.showKnowledge ? null : <Aboutme/> }
        </section>

        <section className="bio" style={{display: this.state.showKnowledge ? "none" : "flex"}}>
          <div className="bio-container">
            { this.state.showKnowledge ? null : <Experience/> }
            { this.state.showKnowledge ? null : <Skills/> }
          </div>
        </section>

        {/* <Counter/> */}

        <div className="knowledge-container">
          <section id="myknowledge" style={{display: this.state.showKnowledge ? "flex" : "none"}}>
            { this.state.showKnowledge ? <Knowledge
            title="HTML"
            provider="Udemy e Ada Tech"
            description="Aprendi HTML através de Bootcamps, DevWeek e cursos na Udemy (JavaScript e TypeScript do básico ao avançado JS/TS) e na Ada Tech."
            thumbnail={htmlImg}
            /> : null }

            { this.state.showKnowledge ? <Knowledge
            title="CSS"
            provider="Udemy e Ada Tech"
            description="Aprendi CSS, assim como HTML, através de Bootcamps, DevWeek e cursos na Udemy (JavaScript e TypeScript do básico ao avançado JS/TS) e na Ada Tech."
            thumbnail={cssImg}
            /> : null }

            { this.state.showKnowledge ? <Knowledge
            title="Javascript"
            provider="Udemy e Ada Tech"
            description="Aprendi Javascript através de Bootcamps e cursos na Udemy (JavaScript e TypeScript do básico ao avançado JS/TS) e na Ada Tech."
            thumbnail={javascriptImg}
            /> : null }

            { this.state.showKnowledge ? <Knowledge
            title="React"
            provider="Ada Tech"
            description="Aprendi React através do Bootcamp da Santander com a Ada Tech."
            thumbnail={reactImg}
            /> : null }

            { this.state.showKnowledge ? <Knowledge
            title="MySQL"
            provider="Udemy e USJT"
            description="Aprendi MySQL através do curso 'SQL Completo - Aplicado ao Mercado de Trabalho' e na faculdade."
            thumbnail={mysqlImg}
            /> : null }

            { this.state.showKnowledge ? <Knowledge
            title="Python"
            provider="Curso em Vídeo"
            description="Aprendi Python através dos cursos 'Python 3 - Mundo 1' e 'Python 3 - Mundo 2'."
            thumbnail={pythonImg}
            /> : null }
          </section>

          <section id="myprojects" style={{display: this.state.showKnowledge ? "flex" : "none"}}>
            { this.state.showKnowledge ? <Projects
              title="Projeto - Mario Jump"
              description="Este é um projeto utilizando apenas HTML, CSS e Javascript a fim de treinar o conhecimento adquirido nos cursos. O projeto é um jogo onde tem como objetivo fazer com que o Mario pule os Koopas (tartarugas) sem tocar nelas, por que ao tocar ele morre e perde o jogo."
              thumbnail={marioGame}
              url="https://guifermino7.github.io/jogo-mario/"
              /> : null }

              { this.state.showKnowledge ? <Projects
              title="Projeto - Pokedex"
              description="Este é um projeto utilizando apenas HTML e CSS a fim de treinar o conhecimento adquirido na 'Semana do zero ao programador contratado'. O projeto é uma cópia da pokedex com informação dos primeiro 50 pokemons."
              thumbnail={pokeball}
              url="https://guifermino7.github.io/pokedex/"
              /> : null }
              
              { this.state.showKnowledge ? <Projects
              title="Projeto - Landing Page"
              description="Este é um projeto utilizando apenas HTML e CSS a fim de treinar o conhecimento adquirido no curso 'JavaScript e TypeScript do básico ao avançado JS/TS'. O projeto consiste em uma landing page com informações aleatórias."
              thumbnail={landingPageImg}
              url="https://guifermino7.github.io/my-first-landing-page/"
              /> : null }
          </section>
        </div>
      </div>
    );
  }
}

export default App;
