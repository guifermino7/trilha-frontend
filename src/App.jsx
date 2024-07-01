import React from "react";
import './styles/App.css';

import { Counter } from "./components/Counter/Counter";
import { Aboutme } from "./components/Aboutme/Aboutme";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/Skills";
import { Knowledge } from "./components/Knowledge/Knowledge";

import logoImg from "./assets/images/portal-rick-and-morty.gif";
import article1Img from "./assets/images/html-logo.png";
import article2Img from "./assets/images/css-logo.png";
import article3Img from "./assets/images/javascript-logo.png";
import article4Img from "./assets/images/react-logo.png";
import marioGame from "./assets/images/mario-icon.png";

class App extends React.Component {
  constructor() {
    super();

    this.state = { showKnowledge: false }
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

                    <ul className="nav-list">
                        <li><a href="/">Home</a></li>
                        <li><button onClick={() => {
                                    this.setState({ showKnowledge: !this.state.showKnowledge })
                                }}>Meu conhecimento</button></li>
                        <li><a href="https://www.linkedin.com/in/guilhermefermino/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/guifermino7" target="_blank" rel="noreferrer">GitHub</a></li>
                    </ul>
                </nav>
        </header>
  
        <section className="intro" style={{display: this.state.showKnowledge ? "none" : "flex"}}>
            { this.state.showKnowledge ? null : <Aboutme/> }
        </section>

        <section className="bio" style={{display: this.state.showKnowledge ? "none" : "flex"}}>
            { this.state.showKnowledge ? null : <Experience/> }
            { this.state.showKnowledge ? null : <Skills/> }
        </section>

        {/* <Counter/> */}

        <section id="myknowledge" style={{display: this.state.showKnowledge ? "flex" : "none"}}>
          { this.state.showKnowledge ? <Knowledge
          title="Curso de HTML"
          provider="Ada Tech"
          description="Este é um curso de HTML, onde é fundamental consolidar conhecimentos para poder aprender React."
          thumbnail={article1Img}
          url="https://comunidade.ada.tech/cursos/829a58a4-5871-410f-883a-4653fcccb0b6"
          /> : null }

          { this.state.showKnowledge ? <Knowledge
          title="Curso de CSS"
          provider="Ada Tech"
          description="Este é um curso de CSS, onde é fundamental consolidar conhecimentos para poder aprender React."
          thumbnail={article2Img}
          url="https://comunidade.ada.tech/cursos/7b554e4d-867e-4859-a1ff-5effae0d5ff9"
          /> : null }

          { this.state.showKnowledge ? <Knowledge
          title="Curso de Javascript"
          provider="Ada Tech"
          description="Este é um curso de Javascript, onde é fundamental consolidar conhecimentos para poder aprender React."
          thumbnail={article3Img}
          url="https://comunidade.ada.tech/cursos/1eee6337-f72e-61e0-f36a-9477308320a9"
          /> : null }

          { this.state.showKnowledge ? <Knowledge
          title="Curso de React"
          provider="Ada Tech"
          description="Este é um curso de React, onde irá unir tudo que foi estudando nos cursos de HTML, CSS e Javascript junto com funcionalidades do React."
          thumbnail={article4Img}
          url="https://comunidade.ada.tech/cursos/b60dfd96-34d9-4880-b23e-7e3679eb5391"
          /> : null }
        </section>
      </div>
    );
  }
}

export default App;
