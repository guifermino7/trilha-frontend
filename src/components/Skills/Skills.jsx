import React from "react";
import "./styles.css";

export class Skills extends React.Component {
    render() {
        return (
            <div className="skills">
                <h2>Habilidades:</h2>

                <ul className="skill-list">
                    <li>Proatividade</li>
                    <li>Boa comunicação</li>
                    <li>Aprendizagem rápida</li>
                    <li>Resolução de problemas</li>
                    <li>Organização</li>
                    <li>Trabalho em equipe</li>
                    <li>Pensamento crítico</li>
                </ul>
            </div>
        )
    }
}