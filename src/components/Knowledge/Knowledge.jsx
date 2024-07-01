import React from "react";
import "./styles.css";

import marioGame from "../../assets/images/mario-icon.png";

export class Knowledge extends React.Component {
    render() {
        return (
            <div className="knowledge-container">
                <article id="knowledge">
                    <a href={this.props.url} target="_blank" rel="noreferrer">
                           <img
                            src={this.props.thumbnail}
                            alt={this.props.title}
                            className="logo"/>
                    </a>

                    <div className="knowledge-info">
                        <h2>{this.props.title}</h2>
                        <h3>{this.props.provider}</h3>

                        <p>{this.props.description}</p>
                    </div>
                </article >

                <article id="project">
                    <a href="https://guifermino7.github.io/jogo-mario/" target="_blank" rel="noreferrer">
                        <img
                            src={marioGame}
                            alt={this.props.title}
                            className="icone" />
                    </a>

                    <div className="project-info">
                        <h2>Projeto Mario Jump</h2>

                        <p>Este é um projeto utilizando apenas HTML, CSS e Javascript a fim de treinar o conhecimento adquirido nos cursos. O projeto é um jogo onde tem como objetivo fazer com que o Mario pule os Koopas (tartarugas) sem tocar nelas, por que ao tocar ele morre e perde o jogo.</p>
                    </div>
                </article>
            </div>
        )
    }
}