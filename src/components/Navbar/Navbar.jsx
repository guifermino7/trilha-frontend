import React from "react";

import logoImg from "../../assets/images/react-icon.png";

import "./styles.css";

export class Navbar extends React.Component {
    render() {
        return (
            <header>
                <nav id="navbar">
                    <div className="nav-brand">
                        <img src={logoImg} alt="Logo do React" className="react logo"/>

                        <h1>Bootcamp de <span>Front</span> End</h1>
                    </div>

                    <ul className="nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Meus cursos</a></li>
                        <li><a href="https://www.linkedin.com/in/guilhermefermino/" target="_blank">Meu certificados</a></li>
                        <li><a href="https://github.com/guifermino7" target="_blank">Sobre mim</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
