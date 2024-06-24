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
                        Olá! Prazer, eu sou o Guilherme Fermino, atualmente tenho 22 anos e sou formado em engenharia da computação pela universidade São Judas Tadeu.
                    </p>
                    <p>
                        Por gostar muito de matemática e por me interessar por física, eu já sabia que iria fazer engenharia, mas faltou saber qual das várias engenharias. Por ser apaixonado por tecnologia e gostar muito de programação, escolhi cursar engenharia da computação.
                    </p>
                </div>
            </main>
        )
    }
}