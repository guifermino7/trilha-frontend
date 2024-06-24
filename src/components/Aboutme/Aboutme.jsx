import React from "react";

import "./styles.css";
import EuFoto from "../../assets/images/Eu.jpeg";

export class Aboutme extends React.Component {
    render() {
        return (
            <main>
                <div>
                    <img
                        src={EuFoto}
                        alt="Foto de Guilherme Fermino"
                        className="eu-foto"/>
                </div>
                <div className="about-me">
                    <h2>Quem sou eu?</h2>
                    <p className="introduction">
                        Olá!
                        Prazer, eu sou o Guilherme Fermino, tenho 22 anos e sou formado em Engenharia da Computação pela Universidade São Judas Tadeu. 
                    </p>
                    <p>
                        Sempre me interessei muito pela área de exatas e, por isso, já sabia que queria seguir carreira na engenharia. 
                        E por ser apaixonado por tecnologia e programação, não foi difícil de escolher o ramo da engenharia para estudar e me aprofundar!
                    </p>
                </div>
            </main>
        )
    }
}